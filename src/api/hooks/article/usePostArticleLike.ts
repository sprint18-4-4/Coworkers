import { postArticleLike } from "@/api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostArticleLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postArticleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostArticleLike;
