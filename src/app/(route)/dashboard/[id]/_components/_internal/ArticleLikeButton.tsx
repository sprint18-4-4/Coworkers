"use client";

import { useDeleteArticleLike, useGetArticle, usePostArticleLike } from "@/api/hooks";
import { FloatingButton, Icon } from "@/common";
import { useParams } from "next/navigation";
import ArticleLike from "../../../_components/Article/_internal/ArticleLike";
import { useDevice } from "@/hooks";

const ArticleLikeButton = () => {
  const { id } = useParams();
  const { isPc } = useDevice();

  const articleId = Number(id);

  const { data: article } = useGetArticle({ articleId });
  const { mutate: postArticleLike } = usePostArticleLike();
  const { mutate: deleteArticleLike } = useDeleteArticleLike();

  if (!article) {
    return null;
  }
  const { isLiked } = article;

  const handleLikeClick = () => {
    if (isLiked) {
      deleteArticleLike({ articleId });
    } else {
      postArticleLike({ articleId });
    }
  };

  return isPc ? (
    <span className="flex-col-center gap-2 absolute right-[-120px]">
      <FloatingButton
        iconName={isLiked ? "heartActive" : "heartDefault"}
        className="bg-background-inverse size-[64px]"
        onClick={handleLikeClick}
      />
      <ArticleLike likeCount={article?.likeCount} />
    </span>
  ) : (
    <span className="flex items-center gap-1 absolute right-0 bottom-[-40px] cursor-pointer" onClick={handleLikeClick}>
      <Icon name={isLiked ? "heartActive" : "heartDefault"} className="size-6 tablet:size-6" />
      <ArticleLike likeCount={article?.likeCount} />
    </span>
  );
};

export default ArticleLikeButton;
