import { FormEvent, useState } from "react";
import { BaseButton, Input, Modal } from "@/common";
import { usePatchTodo } from "@/api/hooks";

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  TodoItem: {
    groupId: string;
    id: string;
  };
}

const TaskItemEditModal = ({ isOpen, onClose, TodoItem }: EditTodoModalProps) => {
  const [todoName, setTodoName] = useState("");

  const { mutate: patchTodo, isPending } = usePatchTodo();

  const handleUpdateTodo = (e: FormEvent<HTMLFormElement>) => {
    if (!todoName || todoName.trim() === "") return;

    e.preventDefault();
    patchTodo({
      groupId: String(TodoItem?.groupId),
      id: String(TodoItem?.id),
      name: todoName,
    });
    setTodoName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="flex-col-center gap-4 px-4 py-8">
      <Modal.CloseIcon onClose={onClose} />
      <h2 className="text-lg-medium text-text-primary">할 일 수정</h2>
      <form onSubmit={handleUpdateTodo} className="flex-col-center gap-4 w-[280px]">
        <Input
          autoFocus
          placeholder="수정할 이름을 입력해주세요."
          className="w-full"
          maxLength={30}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <BaseButton type="submit" size="large" variant="solid" disabled={todoName.trim() === "" || isPending}>
          수정하기
        </BaseButton>
      </form>
    </Modal>
  );
};

export default TaskItemEditModal;
