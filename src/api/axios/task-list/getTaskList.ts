import { instance } from "@/lib";
import { GetTaskListRequest, TaskListResponse } from "./_types";

const getTaskList = async ({ groupId, taskListId, date }: GetTaskListRequest): Promise<TaskListResponse> => {
  const response = await instance.get<TaskListResponse>(`/groups/${groupId}/task-lists/${taskListId}/tasks`, {
    params: date ? { date } : undefined,
  });

  const data = response.data.reverse();
  return data || [];
};

export default getTaskList;
