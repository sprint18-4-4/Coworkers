import { FormEvent, useState } from "react";
import { usePostTodo } from "@/api/hooks";
import { BaseButton, Input, Modal } from "@/common";

interface TaskListCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
}

const TaskListCreateModal = ({ isOpen, onClose, groupId }: TaskListCreateModalProps) => {
  const [todoName, setTodoName] = useState("");
  const { mutate, isPending } = usePostTodo({ groupId, name: todoName });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!todoName || todoName.trim() === "") return;

    e.preventDefault();
    mutate();
    setTodoName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="flex-col-center gap-4 px-4 py-8">
      <Modal.CloseIcon onClose={onClose} />
      <h2 className="text-lg-medium text-text-primary">할 일 목록</h2>
      <form onSubmit={onSubmit} className="flex-col-center gap-4 w-[280px]">
        <Input
          autoFocus
          placeholder="목록 명을 입력해주세요."
          className="w-full"
          maxLength={30}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <BaseButton type="submit" size="large" variant="solid" disabled={todoName.trim() === "" || isPending}>
          만들기
        </BaseButton>
      </form>
    </Modal>
  );
};

export default TaskListCreateModal;
