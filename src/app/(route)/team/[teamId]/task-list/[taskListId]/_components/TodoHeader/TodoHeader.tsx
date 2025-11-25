import { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils";
import { BaseButton, Dropdown, Icon, ProgressBadge } from "@/common";
import { GroupResponse, TaskList } from "@/types";
import TaskListCreateModal from "../TaskListCreateModal/TaskListCreateModal";

const TodoItem = ({ data }: { data: TaskList }) => {
  const options = [
    { label: "수정하기", action: () => {} },
    { label: "삭제하기", action: () => {} },
  ];

  return (
    <li
      className={cn(
        "flex items-center justify-between gap-[25px] max-w-[180px] h-[44px] pl-4 pr-3 rounded-xl",
        "bg-background-primary border border-border-primary transition-colors duration-200",
        "pc:w-full pc:max-w-full pc:h-[54px]",
      )}
    >
      <Link href={`/team/${data?.groupId}/task-list/${data?.id}`} className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-sm-semibold text-text-primary text-nowrap">{data?.name}</span>
        {/* TODO(지권): current 변경 필요 */}
        <ProgressBadge current={3} total={data?.tasks?.length} />
      </Link>

      <Dropdown iconName="kebab" options={options} iconClassName="tablet:size-6 text-slate-300" />
    </li>
  );
};

const TodoHeader = ({ data, groupId }: { data: GroupResponse; groupId: string }) => {
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);

  return (
    <>
      <aside className={cn("flex flex-col items-start gap-2", "pc:w-[270px] pc:gap-6")}>
        <h2 className={cn("text-xs-semibold text-text-default", "pc:text-xl-bold pc:text-text-primary")}>할 일</h2>

        <section className={cn("flex items-center justify-between gap-12 w-full", "pc:flex-col pc:gap-11")}>
          <ul className="pc:space-y-1 pc:w-full pc:max-h-[300px] pc:overflow-y-scroll hide-scrollbar">
            {data?.taskLists?.map((item) => (
              <TodoItem key={item.id} data={item} />
            ))}
          </ul>

          <BaseButton
            size="large"
            variant="outlinedPrimary"
            aria-label="할 일 추가"
            onClick={() => setIsAddTodoModalOpen(true)}
            className="w-[112px] h-10 px-4 text-nowrap rounded-[40px] bg-background-primary"
          >
            <Icon name="plus" className="size-5 tablet:size-5" />
            <span className="text-lg-semibold">할 일 추가</span>
          </BaseButton>
        </section>
      </aside>

      <TaskListCreateModal isOpen={isAddTodoModalOpen} onClose={() => setIsAddTodoModalOpen(false)} groupId={groupId} />
    </>
  );
};

export default TodoHeader;
