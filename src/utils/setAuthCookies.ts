"use server";

import { cookies } from "next/headers";

type TokenPair = {
  accessToken: string;
  refreshToken: string;
};

const setAuthCookies = async ({ accessToken, refreshToken }: TokenPair) => {
  const cookieStore = await cookies();
  const isProd = process.env.NEXT_PUBLIC_API_URL === "production";

  cookieStore.set("accessToken", accessToken, {
    secure: isProd,
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, {
    secure: isProd,
    path: "/",
  });
};

export default setAuthCookies;
