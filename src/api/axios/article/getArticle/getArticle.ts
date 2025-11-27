import { instance } from "@/lib";
import { GetArticleRequest, GetArticleResponse } from "../_types/type";

const getArticle = async ({ articleId }: GetArticleRequest) => {
  const { data } = await instance.get<GetArticleResponse>(`/articles/${articleId}`);
  return data;
};

export default getArticle;
