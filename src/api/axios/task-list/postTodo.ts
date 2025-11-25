import { instance } from "@/lib";
import { PostTodoRequest, PostTodoResponse } from "@/types";

const postTodo = async ({ groupId, formData }: PostTodoRequest): Promise<PostTodoResponse> => {
  const response = await instance.post(`/groups/${groupId}/task-lists`, { formData });

  return response.data;
};

export default postTodo;
