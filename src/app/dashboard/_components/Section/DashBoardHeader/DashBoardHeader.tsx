"use client";

import { Icon } from "@/common";
import { useArticleSearchStore } from "@/stores";
import { cn } from "@/utils";

const DashBoardHeader = () => {
  const { keyword, setKeyword } = useArticleSearchStore();

  return (
    <header className="flex flex-col gap-5 pc:flex-row pc:justify-between pc:items-center">
      <h2 className="text-xl-bold tablet:text-2xl-bold text-text-primary">자유게시판</h2>
      <form className="flex items-center relative" onSubmit={(e) => e.preventDefault()}>
        <Icon name="search" className="size-8 tablet:size-8 text-icon-brand absolute left-3" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력해주세요"
          className={cn(
            "w-[343px] h-[48px] py-4 px-12",
            "tablet:w-[420px] pc:h-[56px]",
            "border-2 border-brand-primary rounded-full bg-background-primary",
            "text-lg-regular text-text-default",
          )}
        />
      </form>
    </header>
  );
};

export default DashBoardHeader;
