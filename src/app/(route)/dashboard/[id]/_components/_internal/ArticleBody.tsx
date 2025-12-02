"use client";

import { useParams } from "next/navigation";
import { Dropdown } from "@/common";
import { useDevice } from "@/hooks";
import { useDeleteArticle, useGetArticle, useGetUser } from "@/api/hooks";
import ArticleTitle from "../../../_components/Article/_internal/ArticleTitle";
import ArticleWriter from "../../../_components/Article/_internal/ArticleWriter";
import ArticleContent from "../../../_components/Article/_internal/ArticleContent";
import ArticleLikeButton from "./ArticleLikeButton";
import ArticleEditModal from "../Modal/ArticleEditModal";
import { useState } from "react";

const ArticleBody = () => {
  const { id } = useParams();
  const { isPc } = useDevice();
  const articleId = Number(id);

  const { data: article } = useGetArticle({ articleId });
  const { data: userInfo } = useGetUser();
  const { mutate: deleteArticle } = useDeleteArticle();

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const options = [
    { label: "수정하기", action: () => setIsOpenEditModal(true) },
    { label: "삭제하기", action: () => deleteArticle({ articleId }) },
  ];

  if (!article || !userInfo) {
    return null;
  }

  return (
    <section className="relative">
      <div className="flex flex-col gap-4 border-b border-border-primary">
        <div className="flex items-center justify-between">
          <ArticleTitle title={article.title} />
          {userInfo.id === article.writer.id && (
            <Dropdown iconName="kebab" options={options} placement={isPc ? "bottom-left" : "bottom-right"} />
          )}
        </div>
        <div className="pb-3">
          <ArticleWriter nickname={article.writer.nickname} createdAt={article.createdAt} />
        </div>
      </div>

      <div className="pt-6">
        <ArticleContent content={article.content} image={article.image} imgSize={200} />
      </div>

      <ArticleLikeButton />

      {isOpenEditModal && (
        <ArticleEditModal
          key={article.id}
          isOpen={isOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
          article={article}
        />
      )}
    </section>
  );
};

export default ArticleBody;
