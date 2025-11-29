import { postArticleComment } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostArticleComment = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postArticleComment,
    onSuccess: () => {
      success("댓글을 성공적으로 등록하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["articleComments"] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
    onError: () => {
      error("댓글 등록을 실패하였습니다.");
    },
  });
};

export default usePostArticleComment;
