import { Icon, Todo } from "@/common";
import { cn, getFrequencyLabel } from "@/utils";
import type { TaskListItemType } from "@/types";

interface TaskListItemProps {
  item: TaskListItemType;
  onOpenDetail?: () => void;
}

const TaskListItem = ({ item, onOpenDetail }: TaskListItemProps) => {
  return (
    <li
      className={cn(
        "px-[14px] py-3 flex flex-col items-start rounded-lg gap-[10px] bg-background-secondary",
        onOpenDetail && "cursor-pointer",
      )}
      {...(onOpenDetail && {
        onClick: onOpenDetail,
        role: "button",
        tabIndex: 0,
        "aria-label": `${item?.name} 상세보기`,
      })}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex-1 flex items-center gap-3">
          <Todo title={item?.name} id={item?.id.toString()} completed={false} onChangeCompleted={() => {}} />
          <div className="flex items-center gap-[2px] text-xs-regular">
            <Icon name="comment" className="size-4 tablet:size-4" />
            <span>{item?.commentCount}</span>
          </div>
        </div>
        {/* TODO(지권): 메뉴 공통 컴포넌트 추가 */}
        <Icon name="kebab" className="size-4 tablet:size-4" aria-label={`${item?.name} 메뉴`} />
      </div>
      <div className="h-[14px] flex items-center gap-2 text-xs-regular text-text-default">
        <time dateTime={item?.date} className="flex items-center gap-[6px]">
          <Icon name="calendar" className="size-4 tablet:size-4" />
          {/* TODO(지권): 날짜 포맷팅 추가 */}
          <span>{item?.date}</span>
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
