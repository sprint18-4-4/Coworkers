"use client";

import { useRouter, useSearchParams } from "next/navigation";
// TODO(지권): 머지 후 PageLayout import 수정 필요
import PageLayout from "@/common/PageLayout/PageLayout";
import { FloatingButton, PageHeaderBar } from "@/common";
import { CategoryDateHeader, TodoSectionHeader } from "./_components";
import { TaskListItem } from "@/features";
import { MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";
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

          <div
            className={cn(
              "bg-background-primary px-[17px] py-[38px] mt-[22px] rounded-[20px]",
              "pc:px-[42px] pc:max-w-[819px] pc:flex-1",
            )}
          >
            <CategoryDateHeader />

            <div className="mt-[37px] flex flex-col gap-3">
              {MY_HISTORY_ITEM_MOCK_DATA.map((item) => (
                <TaskListItem key={item.id} item={item} />
              ))}
            </div>
          </div>
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
