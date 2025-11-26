import { cn } from "@/utils";
import { CommentItem, InputReply, Profile } from "@/common";
import { TASK_DETAIL_COMMENT_MOCK_DATA } from "@/MOCK_DATA";
import { FormEvent, useState } from "react";
import { usePostTaskListComment } from "@/api/hooks";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";

interface CommentSectionProps {
  data: GetTaskListDetailResponse;
}

// TODO(지권): 실제 댓글 데이터로 변경
const commentData = TASK_DETAIL_COMMENT_MOCK_DATA;

const CommentSection = ({ data }: CommentSectionProps) => {
  const [commentValue, setCommentValue] = useState("");

  const { mutate: postComment, isPending } = usePostTaskListComment({
    groupId: String(data.recurring.groupId),
    taskListId: String(data.recurring.taskListId),
    taskId: String(data.id),
    content: commentValue,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!commentValue.trim()) return;

    e.preventDefault();
    postComment();
    setCommentValue("");
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
        {commentData.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
