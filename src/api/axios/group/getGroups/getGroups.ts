import { instance } from "@/lib";
import { GetGroupsRequest, GetGroupsResponse } from "@/types";

const getGroups = async ({ id }: GetGroupsRequest): Promise<GetGroupsResponse> => {
  const { data } = await instance.get<GetGroupsResponse>(`/groups/${id}`);
  return data;
};

export default getGroups;
