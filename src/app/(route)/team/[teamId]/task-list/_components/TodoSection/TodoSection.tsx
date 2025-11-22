"use client";

import { cn } from "@/utils";
import { DateItem, Icon } from "@/common";
import { TaskListItem } from "@/features";
import { TODO_STYLES } from "../../_constants";
import { useRouter } from "next/navigation";
import { addDays, format } from "date-fns";
import { TaskListData } from "@/types";

interface TodoSectionHeaderProps {
  selectedDate: Date;
  onClickMoveWeek: (direction: "prev" | "next") => void;
}

const TodoSectionHeader = ({ selectedDate, onClickMoveWeek }: TodoSectionHeaderProps) => {
  const monthLabel = format(selectedDate, "yyyy년 M월");
  const monthDateTime = format(selectedDate, "yyyy-MM");

  return (
    <header className="flex items-center justify-between">
      <h3 className="text-2lg-bold text-text-primary">법인 등기</h3>

      <div className="flex items-center gap-2">
        <time dateTime={monthDateTime} className="text-sm-medium text-text-primary">
          {monthLabel}
        </time>
        <div className="flex items-center gap-1">
          <button aria-label="이전 주" className={TODO_STYLES.buttonBase} onClick={() => onClickMoveWeek("prev")}>
            <Icon name="leftArrow" className={TODO_STYLES.arrowBase} />
          </button>
          <button aria-label="다음 주" className={TODO_STYLES.buttonBase} onClick={() => onClickMoveWeek("next")}>
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

type WeekDirection = "prev" | "next";

interface TodoSectionProps {
  data: TaskListData;
  teamId: string;
  onClickDateItem: (date: Date) => void;
  selectedDate: Date;
}

const TodoSection = ({ data, teamId, onClickDateItem, selectedDate }: TodoSectionProps) => {
  const router = useRouter();

  const handleMoveWeek = (direction: WeekDirection) => {
    const diff = direction === "prev" ? -7 : 7;
    const newDate = addDays(selectedDate, diff);
    onClickDateItem(newDate);
  };

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
      <TodoSectionHeader selectedDate={selectedDate} onClickMoveWeek={handleMoveWeek} />

      <DateItem onClick={onClickDateItem} selectedDate={selectedDate} />

      <ul className="mt-[37px] flex flex-col gap-3">
        {data.map((item) => (
          <TaskListItem key={item.id} item={item} onOpenDetail={() => onClickTaskListItem(item.id.toString())} />
        ))}
      </ul>
    </section>
  );
};

export default TodoSection;
