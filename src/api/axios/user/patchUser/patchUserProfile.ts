import { instance } from "@/lib";
import { PatchUserPasswordResponse, PatchUserProfileRequest, PatchUserProfileResponse } from "../_types/type";

const patchUserProfile = async (request: PatchUserProfileRequest): Promise<PatchUserPasswordResponse> => {
  const { data } = await instance.patch<PatchUserProfileResponse>(`/user`, request);
  return data;
};

export default patchUserProfile;
