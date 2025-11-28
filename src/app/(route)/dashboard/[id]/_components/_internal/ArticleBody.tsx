"use client";

import { useParams, useRouter } from "next/navigation";
import { Dropdown } from "@/common";
import { useDevice } from "@/hooks";
import { useGetArticle } from "@/api/hooks";
import ArticleTitle from "../../../_components/Article/_internal/ArticleTitle";
import ArticleWriter from "../../../_components/Article/_internal/ArticleWriter";
import ArticleContent from "../../../_components/Article/_internal/ArticleContent";

const ArticleBody = () => {
  const router = useRouter();
  const { id } = useParams();
  const articleId = Number(id);
  const { isPc } = useDevice();

  const { data: article } = useGetArticle({ articleId });

  const options = [
    { label: "수정하기", action: () => router.push(`/dashboard/${articleId}/edit`) },
    { label: "삭제하기", action: () => {} },
  ];

  if (!article) {
    return null;
  }

  return (
    <section>
      <div className="flex flex-col gap-4 border-b border-border-primary">
        <div className="flex items-center justify-between">
          <ArticleTitle title={article.title} />
          <Dropdown iconName="kebab" options={options} placement={isPc ? "bottom-left" : "bottom-right"} />
        </div>
        <div className="pb-3">
          <ArticleWriter nickname={article.writer.nickname} createdAt={article.createdAt} />
        </div>
      </div>

      <div className="pt-6">
        <ArticleContent content={article.content} />
      </div>
    </section>
  );
};

export default ArticleBody;
