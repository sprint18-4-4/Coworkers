"use client";

import { useGetArticles } from "@/api/hooks";
import BestArticleCard from "../../../../(route)/dashboard/_components/Article/BestArticleCard";
import { useDevice } from "@/hooks";
import { useState } from "react";
import Pagination from "./_internal/Pagination";

const DashBoardBestArticles = () => {
  const { isMobile, isTablet } = useDevice();
  const [page, setPage] = useState(1);
  const pageSize = isMobile ? 1 : isTablet ? 2 : 3;

  const { data: articles } = useGetArticles({ page, pageSize, orderBy: "recent" });

  if (!articles) {
    return null;
  }

  const totalPages = Math.ceil(articles?.totalCount / pageSize);

  return (
    <section className="gap-5 -mx-[26px] px-1 pc:-mx-0 pc:px-8 py-10 mt-10 bg-background-secondary pc:rounded-[20px]">
      <div className="px-[26px] pc:px-8">
        <h3 className="text-text-primary text-xl-bold mb-4">베스트 게시글</h3>
        <ul className="grid grid-cols-3 gap-4 items-stretch">
          {articles?.list.map((article) => (
            <li className="h-full" key={article.id}>
              <BestArticleCard articleId={article.id} />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        maxDots={5}
        onPrev={() => setPage((prev) => (prev === 1 ? totalPages : prev - 1))}
        onNext={() => setPage((prev) => (prev === totalPages ? 1 : prev + 1))}
      />
    </section>
  );
};

export default DashBoardBestArticles;
