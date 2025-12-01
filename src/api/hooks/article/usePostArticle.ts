import { postArticle } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePostArticle = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { success, error } = toastKit();
  return useMutation({
    mutationFn: postArticle,
    onSuccess: (data) => {
      success("게시물 등록을 성공했습니다.");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      router.replace(`/dashboard/${data.id}`);
    },
    onError: () => {
      error("게시물을 등록하지 못하였습니다.");
    },
  });
};

export default usePostArticle;
