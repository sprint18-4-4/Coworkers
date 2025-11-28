"use client";

import { useGetArticle } from "@/api/hooks";
import { FloatingButton, Icon } from "@/common";
import { useParams } from "next/navigation";
import ArticleLike from "../../../_components/Article/_internal/ArticleLike";
import { useDevice } from "@/hooks";

const ArticleLikeButton = () => {
  const { id } = useParams();
  const { isPc } = useDevice();
  const { data: article } = useGetArticle({ articleId: Number(id) });

  if (!article) {
    return null;
  }

  return isPc ? (
    <span className="flex-col-center gap-2 absolute right-[-120px]">
      <FloatingButton iconName="heartDefault" className="bg-background-inverse size-[64px]" />
      <ArticleLike likeCount={article?.likeCount} />
    </span>
  ) : (
    <span className="flex items-center gap-1 absolute right-0">
      <Icon name="heartDefault" className="size-6 tablet:size-6" />
      <ArticleLike likeCount={article?.likeCount} />
    </span>
  );
};

export default ArticleLikeButton;
