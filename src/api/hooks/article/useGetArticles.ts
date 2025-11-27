import { getArticles } from "@/api/axios";
import { GetArticlesRequest } from "@/api/axios/article/_types/type";
import { useQuery } from "@tanstack/react-query";

const useGetArticles = (params: GetArticlesRequest) => {
  return useQuery({
    queryKey: ["articles", params],
    queryFn: () => getArticles(params),
    placeholderData: (prev) => prev,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
};

export default useGetArticles;
