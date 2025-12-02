import { instance } from "@/lib";
import { GetInvitationRequest, GetInvitationResponse } from "./_type";

const getInvitation = async ({ id }: GetInvitationRequest) => {
  const { data } = await instance.get<GetInvitationResponse>(`/groups/${id}/invitation`);
  return data;
};

export default getInvitation;
