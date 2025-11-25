import { instance } from "@/lib";
import { PostTaskRequest, PostTaskResponse } from "@/types";

const postTask = async ({ groupId, taskListId, formData }: PostTaskRequest): Promise<PostTaskResponse> => {
  const response = await instance.post(`/groups/${groupId}/task-lists/${taskListId}/tasks`, formData);

  return response.data;
};

export default postTask;
