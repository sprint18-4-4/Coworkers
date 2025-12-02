import { instance } from "@/lib";
import { DeleteGroupRequest, DeleteGroupResponse } from "./_type";

const deleteGroup = async ({ id }: DeleteGroupRequest): Promise<DeleteGroupResponse> => {
  const { data } = await instance.delete<DeleteGroupResponse>(`groups/${id}`);
  return data;
};

export default deleteGroup;
