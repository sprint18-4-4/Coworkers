import { instance } from "@/lib";
import { DeleteTaskRequest } from "./_types";

const deleteTask = async ({ groupId, taskListId, taskId }: DeleteTaskRequest) => {
  const response = await instance.delete(`/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`);

  return response.data;
};

export default deleteTask;
