import { Dropdown, Icon, Todo } from "@/common";
import { cn, formatToKoreanDate, getFrequencyLabel } from "@/utils";
import type { TaskListItemType } from "@/types";

interface TaskListItemProps {
  item: TaskListItemType;
  onOpenDetail?: () => void;
  onToggleTodo: (id: number, next: boolean) => void;
}

const TaskListItem = ({ item, onOpenDetail, onToggleTodo }: TaskListItemProps) => {
  const options = [
    { label: "수정하기", action: () => {} },
    { label: "삭제하기", action: () => {} },
  ];

  return (
    <li
      className={cn(
        "flex flex-col items-start rounded-lg gap-[10px]",
        item.doneAt !== null ? "border border-border-primary" : "bg-background-secondary",
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
          <div className="flex items-center gap-[2px] text-xs-regular">
            <Icon name="comment" className="size-4 tablet:size-4" />
            <span>{item?.commentCount}</span>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Dropdown iconName="kebab" options={options} iconClassName="size-4 tablet:size-4" />
        </div>
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
  );
};

export default TaskListItem;
