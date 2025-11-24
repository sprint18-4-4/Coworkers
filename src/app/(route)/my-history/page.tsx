"use client";

import { useGetHistory } from "@/api/hooks";
import { PageHeaderBar, PageLayout } from "@/common";
import { MyWorkHistory, WorkHistorySection } from "./_components";
import { MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";

const MyHistoryPage = () => {
  const { data: historyData } = useGetHistory();
  console.log("data: ", historyData);

  return (
    <PageLayout ariaLabel="나의 히스토리">
      <h1 className="sr-only">나의 히스토리</h1>
      <PageHeaderBar title="경영관리팀" />

      <div aria-label="나의 히스토리 컨텐츠" className="pc:flex pc:gap-[86px]">
        <MyWorkHistory title="나의 히스토리" items={MY_HISTORY_ITEM_MOCK_DATA.map((item) => ({ item }))} />
        <WorkHistorySection data={historyData} />
      </div>
    </PageLayout>
  );
};

export default MyHistoryPage;
