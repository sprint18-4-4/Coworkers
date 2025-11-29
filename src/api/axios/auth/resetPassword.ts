import axios from "axios";
import { instance } from "@/lib";
import { ApiErrorResponse } from "@/types";
import { ResetPasswordRequest, ResetPasswordResponse } from "./types";

const postResetPassword = async (request: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  try {
    const { data } = await instance.post<ResetPasswordResponse>("/user/send-reset-password-email", request);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 404 || serverMessage === "User not found") {
        throw new Error("존재하지 않는 이메일입니다.");
      }
      throw new Error(serverMessage || error.message);
    }
    throw new Error("비밀번호 재설정 요청 중 오류가 발생했습니다.");
  }
};

export default postResetPassword;
