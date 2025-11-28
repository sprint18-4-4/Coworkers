"use client";
import { useGetArticle, useGetArticleComments, useGetUser } from "@/api/hooks";
import { InputReply, Profile } from "@/common";
import { useParams } from "next/navigation";
import { useState } from "react";

const ArticleComments = () => {
  const { id } = useParams();
  const articleId = Number(id);

  const { data: userInfo } = useGetUser();
  const { data: article } = useGetArticle({ articleId });
  const { data: articleComments } = useGetArticleComments({ articleId });
  const [commentValue, setCommentValue] = useState("");

  if (!article || !articleComments) {
    return null;
  }
  return (
    <section className="py-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1 text-lg-bold text-text-primary">
          <span>댓글</span>
          <span className="text-brand-primary">{article.commentCount}</span>
        </div>
        <form aria-label="댓글 작성" className="flex items-center gap-3 w-full">
          <Profile src={userInfo?.image ?? null} />
          <InputReply value={commentValue} onChange={setCommentValue} isSubmitting={false} />
        </form>
      </div>
    </section>
  );
};

export default ArticleComments;
