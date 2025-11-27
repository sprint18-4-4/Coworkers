import axios from "axios";
import { instance } from "@/lib";
import { ApiErrorResponse } from "@/types";
import { LoginResponse, LoginRequest } from "./_types/type";

const postLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const { data } = await instance.post<LoginResponse>("/auth/signIn", credentials);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.message);
    }
    throw new Error("로그인 중 알 수 없는 오류가 발생했습니다.");
  }
};

export default postLogin;
