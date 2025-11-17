"use client";

import { PageHeaderBar } from "@/common";
import { MyWorkHistory, WorkHistorySection } from "./_components";
import { MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";
import PageLayout from "@/common/PageLayout/PageLayout";

const page = () => {
  return (
    <PageLayout ariaLabel="나의 히스토리">
      <h1 className="sr-only">나의 히스토리</h1>
      <PageHeaderBar title="경영관리팀" />

      <div aria-label="나의 히스토리 컨텐츠" className="pc:flex pc:gap-[86px]">
        <MyWorkHistory title="나의 히스토리" items={MY_HISTORY_ITEM_MOCK_DATA.map((item) => ({ item }))} />
        <WorkHistorySection />
      </div>
    </PageLayout>
  );
};

export default page;
