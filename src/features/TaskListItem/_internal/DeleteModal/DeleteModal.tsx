import { BaseButton, Modal } from "@/common";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

const DeleteModal = ({ isOpen, onClose, onClick }: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="flex-col-center gap-4">
      <Modal.Body className="flex-col-center gap-2">
        <h2 className="text-lg-medium text-text-primary">할 일 삭제를 진행하시겠어요?</h2>
        <p className="text-md-medium text-text-muted">이 작업은 취소할 수 없습니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton variant="outlinedSecondary" size="large" onClick={onClose}>
          취소
        </BaseButton>
        <BaseButton variant="solid" size="large" onClick={onClick} danger>
          삭제하기
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
