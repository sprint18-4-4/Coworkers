import { ProgressBadge } from "@/common";
import { Icon } from "@/common";
import { Todo } from "@/common";
import { TaskList } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const TaskHeader = ({ name, taskListId }: { name: string; taskListId: number }) => {
  const { teamId } = useParams();
  return (
    <div className="flex justify-between items-center h-[25px]">
      <Link href={`/team/${teamId}/task-list/${taskListId}`} className="text-lg-semibold text-text-primary">
        {name}
      </Link>
      <div className="flex items-center">
        <ProgressBadge current={5} total={5} />
        <button>
          <Icon name="kebab" className="size-6 tablet:size-6 text-state-300" />
        </button>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <Todo
          id={0}
          title="법인 설립 안내 드리기"
          completed={completed}
          onChangeCompleted={(_, next) => setCompleted(next)}
        />
      </li>
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
      <TaskHeader name={item.name} taskListId={item.id} />
      {isRenderList && <Tasks />}
    </article>
  );
};

export default TaskCard;
