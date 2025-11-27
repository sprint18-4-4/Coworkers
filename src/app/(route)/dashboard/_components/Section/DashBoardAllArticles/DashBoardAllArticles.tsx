"use client";

import { useGetArticles } from "@/api/hooks";
import { Select } from "@/common";
import { useState } from "react";
import DefaultArticleCard from "../../Article/DefaultArticleCard";
import { SelectOption } from "@/common/Select/_types/types";

const DashBoardAllArticles = () => {
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const options: SelectOption<"recent" | "like">[] = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  const { data: articles } = useGetArticles({ orderBy });

  return (
    <div className="mt-10">
      <div className="max-w-[1074px] mx-auto flex items-center justify-between">
        <h3 className="text-text-primary text-xl-bold">전체</h3>
        <Select value={orderBy} options={options} onChange={setOrderBy} />
      </div>

      {/* 카드 */}
      <ul className="mt-10 grid grid-cols-1 pc:grid-cols-2 gap-4">
        {articles?.list.map((article) => (
          <li key={article.id}>
            <DefaultArticleCard articleId={article.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashBoardAllArticles;
