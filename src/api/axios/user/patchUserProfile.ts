import { instance } from "@/lib";
import { PatchUserProfileRequest, PatchUserProfileResponse } from "./type";

const patchUserProfile = async (request: PatchUserProfileRequest): Promise<PatchUserProfileResponse> => {
  const { data } = await instance.patch<PatchUserProfileResponse>("/user", request);
  return data;
};

export default patchUserProfile;
