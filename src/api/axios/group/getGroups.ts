import { instance } from "@/lib";
import { GetGroupsRequest, GetGroupsResponse } from "./_type";

const getGroups = async ({ id }: GetGroupsRequest): Promise<GetGroupsResponse> => {
  const { data } = await instance.get<GetGroupsResponse>(`/groups/${id}`);
  return data;
};

export default getGroups;
