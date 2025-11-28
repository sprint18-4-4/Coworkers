import deleteArticleLike from "@/api/axios/article/deleteArticleLike";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteArticleLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteArticleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteArticleLike;
