import { instance } from "@/lib";
import { GetTaskListRequest, GetTaskListResponse } from "./_type";

const getTaskList = async ({ groupId, taskListId, date }: GetTaskListRequest): Promise<GetTaskListResponse> => {
  const response = await instance.get<GetTaskListResponse>(`/groups/${groupId}/task-lists/${taskListId}/tasks`, {
    params: date ? { date } : undefined,
  });

  const data = response.data.reverse();
  return data || [];
};

export default getTaskList;
