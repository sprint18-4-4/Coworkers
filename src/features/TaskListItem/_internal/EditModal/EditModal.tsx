import { BaseButton, Input, Modal } from "@/common";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

const EditModal = ({ isOpen, onClose, onClick }: EditModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body className="flex-col-center gap-4">
        <h2 className="text-lg-medium text-text-primary">할 일 수정</h2>
        <Input placeholder="이름을 입력해주세요." />
      </Modal.Body>
      <Modal.Footer>
        <BaseButton variant="outlinedSecondary" size="large" onClick={onClose}>
          취소
        </BaseButton>
        <BaseButton variant="solid" size="large" onClick={onClick}>
          변경
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
