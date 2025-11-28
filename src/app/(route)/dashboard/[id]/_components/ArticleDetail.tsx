"use client";

import { useGetArticle } from "@/api/hooks";
import { useParams, useRouter } from "next/navigation";
import { Dropdown, Icon } from "@/common";
import ArticleTitle from "../../_components/Article/_internal/ArticleTitle";
import { useDevice } from "@/hooks";
import ArticleWriter from "../../_components/Article/_internal/ArticleWriter";
import ArticleContent from "../../_components/Article/_internal/ArticleContent";

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isPc } = useDevice();
  const { data: article } = useGetArticle({ articleId: Number(id) });

  const options = [
    { label: "수정하기", action: () => router.push(`/dashboard/${id}/edit`) },
    { label: "삭제하기", action: () => {} },
  ];

  if (!article) {
    return null;
  }

  return (
    <section className="bg-background-primary max-w-[900px] rounded-[20px] py-14 px-10">
      <header className="flex flex-col gap-4 border-b border-border-primary">
        <div className="flex items-center justify-between">
          <ArticleTitle title={article.title} />
          <Dropdown iconName="kebab" options={options} placement={isPc ? "bottom-left" : "bottom-right"} />
        </div>
        <div className="pb-3">
          <ArticleWriter nickname={article.writer.nickname} createdAt={article.createdAt} />
        </div>
      </header>

      <div>
        <ArticleContent content={article.content} />
      </div>
    </section>
  );
};

export default ArticleDetail;
