import { instance } from "@/lib";
import { GetTaskListRequest, TaskListData } from "@/types";

const getTaskList = async ({ groupId, taskListId, date }: GetTaskListRequest): Promise<TaskListData> => {
  const response = await instance.get(`/groups/${groupId}/task-lists/${taskListId}/tasks`, {
    params: date ? { date } : undefined,
  });

  return response.data || [];
};

export default getTaskList;
