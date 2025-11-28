import { instance } from "@/lib";
import { DeleteTaskListDetailRequest } from "./_types";

const deleteTaskListDetail = async ({ groupId, taskListId, taskId }: DeleteTaskListDetailRequest) => {
  const response = await instance.delete(`/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`);

  return response.data;
};

export default deleteTaskListDetail;
