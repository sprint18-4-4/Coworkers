import { instance } from "@/lib";
import { PostArticleRequest } from "./_types/type";

const postArticle = async (body: PostArticleRequest) => {
  const { data } = await instance.post("/articles", body);
  return data;
};

export default postArticle;
