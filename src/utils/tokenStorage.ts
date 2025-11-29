const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

type SameSiteOption = "lax" | "strict" | "none";

type CookieOptions = {
  maxAgeSeconds?: number;
  path?: string;
  secure?: boolean;
  sameSite?: SameSiteOption;
};

const isBrowser = typeof document !== "undefined";

const serializeOptions = (options?: CookieOptions): string => {
  if (!options) return "";

  const path = options.path ?? "/";
  const pathOption = `; Path=${path}`;

  const maxAge = typeof options.maxAgeSeconds === "number" ? `; Max-age=${options.maxAgeSeconds}` : "";
  const secure = options.secure ? "; Secure" : "";
  const sameSite = options.sameSite ? `; SameSite=${options.sameSite}` : "";

  return `${pathOption}${maxAge}${secure}${sameSite}`;
};

const setCookie = (name: string, value: string, options?: CookieOptions) => {
  if (!isBrowser) return;

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${serializeOptions(options)}`;
};

const getCookie = (name: string): string | null => {
  if (!isBrowser) return null;

  const encodedName = `${encodeURIComponent(name)}=`;

  const pair = document.cookie.split("; ").findLast((cookie) => cookie.startsWith(encodedName));

  if (!pair) return null;

  const value = pair.slice(encodedName.length);
  return decodeURIComponent(value);
};

const clearCookie = (name: string) => {
  setCookie(name, "", { maxAgeSeconds: 0, path: "/" });
};

const tokenStorage = {
  getAccessToken: (): string | null => getCookie(ACCESS_TOKEN_KEY),

  setAccessToken: (accessToken: string) => {
    const Options: CookieOptions = {
      path: "/",
      maxAgeSeconds: 60 * 60 * 1,
      secure: true,
      sameSite: "lax",
    };

    setCookie(ACCESS_TOKEN_KEY, accessToken, Options);
  },

  clearTokens: () => {
    clearCookie(ACCESS_TOKEN_KEY);
  },
};

export default tokenStorage;
