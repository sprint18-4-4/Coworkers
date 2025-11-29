import { instance } from "@/lib";
import { GetArticlesRequest, GetArticlesResponse } from "./_type";

const getArticles = async (params: GetArticlesRequest): Promise<GetArticlesResponse> => {
  const { data } = await instance.get<GetArticlesResponse>("/articles", { params });
  return data;
};

export default getArticles;
