"use server";

import { setAuthCookies } from "@/utils";

interface KakaoLoginResult {
  success: boolean;
  error?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_LOGIN_URI;

const KakaoAuthAction = async (code: string): Promise<KakaoLoginResult> => {
  if (!API_URL || !REDIRECT_URI) {
    return { success: false, error: "Server Configuration Error" };
  }

  try {
    const response = await fetch(`${API_URL}/auth/signIn/KAKAO`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: code,
        redirectUri: REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "로그인 실패하였습니다." };
    }

    const data = await response.json();

    if (data.accessToken && data.refreshToken) {
      await setAuthCookies({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
      return { success: true };
    }

    return { success: false, error: "토큰이 유효하지 않습니다." };
  } catch (error) {
    return { success: false, error: "네트워크 오류가 발생하였습니다." };
  }
};

export default KakaoAuthAction;
