import { ProgressButton } from "@/common";
import TaskCard from "../TaskCard/TaskCard";

type ColumnTitle = "할 일" | "진행중" | "완료";

interface TaskColumnProps {
  title: ColumnTitle;
  items: []; // 추후 변경
}

const TaskColumn = ({ title, items }: TaskColumnProps) => {
  const isCompletedColumn = () => {
    if (title === "완료") {
      return true;
    }

    return false;
  };
  return (
    <section className="flex-1 flex flex-col gap-5">
      <ProgressButton text={title} className="w-full h-[38px]" />
      {items.map((item, index) => (
        <TaskCard key={index} item={item} isRenderList={isCompletedColumn()} /> // 추후 index -> item.id 변경
      ))}
    </section>
  );
};

export default TaskColumn;
