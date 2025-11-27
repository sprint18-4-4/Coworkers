import { instance } from "@/lib";
import { PostTaskRequest, PostTaskResponse } from "./_types/type";

const postRecurring = async ({ groupId, taskListId, formData }: PostTaskRequest): Promise<PostTaskResponse> => {
  const response = await instance.post<PostTaskResponse>(
    `/groups/${groupId}/task-lists/${taskListId}/recurring`,
    formData,
  );

  return response.data;
};

export default postRecurring;
