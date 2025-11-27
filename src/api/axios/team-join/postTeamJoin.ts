import { instance } from "@/lib";
import { PostTeamJoinRequest, PostTeamJoinResponse } from "./_type/type";

const postTeamJoin = async (request: PostTeamJoinRequest): Promise<PostTeamJoinResponse> => {
  const { data } = await instance.post<PostTeamJoinResponse>(`/groups/accept-invitation`, request);
  return data;
};

export default postTeamJoin;
