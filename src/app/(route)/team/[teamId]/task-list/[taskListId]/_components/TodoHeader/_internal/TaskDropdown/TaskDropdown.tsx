import { Dispatch, SetStateAction, useRef } from "react";
import Link from "next/link";
import { Icon } from "@/common";
import { cn } from "@/utils";
import { GetGroupsResponse } from "@/api/axios/group/_type";
import { TaskList } from "@/types/Group/GroupData";
import { useDropdownClose } from "@/hooks";

const TaskDropdownItem = ({ data }: { data: TaskList }) => {
  if (!data) return null;

  return (
    <li key={data.id}>
      <Link
        href={`/team/${data.groupId}/task-list/${data.id}`}
        className={cn(
          "block w-full px-4 py-3 text-left text-sm text-text-primary transition-colors",
          "whitespace-nowrap overflow-hidden text-ellipsis",
          "hover:bg-background-secondary",
        )}
      >
        {data.name}
      </Link>
    </li>
  );
};

interface TaskDropdownProps {
  data: GetGroupsResponse;
  isTabletMenuOpen: boolean;
  setIsTabletMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskDropdown = ({ data, isTabletMenuOpen, setIsTabletMenuOpen }: TaskDropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useDropdownClose(dropdownRef, () => setIsTabletMenuOpen(false), isTabletMenuOpen);

  return (
    <button
      ref={dropdownRef}
      onClick={(e) => {
        e.stopPropagation();
        setIsTabletMenuOpen((prev) => !prev);
      }}
      aria-label={isTabletMenuOpen ? "할 일 목록 닫기" : "할 일 목록 열기"}
      className={cn(
        "relative flex items-center justify-between gap-2 min-w-[120px] max-w-[200px] h-[44px] pl-4 pr-3 rounded-xl",
        "border bg-background-primary",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        !data ? "cursor-not-allowed" : "transition-colors hover:bg-gray-100 ",
      )}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-sm-semibold text-text-primary text-nowrap overflow-hidden text-ellipsis">
          {data?.name}
        </span>
      </div>
      <div className="flex items-center justify-center p-1 rounded-md">
        <Icon name="downArrow" className="size-5 tablet:size-5 text-slate-400" />
      </div>
      {isTabletMenuOpen && data && (
        <ul
          className={cn(
            "absolute right-0 top-full z-10 mt-2 rounded-lg border bg-background-primary shadow-dropdown",
            "flex w-full min-w-full flex-col overflow-hidden",
          )}
        >
          {data?.taskLists?.map((task) => (
            <TaskDropdownItem key={task.id} data={task} />
          ))}

          {data?.taskLists?.length === 0 && <li className="px-4 py-2 text-sm text-text-secondary">항목 없음</li>}
        </ul>
      )}
    </button>
  );
};

export default TaskDropdown;
