import { Chip, Todo } from "@/common";
import { cn } from "@/utils";

const WorkHistorySection = () => {
  return (
    <div
      className={cn(
        "w-full min-h-[500px] flex flex-col gap-6 px-[22px] py-[33px] rounded-[20px] bg-background-primary",
        "tablet:px-[30px] tablet:py-[46px]",
      )}
    >
      <div className={cn("flex-center gap-[13px]", "tablet:justify-start tablet:text-xl-bold", "pc:justify-center")}>
        <div className="size-4 rounded-full border border-slate-200" />
        <span>2025년 5월</span>
        <div className="size-4 rounded-full border border-slate-200" />
      </div>

      <div className="flex items-start gap-1 text-nowrap overflow-x-auto pc:hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <Chip key={i} title="법인 등기" count={3} />
        ))}
      </div>

      <div className="flex-center gap-5">
        <hr className="flex-1 h-[1px] bg-border-primary" />
        <span className={cn("text-md-regular text-text-default", "tablet:text-lg-medium")}>2025년 5월 21일 (목)</span>
        <hr className="flex-1 h-[1px] bg-border-primary" />
      </div>

      <div className="flex flex-col gap-[13px]">
        <h2 className="text-lg-bold text-text-primary">법인 등기</h2>
        <div className="px-[14px] py-3 rounded-lg bg-background-secondary">
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex-center gap-3">
              <Todo title="법인 설립 안내 드리기" id="1" completed={false} onChangeCompleted={() => {}} />
              <div className="flex items-center">
                <div className="size-4 bg-black" />
                <span>3</span>
              </div>
            </div>
            <div className="h-[14px] flex items-center gap-2 text-xs-regular text-text-default">
              <span className="flex items-center gap-[6px]">
                <div className="size-3 bg-black" />
                <span>2024년 7월 29일</span>
              </span>
              <hr className="w-[1px] h-full bg-slate-700" />
              <span className="flex items-center gap-[6px]">
                <div className="size-3 bg-black" />
                <span>매일 반복</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistorySection;
