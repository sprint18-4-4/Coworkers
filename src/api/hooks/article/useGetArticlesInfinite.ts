"use client";

import { getArticles } from "@/api/axios";
import { GetArticlesRequest } from "@/api/axios/article/_type";
import { useInfiniteQuery } from "@tanstack/react-query";

type UseGetArticlesInfiniteParams = Omit<GetArticlesRequest, "page"> & {
  pageSize?: number;
};

const useGetArticlesInfinite = (params: UseGetArticlesInfiniteParams) => {
  const { pageSize = 6, ...rest } = params;

  return useInfiniteQuery({
    queryKey: ["articles", rest],
    queryFn: ({ pageParam = 1 }) =>
      getArticles({
        ...rest,
        page: pageParam,
        pageSize,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce((acc, page) => acc + page.list.length, 0);

      return loadedCount < lastPage.totalCount ? allPages.length + 1 : undefined;
    },

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export default useGetArticlesInfinite;
