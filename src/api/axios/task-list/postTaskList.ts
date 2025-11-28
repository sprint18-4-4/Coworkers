import { instance } from "@/lib";
import { PostTaskListRequest, PostTaskListResponse } from "./_types";

const postTaskList = async ({ groupId, name }: PostTaskListRequest): Promise<PostTaskListResponse> => {
  const response = await instance.post<PostTaskListResponse>(`/groups/${groupId}/task-lists`, { name });

  return response.data;
};

export default postTaskList;
