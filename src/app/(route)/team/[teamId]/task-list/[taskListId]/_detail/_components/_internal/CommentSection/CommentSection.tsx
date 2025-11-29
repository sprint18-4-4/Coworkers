import { useState } from "react";
import { cn } from "@/utils";
import { UserResponse } from "@/types";
import { CommentItem, InputReply, Profile } from "@/common";
import { useGetTaskListComment } from "@/api/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useDetailCommentMutations } from "../../../_hooks";
import { GetTaskDetailResponse } from "@/api/axios/task/_types";

interface CommentSectionProps {
  data: GetTaskDetailResponse;
}

const CommentSection = ({ data }: CommentSectionProps) => {
  const queryClient = useQueryClient();
  const [commentValue, setCommentValue] = useState("");

  const { data: commentData } = useGetTaskListComment({ taskId: data.id });
  const myData = queryClient.getQueryData<UserResponse>(["user"]);
  const myComment = myData?.id === data.writer.id;

  const { postCommentPending, deleteComment, handleUpdateComment, handleSubmitComment } = useDetailCommentMutations({
    groupId: data.recurring.groupId,
    taskListId: data.recurring.taskListId,
    taskId: data.id,
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
            onDelete={() => deleteComment({ taskId: data.id, commentId: comment.id })}
            onUpdate={(commentId, newContent) => handleUpdateComment(commentId, newContent)}
          />
        ))}
      </ul>
    </>
  );
};

export default CommentSection;
