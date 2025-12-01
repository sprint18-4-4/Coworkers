import { Dropdown, ProgressBadge } from "@/common";
import { Icon } from "@/common";
import { Todo } from "@/common";
import { useTaskMutations } from "@/hooks";
import { TaskList } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import DeleteTaskListModal from "../Modal/DeleteTaskListModal";
import EditTaskListModal from "../Modal/EditTaskListModal";

const TaskHeader = ({ name, taskList }: { name: string; taskList: TaskList }) => {
  const { teamId } = useParams();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const taskListId = taskList.id;
  const totalTasks = taskList.tasks.length;
  const completedCount = taskList.tasks.filter((task) => task.doneAt !== null).length;

  return (
    <div className="flex justify-between items-center h-[25px]">
      <Link href={`/team/${teamId}/task-list/${taskListId}`} className="text-lg-semibold text-text-primary">
        {name}
      </Link>
      <div className="flex items-center  leading-none">
        <ProgressBadge current={completedCount} total={totalTasks} />
        <Dropdown
          iconName="kebab"
          iconClassName="size-6 tablet:size-6 text-state-300"
          options={[
            { label: "수정하기", action: () => setIsOpenEditModal(true) },
            { label: "삭제하기", action: () => setIsOpenDeleteModal(true) },
          ]}
        />
      </div>

      <DeleteTaskListModal
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        groupId={Number(teamId)}
        taskListId={taskList.id}
      />

      <EditTaskListModal
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
        groupId={Number(teamId)}
        taskList={taskList}
      />
    </div>
  );
};

const Tasks = ({ item }: { item: TaskList }) => {
  const { teamId } = useParams();
  const { toggleTaskDone } = useTaskMutations({ teamId: Number(teamId), taskListId: item.id });
  return (
    <ul className="flex flex-col gap-2">
      {item.tasks.map((task) => (
        <li key={task.id}>
          <Todo
            id={task.id}
            title={task.name}
            completed={task.doneAt !== null}
            onChangeCompleted={() => toggleTaskDone(task.id, task.doneAt !== null)}
          />
        </li>
      ))}
    </ul>
  );
};

interface TaskCardProps {
  item: TaskList;
  isRenderList: boolean;
}

const TaskCard = ({ item, isRenderList }: TaskCardProps) => {
  return (
    <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
      <TaskHeader name={item.name} taskList={item} />
      {isRenderList && <Tasks item={item} />}
    </article>
  );
};

export default TaskCard;
