"use client";

import { useState } from "react";
import { Dropdown, Icon, Todo } from "@/common";
import type { MyHistoryItem, TaskListItemType } from "@/types";
import { cn, formatToKoreanDate, getFrequencyLabel } from "@/utils";
import EditModal from "./_internal/EditModal/EditModal";
import DeleteModal from "./_internal/DeleteModal/DeleteModal";

interface TaskListItemProps {
  item: TaskListItemType | MyHistoryItem;
  onOpenDetail?: () => void;
  onToggleTodo?: (id: number, next: boolean) => void;
  options?: Array<{ label: string; action: () => void }>;
}

const TaskListItem = ({ item, onOpenDetail, onToggleTodo, options }: TaskListItemProps) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleEdit = () => {
    // TODO: 수정 로직
    setIsEditModal(false);
  };

  const handleDelete = () => {
    // TODO: 삭제 로직
    setIsDeleteModal(false);
  };

  return (
    <>
      <li
        className={cn(
          "flex flex-col items-start rounded-lg gap-[10px]",
          item.doneAt === null ? "border border-border-primary" : "bg-background-secondary",
          onOpenDetail && "cursor-pointer",
        )}
        style={{ padding: "12px 14px" }}
        {...(onOpenDetail && {
          onClick: onOpenDetail,
          role: "button",
          tabIndex: 0,
          "aria-label": `${item?.name} 상세보기`,
        })}
      >
        <div className="w-full flex items-center justify-between">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex-1 flex items-center gap-3"
          >
            <Todo
              title={item.name}
              id={item.id}
              completed={item.doneAt !== null}
              type="task"
              onChangeCompleted={(_, next) => {
                onToggleTodo?.(item.id, next);
              }}
            />
            {"commentCount" in item && (
              <div className="flex items-center gap-[2px] text-xs-regular">
                <Icon name="comment" className="size-4 tablet:size-4" />
                <span>{item.commentCount}</span>
              </div>
            )}
          </div>
          {options && (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Dropdown iconName="kebab" options={options} iconClassName="size-4 tablet:size-4" />
            </div>
          )}
        </div>
        <div className="h-[14px] flex items-center gap-2 text-xs-regular text-text-default">
          <time dateTime={item?.date} className="flex items-center gap-[6px]">
            <Icon name="calendar" className="size-4 tablet:size-4" />
            <span>{formatToKoreanDate(item?.date)}</span>
          </time>
          <hr aria-hidden="true" className="w-[1px] h-full bg-slate-700" />
          <div className="flex items-center gap-[6px]">
            <Icon name="repeat" className="size-4 tablet:size-4" />
            <span>{getFrequencyLabel(item?.frequency)}</span>
          </div>
        </div>
      </li>

      {isEditModal && <EditModal isOpen={isEditModal} onClose={() => setIsEditModal(false)} onClick={handleEdit} />}
      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} onClose={() => setIsDeleteModal(false)} onClick={handleDelete} />
      )}
    </>
  );
};

export default TaskListItem;
