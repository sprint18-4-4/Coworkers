import { instance } from "@/lib";
import { PatchGroupRequest, PatchGroupResponse } from "./_type";

const patchGroup = async ({ param, body }: PatchGroupRequest): Promise<PatchGroupResponse> => {
  const { data } = await instance.patch(`/groups/${param.id}`, body);
  return data;
};

export default patchGroup;
