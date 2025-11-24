import { instance } from "@/lib";

interface GetGroupInfoParams {
  groupId: string;
}

const getGroupInfo = async ({ groupId }: GetGroupInfoParams) => {
  const response = await instance(`/groups/${groupId}`);
  return response.data;
};

export default getGroupInfo;
