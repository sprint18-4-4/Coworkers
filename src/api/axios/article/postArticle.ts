import { instance } from "@/lib";
import { PostArticleRequest, PostArticleResponse } from "./_type";

const postArticle = async (body: PostArticleRequest) => {
  const { data } = await instance.post<PostArticleResponse>("/articles", body);
  return data;
};

export default postArticle;
