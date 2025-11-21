"use client";

import { cn } from "@/utils";
import { DateItem, Icon } from "@/common";
import { TaskListItem } from "@/features";
import { LIST_DATE_MOCK_DATA, MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";
import { TODO_STYLES } from "../../_constants";
import { useRouter } from "next/navigation";

const TodoSectionHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h3 className="text-2lg-bold text-text-primary">법인 등기</h3>

      <div className="flex items-center gap-2">
        <time dateTime={"2025-05"} className="text-sm-medium text-text-primary">
          2025년 5월
        </time>
        <div className="flex items-center gap-1">
          <button aria-label="이전" className={TODO_STYLES.buttonBase}>
            <Icon name="leftArrow" className={TODO_STYLES.arrowBase} />
          </button>
          <button aria-label="다음" className={TODO_STYLES.buttonBase}>
            <Icon name="rightArrow" className={TODO_STYLES.arrowBase} />
          </button>
        </div>
        <button aria-label="달력 열기" className="size-6 rounded-full bg-background-secondary flex-center">
          <Icon name="calendar" className={TODO_STYLES.arrowBase} />
        </button>
      </div>
    </header>
  );
};

const TodoSection = ({ teamId }: { teamId: string }) => {
  const router = useRouter();

  const onClickTaskListItem = (id: string) => {
    router.push(`/team/${teamId}/task-list?task-id=${id}`, { scroll: false });
  };

  return (
    <section
      className={cn(
        "bg-background-primary px-[17px] py-[38px] mt-[22px] rounded-[20px]",
        "pc:px-[42px] pc:max-w-[819px] pc:flex-1",
      )}
    >
      <TodoSectionHeader />

      <div className={cn("flex items-center gap-1 mt-6", "tablet:justify-center tablet:gap-3")}>
        {LIST_DATE_MOCK_DATA.map((day) => {
          return <DateItem key={day.day} day={day.day} date={day.date} />;
        })}
      </div>

      <ul className="mt-[37px] flex flex-col gap-3">
        {MY_HISTORY_ITEM_MOCK_DATA.map((item) => (
          <TaskListItem key={item.id} item={item} onOpenDetail={() => onClickTaskListItem(item.id.toString())} />
        ))}
      </ul>
    </section>
  );
};

export default TodoSection;
