import { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils";
import { BaseButton, Dropdown, Icon, ProgressBadge } from "@/common";
import TaskListCreateModal from "../TaskListCreateModal/TaskListCreateModal";
import TaskItemEditModal from "../TaskItemEditModal/TaskItemEditModal";
import { TaskList } from "@/types";
import { GetGroupsResponse } from "@/api/axios/group/_types/type";
import useDeleteTaskList from "@/api/hooks/task-list/useDeleteTaskList";

const TodoItem = ({ data }: { data: TaskList }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { mutate: deleteTodo } = useDeleteTaskList();

  const options = [
    { label: "수정하기", action: () => setIsEditModalOpen(true) },
    // { label: "삭제하기", action: () => deleteTodo({ groupId: data.groupId, id: data.id }) },
  ];

  const totalCount = data.tasks?.length ?? 0;
  const doneCount = data.tasks?.filter((task) => task.doneAt !== null).length ?? 0;

  return (
    <>
      <li
        className={cn(
          "flex items-center justify-between gap-[25px] max-w-[180px] h-[44px] pl-4 pr-3 rounded-xl",
          "bg-background-primary border border-border-primary transition-colors duration-200",
          "pc:w-full pc:max-w-full pc:h-[54px]",
        )}
      >
        <Link href={`/team/${data?.groupId}/task-list/${data?.id}`} className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm-semibold text-text-primary text-nowrap overflow-hidden text-ellipsis">
            {data?.name}
          </span>
          <ProgressBadge current={doneCount} total={totalCount} />
        </Link>

        <Dropdown iconName="kebab" options={options} iconClassName="tablet:size-6 text-slate-300" />
      </li>
      {isEditModalOpen && (
        <TaskItemEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          TodoItem={{ groupId: data.groupId, id: data.id }}
        />
      )}
    </>
  );
};

interface TodoHeaderProps {
  data: GetGroupsResponse | undefined;
  groupId: number;
  isLoading: boolean;
}

const TodoHeader = ({ data, groupId, isLoading }: TodoHeaderProps) => {
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);

  return (
    <>
      <aside className={cn("flex flex-col items-start gap-2", "pc:w-[270px] pc:gap-6")}>
        <h2 className={cn("text-xs-semibold text-text-default", "pc:text-xl-bold pc:text-text-primary")}>할 일</h2>

        <section className={cn("flex items-center justify-between gap-12 w-full", "pc:flex-col pc:gap-11")}>
          <div className="pc:max-h-[300px] pc:w-full pc:overflow-y-scroll hide-scrollbar">
            {/* TODO(지권): 로딩 화면 개선 필요 */}
            {isLoading && <p className="h-[300px] bg-white rounded-xl p-4">로딩 중...</p>}

            {!isLoading && data?.taskLists?.length && (
              <ul className="pc:space-y-1">
                {data.taskLists.map((item) => (
                  <TodoItem key={item.id} data={item} />
                ))}
              </ul>
            )}

            {!isLoading && !data?.taskLists?.length && <p>할 일 목록이 없습니다.</p>}
          </div>

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
