import { instance } from "@/lib";
import { CreateTeamRequest, CreateTeamResponse } from "./_type/types";

const postCreateTeam = async ({ name, image }: CreateTeamRequest): Promise<CreateTeamResponse> => {
  const response = await instance.post<CreateTeamResponse>(`/groups`, {
    name,
    image,
  });
  return response.data;
};

export default postCreateTeam;
