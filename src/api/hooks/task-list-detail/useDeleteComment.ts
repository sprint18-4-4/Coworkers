import { deleteComment } from "@/api/axios";
import { DeleteTaskListCommentRequest } from "@/api/axios/task-list-detail/_types/type";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteComment = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, commentId }: DeleteTaskListCommentRequest) => deleteComment({ taskId, commentId }),

    onSuccess: () => {
      success("댓글 삭제 성공");
      queryClient.invalidateQueries({
        queryKey: ["task-list-comment"],
      });
    },

    onError: () => {
      error("댓글 삭제 실패");
    },
  });
};

export default useDeleteComment;
