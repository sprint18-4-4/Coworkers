import { useGetInvitation } from "@/api/hooks";
import { BaseButton, Modal } from "@/common";

interface InviteMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
}

const InviteMemberModal = ({ isOpen, onClose, groupId }: InviteMemberModalProps) => {
  const { mutate: getInvitation, isPending: isPendingInvitation } = useGetInvitation();

  const handleInviteLinkClick = () => {
    getInvitation({ id: groupId });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CloseIcon onClose={onClose} />
      <Modal.Body className="flex-col-center gap-2">
        <h3 className="text-text-primary text-lg-medium">멤버 초대</h3>
        <p>그룹에 참여할 수 있는 링크를 복사합니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton
          type="button"
          onClick={handleInviteLinkClick}
          variant="solid"
          size="large"
          disabled={isPendingInvitation}
        >
          {isPendingInvitation ? "요청 중..." : "링크 복사하기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default InviteMemberModal;
