import { patchArticle } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchArticle = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["patchArticle"],
    mutationFn: patchArticle,
    onSuccess: (data) => {
      const articleId = data.id;
      success("게시물을 성공적으로 수정하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
    },
    onError: () => {
      error("게시물을 수정하지 못하였습니다.");
    },
  });
};

export default usePatchArticle;
