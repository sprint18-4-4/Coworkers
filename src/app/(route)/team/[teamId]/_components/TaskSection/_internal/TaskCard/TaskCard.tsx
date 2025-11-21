import { ProgressBadge } from "@/common";
import { Icon } from "@/common";
import { Todo } from "@/common";
import { useState } from "react";

export const TaskHeader = () => {
  return (
    <div className="flex justify-between items-center h-[25px]">
      <span className="text-lg-semibold text-text-primary">법인 설립</span>
      <div className="flex items-center">
        <ProgressBadge current={5} total={5} />
        <button>
          <Icon name="kebab" className="size-6 tablet:size-6 text-state-300" />
        </button>
      </div>
    </div>
  );
};

export const TaskList = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <Todo
          id="0"
          title="법인 설립 안내 드리기"
          completed={completed}
          onChangeCompleted={(_, next) => setCompleted(next)}
        />
      </li>
      <li>
        <Todo
          id="1"
          title="법인 설립 안내 드리기"
          completed={completed}
          onChangeCompleted={(_, next) => setCompleted(next)}
        />
      </li>
      <li>
        <Todo
          id="2"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate, accusamus, voluptates enim in nesciunt nam, alias neque odio architecto non maxime ullam? Cupiditate molestiae impedit ipsum placeat maiores debitis."
          completed={completed}
          onChangeCompleted={(_, next) => setCompleted(next)}
        />
      </li>
    </ul>
  );
};

// TODO(상인): 만약 완료 카테고리가 피그마 사항대로 TaskHeader만 보인다면 구조가 바뀔 예정
const TaskCard = () => {
  return (
    <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
      <TaskHeader />
      <TaskList />
    </article>
  );
};

export default TaskCard;
