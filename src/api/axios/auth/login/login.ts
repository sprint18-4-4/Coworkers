import { instance } from "@/lib";
import { AuthToken, User } from "@/types";
import { AxiosError } from "axios";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = AuthToken & {
  user: User;
};

export const postLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const { data } = await instance.post<LoginResponse>("/auth/signIn", credentials);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error("로그인 중 알 수 없는 오류가 발생했습니다.");
  }
};
