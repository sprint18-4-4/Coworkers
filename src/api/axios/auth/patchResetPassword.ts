import { instance } from "@/lib";
import { PatchResetPasswordRequest, PatchResetPasswordResponse } from "./types";

const patchResetPassword = async (request: PatchResetPasswordRequest): Promise<PatchResetPasswordResponse> => {
  const { data } = await instance.patch<PatchResetPasswordResponse>("user/reset-password", request);
  return data;
};

export default patchResetPassword;
