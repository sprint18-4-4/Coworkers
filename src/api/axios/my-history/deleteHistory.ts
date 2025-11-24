import { instance } from "@/lib";

export interface DeleteHistoryData {
  groupId: number;
  taskListId: number;
  taskId: number;
}

const deleteHistory = async ({ groupId, taskListId, taskId }: DeleteHistoryData) => {
  const response = await instance.delete(`/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`);

  return response.data;
};

export default deleteHistory;
