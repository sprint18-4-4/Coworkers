import { instance } from "@/lib";
import { GetTaskRequest, TaskResponse } from "./_types";

const getTask = async ({ groupId, taskListId, date }: GetTaskRequest): Promise<TaskResponse> => {
  const response = await instance.get<TaskResponse>(`/groups/${groupId}/task-lists/${taskListId}/tasks`, {
    params: date ? { date } : undefined,
  });

  const data = response.data.reverse();
  return data || [];
};

export default getTask;
