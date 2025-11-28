import { instance } from "@/lib";
import { PatchTodoRequest } from "../task-list/_type";

const patchTodo = async ({ groupId, id, name }: PatchTodoRequest) => {
  const response = await instance.patch(`/groups/${groupId}/task-lists/${id}`, { name });

  return response.data;
};

export default patchTodo;
