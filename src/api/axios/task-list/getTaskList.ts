import { instance } from "@/lib";
import { GetTaskListRequest } from "@/types";

const getTaskList = async ({ groupId, taskListId, date }: GetTaskListRequest) => {
  const response = await instance.get(`/groups/${groupId}/task-lists/${taskListId}/tasks`, {
    params: date ? { date } : undefined,
  });
  return response.data;
};

export default getTaskList;
