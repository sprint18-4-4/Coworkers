import { useDeleteMember } from "@/api/hooks";
import { BaseButton, Icon, Modal } from "@/common";
import { useCheckAdmin } from "@/hooks";
import { GroupMember } from "@/types/Group/GroupData";
import { toastKit } from "@/utils";
import { useParams } from "next/navigation";

interface DeleteMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: GroupMember | null;
}

const DeleteMemberModal = ({ isOpen, onClose, member }: DeleteMemberModalProps) => {
  const { mutate: deleteMember, isPending } = useDeleteMember();
  const { teamId } = useParams();

  const { error } = toastKit();
  const isAdmin = useCheckAdmin();

  if (!member) {
    return null;
  }

  const handleDeleteClick = () => {
    if (!isAdmin) {
      error("관리자만 이용 가능합니다.");
      return;
    }

    if (member.role === "ADMIN") {
      error("관리자는 내보낼 수 없습니다.");
      return;
    }

    deleteMember({ id: Number(teamId), memberUserId: member.userId });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body className="flex-col-center gap-3">
        <Icon name="alert" className="text-status-danger" />
        <h3 className="text-text-primary text-lg-bold">정말로 삭제하시겠습니까?</h3>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton onClick={onClose} variant="outlinedSecondary" size="large">
          닫기
        </BaseButton>
        <BaseButton onClick={handleDeleteClick} variant="solid" size="large" danger disabled={isPending}>
          {isPending ? "삭제 중..." : "삭제하기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteMemberModal;
