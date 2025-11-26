import { instance } from "@/lib";
import { DeleteTodoRequest } from "@/types";

const deleteTodo = async ({ groupId, id }: DeleteTodoRequest) => {
  const response = await instance.delete(`/groups/${groupId}/task-lists/${id}`);

  return response.data;
};

export default deleteTodo;
