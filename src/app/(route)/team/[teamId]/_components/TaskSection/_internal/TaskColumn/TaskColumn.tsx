"use client";

import { BaseButton, Input, Modal, ProgressButton } from "@/common";
import TaskCard from "../TaskCard/TaskCard";
import { ChangeEvent, useState } from "react";
import { usePostTaskList } from "@/api/hooks";
import { useParams } from "next/navigation";
import { TaskList } from "@/types";

type ColumnTitle = "할 일" | "진행중" | "완료";

interface TaskColumnProps {
  title: ColumnTitle;
  items: TaskList[];
}

const TaskColumn = ({ title, items }: TaskColumnProps) => {
  const { mutate: postTaskList, isPending } = usePostTaskList();
  const { teamId } = useParams();
  const [taskValue, setTaskValue] = useState("");
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);

  const isRenderList = title !== "완료";

  const handleCreateTaskClick = () => {
    postTaskList(
      { groupId: Number(teamId), name: taskValue },
      {
        onSuccess: () => {
          setIsOpenCreateTaskModal(false);
          setTaskValue("");
        },
      },
    );
  };

  return (
    <section className="flex-1 flex flex-col gap-5">
      <ProgressButton onClick={() => setIsOpenCreateTaskModal(true)} text={title} className="w-full h-[38px]" />
      {items.map((item) => (
        <TaskCard key={item.id} item={item} isRenderList={isRenderList} />
      ))}

      <Modal isOpen={isOpenCreateTaskModal} onClose={() => setIsOpenCreateTaskModal(false)}>
        <Modal.CloseIcon onClose={() => setIsOpenCreateTaskModal(false)} />
        <Modal.Body className="flex-col-center gap-2">
          <h3>할 일 목록</h3>
          <Input
            value={taskValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskValue(e.target.value)}
            placeholder="목록 명을 입력해주세요."
          />
        </Modal.Body>
        <Modal.Footer>
          <BaseButton variant="solid" size="large" onClick={handleCreateTaskClick} disabled={isPending}>
            {isPending ? "만드는 중..." : "만들기"}
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default TaskColumn;
