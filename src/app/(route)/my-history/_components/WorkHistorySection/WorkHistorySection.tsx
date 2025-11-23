import { cn } from "@/utils";
import { Chip, Icon } from "@/common";
import { EmptyState } from "@/features";
import { MONTH_NAV_BUTTON } from "../../_constants";
import { TaskListItemType } from "@/types/TaskListItemType";
import ScheduleDaySection from "../ScheduleDaySection/ScheduleDaySection";

const WorkHistorySection = ({ data }: { data: TaskListItemType[] }) => {
  return (
    <article
      className={cn(
        "w-full max-w-[758px] min-h-[500px] flex flex-col gap-6 px-[22px] py-[33px] rounded-[20px] bg-background-primary",
        "tablet:px-[30px] tablet:py-[46px]",
      )}
    >
      <header className={cn("flex-center gap-[13px]", "tablet:justify-start tablet:text-xl-bold", "pc:justify-center")}>
        <button aria-label="이전" className={MONTH_NAV_BUTTON}>
          <Icon name="leftArrow" className="size-3 tablet:size-3" />
        </button>
        <time dateTime={"2025-05"} className="text-2lg-bold tablet:text-xl-bold">
          2025년 5월
        </time>
        <button aria-label="다음" className={MONTH_NAV_BUTTON}>
          <Icon name="rightArrow" className="size-3 tablet:size-3" />
        </button>
      </header>

      {/* TODO(지권): 에러, 로딩 상태 처리 필요 */}
      {data?.length === 0 && <EmptyState ariaLabel="업무 기록 없음" text="완료한 업무 기록이 없습니다." />}
      {data?.length > 0 && (
        <>
          <nav aria-label="업무 카테고리" className="flex items-start gap-1 text-nowrap overflow-x-auto pc:hidden">
            {Array.from({ length: 3 }, (_, i) => (
              <Chip key={i} title="법인 등기" count={3} />
            ))}
          </nav>

          <div className="w-full flex flex-col gap-12">
            {Array.from({ length: 3 }, (_, i) => (
              <ScheduleDaySection key={i} data={data} />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default WorkHistorySection;
