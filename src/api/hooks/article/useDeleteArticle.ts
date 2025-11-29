import { deleteArticle } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  const { success, error } = toastKit();
  const router = useRouter();
  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      success("게시물을 성공적으로 삭제하였습니다.");
      router.replace("/dashboard");
    },
    onError: () => {
      error("게시물을 삭제하지 못하였습니다.");
    },
  });
};

export default useDeleteArticle;
