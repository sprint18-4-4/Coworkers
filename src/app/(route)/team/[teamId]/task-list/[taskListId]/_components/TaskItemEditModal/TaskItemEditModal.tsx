import { FormEvent, useState } from "react";
import { BaseButton, Input, Modal } from "@/common";

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskItemEditModal = ({ isOpen, onClose }: EditTodoModalProps) => {
  const [todoName, setTodoName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="flex-col-center gap-4 px-4 py-8">
      <Modal.CloseIcon onClose={onClose} />
      <h2 className="text-lg-medium text-text-primary">할 일 수정</h2>
      <form onSubmit={onSubmit} className="flex-col-center gap-4 w-[280px]">
        <Input
          autoFocus
          placeholder="목록 명을 입력해주세요."
          className="w-full"
          maxLength={30}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <BaseButton type="submit" size="large" variant="solid">
          수정하기
        </BaseButton>
      </form>
    </Modal>
  );
};

export default TaskItemEditModal;
