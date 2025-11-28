import { cn } from "@/utils";
import { EmptyState, TaskListItem } from "@/features";
import { MyHistoryResponse } from "@/api/axios/user/_types/type";

const WorkHistorySection = ({ data }: { data: MyHistoryResponse }) => {
  return (
    <article
      className={cn(
        "w-full max-w-[1120px] min-h-[500px] flex flex-col gap-6 px-[22px] py-[33px] rounded-[20px] bg-background-primary",
        "tablet:px-[30px] tablet:py-[46px]",
      )}
    >
      {/* TODO(지권): 에러, 로딩 상태 처리 필요 */}
      {data?.tasksDone?.length === 0 && <EmptyState />}
      {data?.tasksDone?.length > 0 && (
        <section>
          <ul className="flex flex-col gap-3">
            {data.tasksDone.map((item) => (
              <TaskListItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

export default WorkHistorySection;
