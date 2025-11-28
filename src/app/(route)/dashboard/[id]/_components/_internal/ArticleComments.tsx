"use client";

import {
  useDeleteArticleComment,
  useGetArticle,
  useGetArticleComments,
  useGetUser,
  usePostArticleComment,
} from "@/api/hooks";
import { Dropdown, InputReply, Profile } from "@/common";
import { useDevice } from "@/hooks";
import { formatTime } from "@/utils";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";
import ArticleEditCommentModal from "./ArticleEditCommentModal";
import { ArticleCommentType } from "@/types";

const ArticleComments = () => {
  const { id } = useParams();
  const { isPc } = useDevice();
  const articleId = Number(id);

  const { data: userInfo } = useGetUser();
  const { data: article } = useGetArticle({ articleId });
  const { data: articleComments } = useGetArticleComments({ articleId });
  const { mutate: postArticleComment } = usePostArticleComment();
  const { mutate: deleteArticleComment } = useDeleteArticleComment();

  const [commentValue, setCommentValue] = useState("");
  const [selectedComment, setSelectedComment] = useState<ArticleCommentType | null>(null);
  const [isOpenEditCommentModal, setIsOpenEditCommentModal] = useState(false);

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postArticleComment(
      { articleId, body: { content: commentValue } },
      {
        onSuccess: () => setCommentValue(""),
      },
    );
  };

  if (!article || !articleComments) {
    return null;
  }

  return (
    <section className="flex flex-col gap-9 py-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1 text-lg-bold text-text-primary">
          <span>댓글</span>
          <span className="text-brand-primary">{article.commentCount}</span>
        </div>
        <form aria-label="댓글 작성" className="flex items-center gap-3 w-full" onSubmit={handleCommentSubmit}>
          <Profile src={userInfo?.image ?? null} />
          <InputReply value={commentValue} onChange={setCommentValue} isSubmitting={false} />
        </form>
      </div>

      {/* TODO(상인): 추후 시간 남으면 컴포넌트로 빼기 */}
      <ul className="flex flex-col gap-5">
        {articleComments.list.map((comment) => (
          <li key={comment.id} className="flex gap-2 items-start border-t border-border-primary py-4">
            <Profile src={comment.writer.image} />
            <div className="flex-1">
              <span className="text-text-primary text-md-bold">{comment.writer.nickname}</span>
              <p className="text-text-primary text-md-regular">{comment.content}</p>
              <span className="text-state-400 text-md-regular">{formatTime(comment.createdAt)}</span>
            </div>
            {userInfo?.id === comment.writer.id && (
              <Dropdown
                iconName="kebab"
                options={[
                  {
                    label: "수정하기",
                    action: () => {
                      setIsOpenEditCommentModal(true);
                      setSelectedComment(comment);
                    },
                  },
                  { label: "삭제하기", action: () => deleteArticleComment({ commentId: comment.id }) },
                ]}
                placement={isPc ? "bottom-left" : "bottom-right"}
              />
            )}
          </li>
        ))}
      </ul>

      <ArticleEditCommentModal
        comment={selectedComment}
        isOpen={isOpenEditCommentModal}
        onClose={() => setIsOpenEditCommentModal(false)}
      />
    </section>
  );
};

export default ArticleComments;
