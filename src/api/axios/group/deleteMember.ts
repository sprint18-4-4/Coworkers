import { instance } from "@/lib";
import { DeleteMemberRequest } from "./_type";

const deleteMember = async ({ id, memberUserId }: DeleteMemberRequest) => {
  const { data } = await instance.delete(`/groups/${id}/member/${memberUserId}`);
  return data;
};

export default deleteMember;
