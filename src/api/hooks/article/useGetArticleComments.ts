import { getArticleComments } from "@/api/axios";
import { GetArticleCommentsRequest } from "@/api/axios/article/_types/type";
import { useQuery } from "@tanstack/react-query";

const useGetArticleComments = ({ articleId, limit, cursor }: GetArticleCommentsRequest) => {
  return useQuery({
    queryKey: ["articleComments", articleId, limit, cursor],
    queryFn: () => getArticleComments({ articleId, limit, cursor }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

export default useGetArticleComments;
