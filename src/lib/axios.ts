import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { tokenStorage } from "@/utils";

const BASEURL = process.env.NEXT_PUBLIC_API_URL;

type ConfigWithRetry = InternalAxiosRequestConfig & {
  retry?: boolean;
};

const NO_AUTH_URLS = ["/", "/auth/signup", "/auth/login", "/auth/refresh-token"];

const shouldAttachToken = (config: InternalAxiosRequestConfig): boolean => {
  const url = config.url;
  if (!url) return false;

  if (url.startsWith("/")) {
    return !NO_AUTH_URLS.includes(url);
  }

  return !NO_AUTH_URLS.some((noAuthUrl) => url.startsWith(noAuthUrl));
};

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const callRefreshEndpoint = async (): Promise<string | null> => {
  try {
    const response = await fetch("/auth/refresh-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { accessToken: string };

    return data.accessToken;
  } catch {
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
    const originalConfig = error.config as ConfigWithRetry | undefined;

    if (error.response?.status !== 401 || !originalConfig) {
      return Promise.reject(error);
    }

    if (originalConfig.retry) {
      return Promise.reject(error);
    }

    originalConfig.retry = true;

    const newAccessToken = await callRefreshEndpoint();

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
