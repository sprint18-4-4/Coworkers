import { instance } from "@/lib";
import { PatchUserPasswordRequest, PatchUserPasswordResponse } from "./type";

const patchUserPassword = async (request: PatchUserPasswordRequest): Promise<PatchUserPasswordResponse> => {
  const { data } = await instance.patch<PatchUserPasswordResponse>("/user/password", request);
  return data;
};

export default patchUserPassword;
