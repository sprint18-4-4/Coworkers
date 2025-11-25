import { instance } from "@/lib";
import { PostTaskRequest, PostTaskResponse } from "./_types/type";

const postTask = async ({ groupId, taskListId, formData }: PostTaskRequest): Promise<PostTaskResponse> => {
  const response = await instance.post<PostTaskResponse>(`/groups/${groupId}/task-lists/${taskListId}/tasks`, formData);

  return response.data;
};

export default postTask;
