import { DateItem, PageHeaderBar } from "@/common";
import { Day, DateNumber } from "@/common/DateItem/_types";
import PageLayout from "@/common/PageLayout/PageLayout";
import { CategoryDateHeader, TodoSectionHeader } from "./_components";

const DATE_MOCK: { day: Day; date: DateNumber }[] = [
  { day: "월", date: 1 },
  { day: "화", date: 2 },
  { day: "수", date: 3 },
  { day: "목", date: 4 },
  { day: "금", date: 5 },
  { day: "토", date: 6 },
  { day: "일", date: 7 },
];

const page = () => {
  return (
    <PageLayout ariaLabel="목록 페이지">
      <h1 className="sr-only">목록 페이지</h1>
      <PageHeaderBar title="경영관리팀" />

      <div aria-label="목록 페이지 컨텐츠" className="pc:flex pc:gap-[86px]">
        <TodoSectionHeader />

        <div className="bg-background-primary px-[17px] py-[38px] mt-[22px]">
          <CategoryDateHeader />

          <div className="flex items-center gap-1 mt-6">
            {DATE_MOCK.map((day) => {
              return <DateItem key={day.day} day={day.day} date={day.date} />;
            })}
          </div>

          <div className="mt-[37px]">
            <h4>asdasdasd</h4>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
