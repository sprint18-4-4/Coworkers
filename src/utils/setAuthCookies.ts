"use server";

import { cookies } from "next/headers";

type TokenPair = {
  accessToken: string;
  refreshToken: string;
};

const isProd = process.env.NODE_ENV === "production";

export const setAuthCookies = async ({ accessToken, refreshToken }: TokenPair) => {
  const cookieStore = await cookies();

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("accessToken", accessToken, {
    httpOnly: false,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });
};

export const clearAuthCookies = async () => {
  const cookieStore = await cookies();

  cookieStore.set("refreshToken", "", {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("accessToken", "", {
    httpOnly: false,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
};
