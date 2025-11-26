import { patchComment } from "@/api/axios";
import { PatchCommentRequest } from "@/api/axios/task-list-detail/_types/type";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchComment = ({ taskId, commentId, content }: PatchCommentRequest) => {
  const { success, error } = toastKit();
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => patchComment({ taskId, commentId, content }),

    onSuccess: () => {
      success("댓글 수정 성공");
      // queryClient.invalidateQueries({
      //   queryKey: ["group-info", groupId],
      // });
    },

    onError: () => {
      error("댓글 수정 실패");
    },
  });
};

export default usePatchComment;
