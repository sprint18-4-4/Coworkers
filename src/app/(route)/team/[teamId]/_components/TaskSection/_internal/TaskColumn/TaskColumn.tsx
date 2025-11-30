import { BaseButton, Input, Modal, ProgressButton } from "@/common";
import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";

type ColumnTitle = "할 일" | "진행중" | "완료";

interface TaskColumnProps {
  title: ColumnTitle;
  items: []; // 추후 변경
}

const TaskColumn = ({ title, items }: TaskColumnProps) => {
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);

  const isCompletedColumn = () => {
    if (title === "완료") {
      return true;
    }

    return false;
  };

  const handleCreateTaskClick = () => {};

  return (
    <section className="flex-1 flex flex-col gap-5">
      <ProgressButton onClick={() => setIsOpenCreateTaskModal(true)} text={title} className="w-full h-[38px]" />
      {items.map((item, index) => (
        <TaskCard key={index} item={item} isRenderList={isCompletedColumn()} /> // 추후 index -> item.id 변경
      ))}

      <Modal isOpen={isOpenCreateTaskModal} onClose={() => setIsOpenCreateTaskModal(false)}>
        <Modal.CloseIcon onClose={() => setIsOpenCreateTaskModal(false)} />
        <Modal.Body className="flex-col-center gap-2">
          <h3>할 일 목록</h3>
          <Input placeholder="목록 명을 입력해주세요." />
        </Modal.Body>
        <Modal.Footer>
          <BaseButton variant="solid" size="large" onClick={handleCreateTaskClick}>
            만들기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default TaskColumn;
