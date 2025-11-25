import { cn } from "@/utils";
import { TaskListItem } from "@/features";
import { TaskListItemType } from "@/types";

const ScheduleDaySection = ({ data }: { data: TaskListItemType[] }) => {
  return (
    <>
      <div className="flex-center gap-5">
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
        <time dateTime={"2025-05-21"} className={cn("text-md-regular text-text-default", "tablet:text-lg-medium")}>
          2025년 5월 21일 (목)
        </time>
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
      </div>

      <section>
        <ul className="flex flex-col gap-3">
          {data.map((item) => (
            <TaskListItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ScheduleDaySection;
