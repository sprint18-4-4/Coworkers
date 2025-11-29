"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDays, format } from "date-fns";
import { DateValue } from "@/types";
import { DateItem, DatePicker, Icon } from "@/common";
import { EmptyState, TaskListItem } from "@/features";
import { TODO_STYLES } from "../../_constants";
import TaskPdfDownloadButton from "../TaskPdfDownloadButton/TaskPdfDownloadButton";
import { useTaskMutations } from "@/hooks";
import EditDataModal from "../../_detail/_components/_internal/EditDataModal/EditDataModal";
import { TaskResponse } from "@/api/axios/task/_types";
// TODO(지권): EditDataModal 네이밍 및 위치 변경 필요

interface TodoSectionHeaderProps {
  data: TaskResponse;
  selectedDate: Date;
  onClickMoveWeek: (direction: "prev" | "next") => void;
  onClickCalendar: (date: Date) => void;
  sectionName: string;
}

const TodoSectionHeader = ({
  data,
  selectedDate,
  onClickMoveWeek,
  onClickCalendar,
  sectionName,
}: TodoSectionHeaderProps) => {
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
      <h3 className="text-2lg-bold text-text-primary">{sectionName || "로딩중..."}</h3>

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
  data: TaskResponse;
  teamId: number;
  onClickDateItem: (date: Date) => void;
  selectedDate: Date;
  taskListId: number;
  sectionName: string;
}

const TodoSection = ({ data, teamId, onClickDateItem, selectedDate, taskListId, sectionName }: TodoSectionProps) => {
  const router = useRouter();
  const [isEditModal, setIsEditModal] = useState(false);
  const [editingTask, setEditingTask] = useState<{ id: number; name: string; description?: string } | null>(null);
  const [editForm, setEditForm] = useState({ name: "", description: "" });

  const { toggleTaskDone, deleteTask, updateTask } = useTaskMutations({ teamId, taskListId });

  const handleOpenEditModal = (task: { id: number; name: string; description?: string }) => {
    setEditingTask(task);
    setEditForm({
      name: task.name,
      description: task.description || "",
    });
    setIsEditModal(true);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingTask) return;

    updateTask(editingTask.id, editForm.name, editForm.description);
    setIsEditModal(false);
  };

  const handleMoveWeek = (direction: WeekDirection) => {
    const diff = direction === "prev" ? -7 : 7;
    const newDate = addDays(selectedDate, diff);
    onClickDateItem(newDate);
  };

  const onClickTaskListItem = (id: string) => {
    router.push(`/team/${teamId}/task-list/${taskListId}?task-id=${id}`, { scroll: false });
  };

  const options = (task: { id: number; name: string; description?: string }) => [
    { label: "수정하기", action: () => handleOpenEditModal(task) },
    { label: "삭제하기", action: () => deleteTask(task.id) },
  ];

  return (
    <>
      <section
        className={cn(
          "bg-background-primary px-[17px] py-[38px] mt-[22px] rounded-[20px]",
          "pc:px-[42px] pc:max-w-[819px] pc:w-full",
        )}
      >
        <TodoSectionHeader
          data={data}
          selectedDate={selectedDate}
          onClickMoveWeek={handleMoveWeek}
          onClickCalendar={onClickDateItem}
          sectionName={sectionName}
        />

        <DateItem onClick={onClickDateItem} selectedDate={selectedDate} />

        <div className="mt-[37px] min-h-[250px]">
          {/* TODO(지권): 로딩, 에러 추가 예정 */}
          {(data?.length === 0 || !data) && <EmptyState />}

          <ul className="flex flex-col">
            {data?.map((item) => {
              const isDone = item.doneAt !== null;

              return (
                <TaskListItem
                  key={item.id}
                  item={item}
                  onOpenDetail={() => onClickTaskListItem(item.id.toString())}
                  onToggleTodo={() => toggleTaskDone(item.id, isDone)}
                  options={options(item)}
                />
              );
            })}
          </ul>
        </div>
      </section>

      {isEditModal && (
        <EditDataModal
          isEditModal={isEditModal}
          setIsEditModal={setIsEditModal}
          form={editForm}
          setForm={setEditForm}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default TodoSection;
