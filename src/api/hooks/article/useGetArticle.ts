import { getArticle } from "@/api/axios";
import { GetArticleRequest } from "@/api/axios/article/_type";
import { useQuery } from "@tanstack/react-query";

const useGetArticle = ({ articleId }: GetArticleRequest) => {
  return useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getArticle({ articleId }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

export default useGetArticle;
