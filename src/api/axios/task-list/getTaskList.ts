import { instance } from "@/lib";

export interface GetTaskListResponse {
  groupId: string;
  taskListId: string;
  date?: string | null;
}

const getTaskList = async ({ groupId, taskListId, date }: GetTaskListResponse) => {
  const response = await instance.get(`/groups/${groupId}/task-lists/${taskListId}/tasks?date=${date}`);

  return response.data;
};

export default getTaskList;
