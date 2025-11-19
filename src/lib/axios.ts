import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { tokenStorage } from "@/utils";

const BASEURL = process.env.NEXT_PUBLIC_API_URL;

type ConfigWithRetry = InternalAxiosRequestConfig & {
  retry?: boolean;
};

const NO_AUTH_URLS: readonly string[] = [
  `${BASEURL}/`,
  `${BASEURL}/auth/signup`,
  `${BASEURL}/auth/login`,
  `${BASEURL}/auth/refresh-token`,
];

const shouldAttachToken = (config: InternalAxiosRequestConfig): boolean => {
  const url = config.url;
  if (!url) return false;

  return !NO_AUTH_URLS.includes(url);
};

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async (instance: AxiosInstance): Promise<string | null> => {
  const refreshToken = tokenStorage.getRefreshToken();

  if (!refreshToken) {
    tokenStorage.clearTokens();
    return null;
  }

  try {
    const response = await instance.post<{ accessToken: string }>(`${BASEURL}/auth/refresh-token`, { refreshToken });

    const newAccessToken = response.data.accessToken;

    tokenStorage.setAccessToken(newAccessToken);

    return newAccessToken;
  } catch {
    tokenStorage.clearTokens();
    return null;
  }
};

instance.interceptors.request.use(
  (config) => {
    if (!shouldAttachToken(config)) {
      return config;
    }

    const accessToken = tokenStorage.getAccessToken();

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const originalConfig = error.config as ConfigWithRetry | undefined;

    if (status !== 401 || !originalConfig) {
      return Promise.reject(error);
    }

    if (originalConfig.retry) {
      return Promise.reject(error);
    }

    const refreshToken = tokenStorage.getRefreshToken();

    if (!refreshToken) {
      tokenStorage.clearTokens();
      return Promise.reject(error);
    }

    originalConfig.retry = true;

    const newAccessToken = await refreshAccessToken(instance);

    if (!newAccessToken) {
      return Promise.reject(error);
    }

    if (originalConfig.headers) {
      originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;
    }

    return instance(originalConfig);
  },
);

export default instance;
