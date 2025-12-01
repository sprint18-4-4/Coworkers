import { useDeleteTaskList } from "@/api/hooks";
import { BaseButton, Icon, Modal } from "@/common";

interface DeleteTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
  taskListId: number;
}

const DeleteTaskListModal = ({ isOpen, onClose, groupId, taskListId }: DeleteTaskListModalProps) => {
  const { mutate: deleteTaskList, isPending } = useDeleteTaskList();

  const handleDeleteTaskList = () => {
    deleteTaskList({ groupId, id: taskListId });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body className="flex-col-center gap-2">
        <Icon name="alert" className="text-status-danger" />
        <h3>정말로 삭제하시겠습니까?</h3>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton onClick={onClose} variant="outlinedSecondary" size="large">
          닫기
        </BaseButton>
        <BaseButton onClick={handleDeleteTaskList} variant="solid" size="large" danger disabled={isPending}>
          {isPending ? "삭제 중..." : "삭제하기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskListModal;
