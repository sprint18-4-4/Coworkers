import { instance } from "@/lib";
import { PostArticleLikeRequest, PostArticleLikeResponse } from "./_types/type";

const postArticleLike = async ({ articleId }: PostArticleLikeRequest) => {
  const { data } = await instance.post<PostArticleLikeResponse>(`/articles/${articleId}/like`);
  return data;
};

export default postArticleLike;
