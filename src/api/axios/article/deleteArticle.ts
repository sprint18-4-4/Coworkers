import { instance } from "@/lib";
import { DeleteArticleRequest, DeleteArticleResponse } from "./_type";

const deleteArticle = async ({ articleId }: DeleteArticleRequest) => {
  const { data } = await instance.delete<DeleteArticleResponse>(`/articles/${articleId}`);
  return data;
};

export default deleteArticle;
