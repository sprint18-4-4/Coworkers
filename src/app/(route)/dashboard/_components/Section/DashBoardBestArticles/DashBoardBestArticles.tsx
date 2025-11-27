"use client";
import { useGetArticles } from "@/api/hooks";
import BestArticleCard from "../../Article/BestArticleCard";
import { useDevice } from "@/hooks";

const DashBoardBestArticles = () => {
  const { isMobile, isTablet } = useDevice();
  const pageSize = isMobile ? 1 : isTablet ? 2 : 3;

  const { data: articles } = useGetArticles({ pageSize, orderBy: "recent" });

  return (
    <section className="gap-5 -mx-[26px] px-1 pc:-mx-0 pc:px-8 py-10 mt-10 bg-background-secondary pc:rounded-[20px]">
      <div className="px-[26px] pc:px-8">
        <h3 className="text-text-primary text-xl-bold mb-4">베스트 게시글</h3>
        <ul className="flex gap-4">
          {articles?.list.map((article) => (
            <li className="flex-1" key={article.id}>
              <BestArticleCard articleId={article.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashBoardBestArticles;
