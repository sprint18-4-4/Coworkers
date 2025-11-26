import { useState } from "react";
import { cn } from "@/utils";
import { UserResponse } from "@/types";
import { CommentItem, InputReply, Profile } from "@/common";
import { useGetTaskListComment } from "@/api/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useDetailCommentMutations } from "../../../_hooks";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";

interface CommentSectionProps {
  data: GetTaskListDetailResponse;
}

const CommentSection = ({ data }: CommentSectionProps) => {
  const queryClient = useQueryClient();
  const [commentValue, setCommentValue] = useState("");

  const { data: commentData } = useGetTaskListComment({ taskId: String(data.id) });
  const myData = queryClient.getQueryData<UserResponse>(["user"]);
  const myComment = myData?.id === data.writer.id;

  const { postCommentPending, deleteComment, handleSubmitComment } = useDetailCommentMutations({
    groupId: String(data.recurring.groupId),
    taskListId: String(data.recurring.taskListId),
    taskId: String(data.id),
    comment: {
      commentValue,
      setCommentValue,
    },
  });

  return (
    <>
      <section className="space-y-4">
        <div className={cn("flex items-center gap-1 text-lg-bold text-text-primary mt-10", "tablet:text-2lg-bold")}>
          <h2>댓글</h2>
          <span className={cn("text-lg-bold text-brand-primary", "tablet:text-2lg-bold")}>{data.commentCount}</span>
        </div>
        <form aria-label="댓글 작성" onSubmit={handleSubmitComment} className="flex items-center gap-3 w-full">
          <Profile src={data.writer.image} />
          <InputReply value={commentValue} onChange={setCommentValue} isSubmitting={postCommentPending} />
        </form>
      </section>

      <ul aria-label="댓글 목록" className="mt-1">
        {commentData?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            showKebab={myComment}
            onDelete={() => deleteComment({ taskId: String(data.id), commentId: String(comment.id) })}
            onUpdate={() => {}}
          />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
