import { cn } from "@/utils";
import { TaskListItem } from "@/features";
import { TaskListItemType } from "@/types";

const ScheduleDaySection = ({ data }: { data: TaskListItemType[] }) => {
  const onToggleTodo = (id: number, next: boolean) => {
    // TODO(지권): 추후 API 변경 및 로직 분리
    console.warn("토글 선택 - API 호출 예정", { id, next });
  };

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
          {data.map((item) => (
            <TaskListItem key={item.id} item={item} onToggleTodo={onToggleTodo} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ScheduleDaySection;
