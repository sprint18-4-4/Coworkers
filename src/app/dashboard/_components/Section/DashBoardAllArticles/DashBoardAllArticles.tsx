"use client";

import { Select } from "@/common";
import { useState, useEffect, useRef } from "react";
import DefaultArticleCard from "../../../../(route)/dashboard/_components/Article/DefaultArticleCard";
import { SelectOption } from "@/common/Select/_types/types";
import { useArticleSearchStore } from "@/stores";
import { useDebounce } from "@/hooks";
import useGetArticlesInfinite from "@/api/hooks/article/useGetArticlesInfinite";
import { LoadingSpinner } from "@/features";
import { AnimatePresence, motion } from "framer-motion";

const DashBoardAllArticles = () => {
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const { keyword } = useArticleSearchStore();
  const debouncedValue = useDebounce(keyword);

  const options: SelectOption<"recent" | "like">[] = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  const {
    data: articles,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetArticlesInfinite({
    orderBy,
    keyword: debouncedValue,
    pageSize: 6,
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="mt-10">
      <div className="max-w-[1074px] mx-auto flex items-center justify-between">
        <h3 className="text-text-primary text-xl-bold">전체</h3>
        <Select value={orderBy} options={options} onChange={setOrderBy} />
      </div>

      <ul className="mt-10 grid grid-cols-1 pc:grid-cols-2 gap-4">
        <AnimatePresence>
          {articles?.pages.map((page) =>
            page.list.map((article) => (
              <motion.li
                key={article.id}
                initial={{ opacity: 0, x: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <DefaultArticleCard articleId={article.id} />
              </motion.li>
            )),
          )}
        </AnimatePresence>

        {isFetchingNextPage && <LoadingSpinner />}
      </ul>

      <div ref={observerRef} className="h-10" />
      {!hasNextPage && !isLoading && <p className="py-6 text-center text-state-400">더 이상 게시글이 없습니다.</p>}
    </div>
  );
};

export default DashBoardAllArticles;
