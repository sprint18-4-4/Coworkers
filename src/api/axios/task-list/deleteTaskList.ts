import { instance } from "@/lib";
import { DeleteTaskListRequest } from "./_types";

const deleteTaskList = async ({ groupId, id }: DeleteTaskListRequest) => {
  const response = await instance.delete(`/groups/${groupId}/task-lists/${id}`);

  return response.data;
};

export default deleteTaskList;
