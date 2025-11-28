import { instance } from "@/lib";
import { GetArticleCommentsRequest, GetArticleCommentsResponse } from "./_type";

const getArticleComments = async ({ articleId, limit = 10, cursor }: GetArticleCommentsRequest) => {
  const { data } = await instance.get<GetArticleCommentsResponse>(`/articles/${articleId}/comments`, {
    params: { limit, cursor },
  });
  return data;
};

export default getArticleComments;
