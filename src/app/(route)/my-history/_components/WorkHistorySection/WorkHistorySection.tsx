import { cn } from "@/utils";
import { Chip } from "@/common";
import ScheduleDaySection from "../ScheduleDaySection/ScheduleDaySection";
import { MONTH_NAV_BUTTON } from "../../_constants";

const WorkHistorySection = () => {
  return (
    <article
      className={cn(
        "w-full min-h-[500px] flex flex-col gap-6 px-[22px] py-[33px] rounded-[20px] bg-background-primary",
        "tablet:px-[30px] tablet:py-[46px]",
      )}
    >
      <header className={cn("flex-center gap-[13px]", "tablet:justify-start tablet:text-xl-bold", "pc:justify-center")}>
        {/* TODO(지권): 이전, 다음 아이콘 변경 */}
        <button aria-label="이전" className={MONTH_NAV_BUTTON} />
        <time dateTime={"2025-05"}>2025년 5월</time>
        <button aria-label="다음" className={MONTH_NAV_BUTTON} />
      </header>

      <nav aria-label="업무 카테고리" className="flex items-start gap-1 text-nowrap overflow-x-auto pc:hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <Chip key={i} title="법인 등기" count={3} />
        ))}
      </nav>

      <ScheduleDaySection />
    </article>
  );
};

export default WorkHistorySection;
