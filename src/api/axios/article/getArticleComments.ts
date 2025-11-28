import { instance } from "@/lib";
import { GetArticleCommentsRequest } from "./_types/type";

const getArticleComments = async ({ articleId, limit, cursor }: GetArticleCommentsRequest) => {
  const { data } = await instance.get(`/articles/${articleId}/comments`, { params: { limit, cursor } });
  return data;
};

export default getArticleComments;
