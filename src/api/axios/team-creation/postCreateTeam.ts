import { instance } from "@/lib";

interface CreateTeamParams {
  name: string;
  image: string;
}

const postCreateTeam = async ({ name, image }: CreateTeamParams) => {
  const response = await instance.post(`/groups`, {
    name,
    image,
  });
  return response.data;
};

export default postCreateTeam;
