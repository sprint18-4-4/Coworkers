import { instance } from "@/lib";
import { DeleteArticleLikeRequest, DeleteArticleLikeResponse } from "./_type";

const deleteArticleLike = async ({ articleId }: DeleteArticleLikeRequest) => {
  const { data } = await instance.delete<DeleteArticleLikeResponse>(`/articles/${articleId}/like`);
  return data;
};

export default deleteArticleLike;
