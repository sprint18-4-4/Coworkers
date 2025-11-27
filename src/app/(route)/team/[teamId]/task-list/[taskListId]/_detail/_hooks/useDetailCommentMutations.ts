import { FormEvent } from "react";
import { useDeleteComment, usePatchComment, usePostTaskListComment } from "@/api/hooks";

interface Comment {
  commentValue: string;
  setCommentValue: (value: string) => void;
}

interface UseCommentMutationsProps {
  groupId: string;
  taskListId: string;
  taskId: string;
  comment: Comment;
}

const useDetailCommentMutations = ({ groupId, taskListId, taskId, comment }: UseCommentMutationsProps) => {
  const { mutate: postComment, isPending: postCommentPending } = usePostTaskListComment({
    groupId,
    taskListId,
    taskId,
  });

  const trimmedCommentValue = comment.commentValue.trim();
  const handleSubmitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!trimmedCommentValue) return;

    postComment(trimmedCommentValue, {
      onSuccess: () => {
        comment.setCommentValue("");
      },
    });
  };

  const { mutate: deleteComment } = useDeleteComment();
  const { mutate: updateComment } = usePatchComment();

  const handleUpdateComment = (commentId: string, newContent: string) => {
    updateComment({
      taskId: String(taskId),
      commentId: String(commentId),
      content: newContent,
    });
  };

  return {
    postComment,
    postCommentPending,
    deleteComment,
    handleUpdateComment,
    handleSubmitComment,
  };
};

export default useDetailCommentMutations;
