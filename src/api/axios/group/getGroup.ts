import { instance } from "@/lib";

interface GetGroupInfoParams {
  groupId: string;
}

// TODO(지권): 상인님 PR 머지 후 제거될 파일

const getGroupInfo = async ({ groupId }: GetGroupInfoParams) => {
  const response = await instance.get(`/groups/${groupId}`);
  return response.data;
};

export default getGroupInfo;
