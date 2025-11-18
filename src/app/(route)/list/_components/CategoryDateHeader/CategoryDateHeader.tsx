import { DateItem, Icon } from "@/common";
import { DateNumber, Day } from "@/common/DateItem/_types";
import { cn } from "@/utils";

const DATE_MOCK: { day: Day; date: DateNumber }[] = [
  { day: "월", date: 1 },
  { day: "화", date: 2 },
  { day: "수", date: 3 },
  { day: "목", date: 4 },
  { day: "금", date: 5 },
  { day: "토", date: 6 },
  { day: "일", date: 7 },
];

const CategoryDateHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-2lg-bold text-text-primary">법인 등기</h3>

        <div className="flex items-center gap-2">
          <span className="text-sm-medium text-text-primary">2025년 5월</span>
          <div className="flex items-center gap-1">
            <button className="size-4 rounded-full border border-slate-200 flex-center">
              <Icon name="leftArrow" className="size-3 tablet:size-3" />
            </button>
            <button className="size-4 rounded-full border border-slate-200 flex-center">
              <Icon name="rightArrow" className="size-3 tablet:size-3" />
            </button>
          </div>
          <button className="size-6 rounded-full bg-background-secondary flex-center">
            <Icon name="calendar" className="size-3 tablet:size-3" />
          </button>
        </div>
      </div>
      <div className={cn("flex items-center gap-1 mt-6", "tablet:justify-center tablet:gap-3")}>
        {DATE_MOCK.map((day) => {
          return <DateItem key={day.day} day={day.day} date={day.date} />;
        })}
      </div>
    </>
  );
};

export default CategoryDateHeader;
