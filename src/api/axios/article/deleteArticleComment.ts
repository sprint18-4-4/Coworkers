import { instance } from "@/lib";
import { DeleteArticleCommentRequest } from "./_types/type";

const deleteArticleComment = async ({ commentId }: DeleteArticleCommentRequest) => {
  const { data } = await instance.delete(`/comments/${commentId}`);
  return data;
};

export default deleteArticleComment;
