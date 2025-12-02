import { usePatchTask } from "@/api/hooks";
import { BaseButton, Input, Modal } from "@/common";
import { TaskList } from "@/types";
import { ChangeEvent, useState } from "react";

interface EditTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
  taskList: TaskList;
}

const EditTaskListModal = ({ isOpen, onClose, groupId, taskList }: EditTaskListModalProps) => {
  const { mutate: patchTask, isPending } = usePatchTask();

  const [title, setTitle] = useState("");

  const isDisabledEditButton = isPending || !title.trim();

  const handleEditClick = () => {
    patchTask(
      { groupId, id: taskList.id, name: title },
      {
        onSuccess: () => {
          onClose();
          setTitle("");
        },
      },
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CloseIcon onClose={onClose} />
      <Modal.Body className="flex-col-center gap-4">
        <h3 className="text-text-primary text-lg-bold">할 일 수정</h3>
        <Input
          placeholder={taskList.name}
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <BaseButton onClick={handleEditClick} variant="solid" size="large" disabled={isDisabledEditButton}>
          {isPending ? "수정 중..." : "수정하기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskListModal;
