"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FloatingButton, PageHeaderBar, PageLayout } from "@/common";
import { TodoSection, TodoSectionHeader } from "./_components";
import { Suspense } from "react";
import { cn } from "@/utils";

const ListPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickFloatingButton = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("w", "true");

    router.push(`/list?${params.toString()}`);
  };

  return (
    <>
      <PageLayout ariaLabel="목록 페이지">
        <h1 className="sr-only">목록 페이지</h1>
        <PageHeaderBar title="경영관리팀" />

        <div aria-label="목록 페이지 컨텐츠" className={cn("pc:flex pc:gap-[25px]")}>
          <TodoSectionHeader />
          <TodoSection />
        </div>
      </PageLayout>

      <FloatingButton
        iconName="plus"
        className="absolute bottom-2 right-2"
        iconClassName="size-6 tablet:size-6"
        onClick={onClickFloatingButton}
      />
    </>
  );
};

const Page = () => {
  return (
    // TODO(지권): 로딩 화면 추가 필요
    <Suspense fallback={""}>
      <ListPage />
    </Suspense>
  );
};

export default Page;
