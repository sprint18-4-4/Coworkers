"use client";

import { useRouter, useSearchParams } from "next/navigation";
// TODO(지권): 머지 후 PageLayout import 수정 필요
import PageLayout from "@/common/PageLayout/PageLayout";
import { FloatingButton, PageHeaderBar } from "@/common";
import { CategoryDateHeader, TodoSectionHeader } from "./_components";

const Page = () => {
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

        <div aria-label="목록 페이지 컨텐츠" className="pc:flex pc:gap-[86px]">
          <TodoSectionHeader />

          <div className="bg-background-primary px-[17px] py-[38px] mt-[22px]">
            <CategoryDateHeader />

            <div className="mt-[37px]">
              <h4>목록 아이템이 들어갈 영역입니다</h4>
            </div>
          </div>
        </div>
      </PageLayout>

      <FloatingButton iconName="plus" className="absolute bottom-2 right-2" onClick={onClickFloatingButton} />
    </>
  );
};

export default Page;
