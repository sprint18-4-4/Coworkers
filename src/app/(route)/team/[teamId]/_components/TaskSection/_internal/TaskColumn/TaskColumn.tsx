"use client";

import { ProgressButton } from "@/common";
import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";
import { TaskList } from "@/types";
import CreateTaskListModal from "../Modal/CreateTaskListModal";

type ColumnTitle = "할 일" | "진행중" | "완료";

interface TaskColumnProps {
  title: ColumnTitle;
  items: TaskList[];
}

const TaskColumn = ({ title, items }: TaskColumnProps) => {
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);

  const isRenderList = title !== "완료";

  return (
    <section className="flex-1 flex flex-col gap-5">
      <ProgressButton onClick={() => setIsOpenCreateTaskModal(true)} text={title} className="w-full h-[38px]" />
      {items.map((item) => (
        <TaskCard key={item.id} item={item} isRenderList={isRenderList} />
      ))}

      <CreateTaskListModal isOpen={isOpenCreateTaskModal} onClose={() => setIsOpenCreateTaskModal(false)} />
    </section>
  );
};

export default TaskColumn;
