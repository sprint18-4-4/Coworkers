import { cn } from "@/utils";
import { CommentItem, InputReply, Profile } from "@/common";
import { FormEvent, useState } from "react";
import { useGetTaskListComment, usePostTaskListComment } from "@/api/hooks";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";

interface CommentSectionProps {
  data: GetTaskListDetailResponse;
}

const CommentSection = ({ data }: CommentSectionProps) => {
  const [commentValue, setCommentValue] = useState("");

  const { data: commentData } = useGetTaskListComment({ taskId: String(data.id) });

  const { mutate: postComment, isPending } = usePostTaskListComment({
    groupId: String(data.recurring.groupId),
    taskListId: String(data.recurring.taskListId),
    taskId: String(data.id),
  });

  const trimmedCommentValue = commentValue.trim();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!trimmedCommentValue) return;

    postComment(trimmedCommentValue, {
      onSuccess: () => {
        setCommentValue("");
      },
    });
  };

  return (
    <>
      <section className="space-y-4">
        <div className={cn("flex items-center gap-1 text-lg-bold text-text-primary mt-10", "tablet:text-2lg-bold")}>
          <h2>댓글</h2>
          <span className={cn("text-lg-bold text-brand-primary", "tablet:text-2lg-bold")}>{data.commentCount}</span>
        </div>
        <form aria-label="댓글 작성" onSubmit={onSubmit} className="flex items-center gap-3 w-full">
          <Profile src={data.writer.image} />
          <InputReply value={commentValue} onChange={setCommentValue} isSubmitting={isPending} />
        </form>
      </section>

      <ul aria-label="댓글 목록" className="mt-1">
        {commentData?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={() => {}} onUpdate={() => {}} />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
