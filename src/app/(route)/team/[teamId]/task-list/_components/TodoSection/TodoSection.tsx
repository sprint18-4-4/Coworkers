"use client";

import { cn } from "@/utils";
import { DateValue, TaskListData } from "@/types";
import { DateItem, DatePicker, Icon } from "@/common";
import { EmptyHistory, TaskListItem } from "@/features";
import { addDays, format } from "date-fns";
import { useRouter } from "next/navigation";
import { TODO_STYLES } from "../../_constants";
import TaskPdfDownloadButton from "../TaskPdfDownloadButton/TaskPdfDownloadButton";
import { useState } from "react";

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
    <>
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
            <button
              aria-label="다음 주"
              className={cn(TODO_STYLES.buttonBase, "relative")}
              onClick={() => onClickMoveWeek("next")}
            >
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
      </header>

      {isOpenCalendar && (
        <div className={cn("absolute left-[10%] z-50 w-[300px]", "tablet:left-[40%]", "pc:left-[60%]")}>
          <DatePicker value={selectedDate} onChange={handleDateSelect} />
        </div>
      )}
    </>
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
      <TodoSectionHeader
        data={data}
        selectedDate={selectedDate}
        onClickMoveWeek={handleMoveWeek}
        onClickCalendar={onClickDateItem}
      />

      <DateItem onClick={onClickDateItem} selectedDate={selectedDate} />

      {/* TODO(지권): API 연결 후 isError 변경 */}
      {(data?.length === 0 || !data) && (
        <EmptyHistory
          ariaLabel="할 일이 없습니다."
          text={
            <span>
              아직 완료된 작업이 없어요. <br /> 하나씩 완료해가며 히스토리를 만들어보세요!
            </span>
          }
        />
      )}

      <ul className="mt-[37px] flex flex-col gap-3">
        {data?.map((item) => (
          <TaskListItem key={item.id} item={item} onOpenDetail={() => onClickTaskListItem(item.id.toString())} />
        ))}
      </ul>
    </section>
  );
};

export default TodoSection;
