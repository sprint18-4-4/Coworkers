import { instance } from "@/lib";
import { DeleteTaskListCommentRequest } from "./_types/type";

const deleteComment = async ({ taskId, commentId }: DeleteTaskListCommentRequest) => {
  const response = await instance.delete(`/tasks/${taskId}/comments/${commentId}`);

  return response.data;
};

export default deleteComment;
