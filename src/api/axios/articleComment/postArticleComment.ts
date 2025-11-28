import { instance } from "@/lib";
import { PostArticleCommentsRequest, PostArticleCommentsResponse } from "./_type";

const postArticleComment = async ({ articleId, body }: PostArticleCommentsRequest) => {
  const { data } = await instance.post<PostArticleCommentsResponse>(`/articles/${articleId}/comments`, body);
  return data;
};

export default postArticleComment;
