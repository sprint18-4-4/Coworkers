import { instance } from "@/lib";
import { PostTodoRequest, PostTodoResponse } from "./_types";

const postTodo = async ({ groupId, name }: PostTodoRequest): Promise<PostTodoResponse> => {
  const response = await instance.post(`/groups/${groupId}/task-lists`, { name });

  return response.data;
};

export default postTodo;
