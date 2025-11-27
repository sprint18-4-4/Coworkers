"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDays, format } from "date-fns";
import { DateValue, TaskListData } from "@/types";
import { DateItem, DatePicker, Icon } from "@/common";
import { EmptyState, TaskListItem } from "@/features";
import { TODO_STYLES } from "../../_constants";
import TaskPdfDownloadButton from "../TaskPdfDownloadButton/TaskPdfDownloadButton";

interface TodoSectionHeaderProps {
  data: TaskListData;
  selectedDate: Date;
  onClickMoveWeek: (direction: "prev" | "next") => void;
  onClickCalendar: (date: Date) => void;
}

const TodoSectionHeader = ({ data, selectedDate, onClickMoveWeek, onClickCalendar }: TodoSectionHeaderProps) => {
  const monthLabel = format(selectedDate, "yyyy년 M월");
  const monthDateTime = format(selectedDate, "yyyy-MM");
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const handleDateSelect = (date: DateValue) => {
    if (!date) return;

    onClickCalendar(date as Date);
    setIsOpenCalendar(false);
  };

  return (
    <header className="flex items-center justify-between relative">
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
        <button
          aria-label="달력 열기"
          className="size-6 rounded-full bg-background-secondary flex-center"
          onClick={() => setIsOpenCalendar((prev) => !prev)}
        >
          <Icon name="calendar" className={TODO_STYLES.arrowBase} />
        </button>
        <TaskPdfDownloadButton data={data} />
      </div>
      {isOpenCalendar && (
        <div className="absolute top-full right-0 mt-2 z-50 w-[300px]">
          <DatePicker value={selectedDate} onChange={handleDateSelect} />
        </div>
      )}
    </header>
  );
};

type WeekDirection = "prev" | "next";

interface TodoSectionProps {
  data: TaskListData;
  teamId: string;
  onClickDateItem: (date: Date) => void;
  selectedDate: Date;
  taskListId: string;
}

const TodoSection = ({ data, teamId, onClickDateItem, selectedDate, taskListId }: TodoSectionProps) => {
  const router = useRouter();

  const handleMoveWeek = (direction: WeekDirection) => {
    const diff = direction === "prev" ? -7 : 7;
    const newDate = addDays(selectedDate, diff);
    onClickDateItem(newDate);
  };

  const onClickTaskListItem = (id: string) => {
    router.push(`/team/${teamId}/task-list/${taskListId}?task-id=${id}`, { scroll: false });
  };

  const onToggleTodo = (id: number, next: boolean) => {
    // TODO(지권): 추후 API 변경 및 로직 분리
    console.warn("토글 선택 - API 호출 예정", { id, next });
  };

  const options = [
    { label: "수정하기", action: () => console.warn("할 일 수정하기") },
    { label: "삭제하기", action: () => console.warn("할 일 삭제하기") },
  ];

  return (
    <section
      className={cn(
        "bg-background-primary px-[17px] py-[38px] mt-[22px] rounded-[20px]",
        "pc:px-[42px] pc:max-w-[819px] pc:flex-1",
      )}
    >
      <TodoSectionHeader
        data={data}
        selectedDate={selectedDate}
        onClickMoveWeek={handleMoveWeek}
        onClickCalendar={onClickDateItem}
      />

      <DateItem onClick={onClickDateItem} selectedDate={selectedDate} />

      <div className="mt-[37px] min-h-[250px]">
        {/* TODO(지권): 로딩, 에러 추가 예정 */}
        {(data?.length === 0 || !data) && (
          <EmptyState
            ariaLabel="할 일이 없습니다."
            text={
              <span>
                현재 할 일이 없습니다. <br /> 새 할 일을 추가해보세요.
              </span>
            }
          />
        )}

        <ul className="flex flex-col gap-3">
          {data?.map((item) => (
            <TaskListItem
              key={item.id}
              item={item}
              onOpenDetail={() => onClickTaskListItem(item.id.toString())}
              onToggleTodo={onToggleTodo}
              options={options}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoSection;
