import { Modal } from "@/common";

interface ArticleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ArticleEditModal = ({ isOpen, onClose }: ArticleEditModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body>
        <h3>게시글 수정하기</h3>
      </Modal.Body>
    </Modal>
  );
};

export default ArticleEditModal;
