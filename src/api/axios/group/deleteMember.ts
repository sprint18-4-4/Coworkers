import { instance } from "@/lib";
import { DeleteMemberRequest } from "./_type";

const deleteMember = async ({ groupId, memberUserId }: DeleteMemberRequest) => {
  const { data } = await instance.delete(`/groups/${groupId}/member/${memberUserId}`);
  return data;
};

export default deleteMember;
