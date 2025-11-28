import { instance } from "@/lib";
import { PostTaskRequest, PostTaskResponse } from "./_type";

const postRecurring = async ({ groupId, taskListId, body }: PostTaskRequest): Promise<PostTaskResponse> => {
  const response = await instance.post<PostTaskResponse>(`/groups/${groupId}/task-lists/${taskListId}/recurring`, body);

  return response.data;
};

export default postRecurring;
