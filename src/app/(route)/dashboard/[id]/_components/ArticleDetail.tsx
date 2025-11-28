"use client";

import { useGetArticle } from "@/api/hooks";
import { useParams, useRouter } from "next/navigation";
import ArticleTitle from "../../_components/Article/_internal/ArticleTitle";
import { useDevice } from "@/hooks";
import { Dropdown, InputReply, Profile } from "@/common";
import ArticleWriter from "../../_components/Article/_internal/ArticleWriter";
import ArticleContent from "../../_components/Article/_internal/ArticleContent";
import { useState } from "react";

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isPc } = useDevice();
  const { data: article } = useGetArticle({ articleId: Number(id) });

  const [commentValue, setCommentValue] = useState("");

  const options = [
    { label: "수정하기", action: () => router.push(`/dashboard/${id}/edit`) },
    { label: "삭제하기", action: () => {} },
  ];

  if (!article) {
    return null;
  }

  console.log(article);
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

      <div className="pt-6">
        <ArticleContent content={article.content} />
      </div>

      <footer className="py-10">
        <section>
          <div className="flex items-center gap-1 text-lg-bold text-text-primary">
            <span>댓글</span>
            <span className="text-brand-primary">{article.commentCount}</span>
          </div>
          <form aria-label="댓글 작성">
            {/* <Profile src={} /> */}
            <InputReply value={commentValue} onChange={setCommentValue} isSubmitting={false} />
          </form>
        </section>
      </footer>
    </section>
  );
};

export default ArticleDetail;
