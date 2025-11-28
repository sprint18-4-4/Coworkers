import { instance } from "@/lib";
import { PostTaskListCommentRequest, PostTaskListCommentResponse } from "./_types";

const postTaskListComment = async ({
  taskId,
  content,
}: PostTaskListCommentRequest): Promise<PostTaskListCommentResponse> => {
  const response = await instance.post<PostTaskListCommentResponse>(`/tasks/${taskId}/comments`, { content });

  return response.data;
};

export default postTaskListComment;
