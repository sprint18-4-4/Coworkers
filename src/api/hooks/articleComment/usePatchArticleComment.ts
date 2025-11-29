import { patchArticleComment } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchArticleComment = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchArticleComment,
    onSuccess: () => {
      success("댓글을 성공적으로 변경하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["articleComments"] });
    },
    onError: () => {
      error("댓글을 변경하지 못하였습니다.");
    },
  });
};

export default usePatchArticleComment;
