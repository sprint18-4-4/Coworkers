import { instance } from "@/lib";
import { GetTaskListCommentRequest, GetTaskListCommentResponse } from "./_types/type";

const getTaskListComment = async ({ taskId }: GetTaskListCommentRequest): Promise<GetTaskListCommentResponse[]> => {
  const response = await instance.get<GetTaskListCommentResponse[]>(`/tasks/${taskId}/comments`);
  const reversedData = response.data.reverse();

  return reversedData || [];
};

export default getTaskListComment;
