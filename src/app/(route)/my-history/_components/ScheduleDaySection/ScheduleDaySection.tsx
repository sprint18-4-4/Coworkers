import { Todo } from "@/common";
import { cn } from "@/utils";

const ScheduleDayItem = () => {
  return (
    <li className="px-[14px] py-3 flex flex-col items-start rounded-lg gap-[10px] bg-background-secondary">
      <div className="flex-center gap-3">
        <Todo title="법인 설립 안내 드리기" id="1" completed={false} onChangeCompleted={() => {}} />
        <div className="flex items-center">
          <div aria-hidden="true" className="size-4 bg-black" />
          <span>3</span>
        </div>
      </div>
      <div className="h-[14px] flex items-center gap-2 text-xs-regular text-text-default">
        <time dateTime={"2024-07-29"} className="flex items-center gap-[6px]">
          <div aria-hidden="true" className="size-3 bg-black" />
          <span>2024년 7월 29일</span>
        </time>
        <hr aria-hidden="true" className="w-[1px] h-full bg-slate-700" />
        <div className="flex items-center gap-[6px]">
          <div aria-hidden="true" className="size-3 bg-black" />
          <span>매일 반복</span>
        </div>
      </div>
    </li>
  );
};

const ScheduleDaySection = () => {
  return (
    <>
      <div className="flex-center gap-5">
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
        <time dateTime={"2025-05-21"} className={cn("text-md-regular text-text-default", "tablet:text-lg-medium")}>
          2025년 5월 21일 (목)
        </time>
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
      </div>

      <section className="flex flex-col gap-[13px]">
        <h2 className="text-lg-bold text-text-primary">법인 등기</h2>
        <ul className="flex flex-col gap-3">
          {Array.from({ length: 3 }, (_, i) => (
            <ScheduleDayItem key={i} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ScheduleDaySection;
