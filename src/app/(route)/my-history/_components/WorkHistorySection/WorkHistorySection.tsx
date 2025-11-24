import { cn } from "@/utils";
import { Chip } from "@/common";
import { EmptyState, TaskListItem } from "@/features";
import { TaskListItemType } from "@/types/TaskListItemType";

const WorkHistorySection = ({ data }: { data: TaskListItemType[] }) => {
  return (
    <article
      className={cn(
        "w-full max-w-[1120px] min-h-[500px] flex flex-col gap-6 px-[22px] py-[33px] rounded-[20px] bg-background-primary",
        "tablet:px-[30px] tablet:py-[46px]",
      )}
    >
      {/* TODO(지권): 에러, 로딩 상태 처리 필요 */}
      {data?.length === 0 && <EmptyState ariaLabel="업무 기록 없음" text="완료한 업무 기록이 없습니다." />}
      {data?.length > 0 && (
        <>
          <nav aria-label="업무 카테고리" className="flex items-start gap-1 text-nowrap overflow-x-auto pc:hidden">
            {Array.from({ length: 3 }, (_, i) => (
              <Chip key={i} title="법인 등기" count={3} />
            ))}
          </nav>

          <section>
            <ul className="flex flex-col gap-3">
              {data.map((item) => (
                <TaskListItem key={item.id} item={item} />
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default WorkHistorySection;
