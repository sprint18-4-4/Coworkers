import { instance } from "@/lib";
import { PatchArticleCommentRequest, PatchArticleCommentResponse } from "./_type";

const patchArticleComment = async ({ commentId, body }: PatchArticleCommentRequest) => {
  const { data } = await instance.patch<PatchArticleCommentResponse>(`/comments/${commentId}`, body);
  return data;
};

export default patchArticleComment;
