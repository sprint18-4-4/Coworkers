import { patchComment } from "@/api/axios";
import { PatchCommentRequest } from "@/api/axios/task-list-detail/_types/type";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchComment = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, commentId, content }: PatchCommentRequest) => patchComment({ taskId, commentId, content }),

    onSuccess: (_data, variables) => {
      if (!variables) return;
      const { taskId } = variables;

      success("댓글 수정 성공");
      queryClient.invalidateQueries({
        queryKey: ["task-list-comment", taskId],
      });
    },

    onError: () => {
      error("댓글 수정 실패");
    },
  });
};

export default usePatchComment;
