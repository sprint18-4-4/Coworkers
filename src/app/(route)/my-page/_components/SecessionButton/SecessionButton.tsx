import { Icon, Modal, BaseButton } from "@/common";
import { useState } from "react";

const SecessionButton = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div className="w-full flex items-start">
        <button className="text-status-danger flex items-center gap-2" onClick={() => setIsDeleteOpen(true)}>
          <Icon name="secession" className="size-6 tablet:size-6" />
          <span className="text-md-medium tablet:text-lg-medium">회원 탈퇴하기</span>
        </button>
      </div>

      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} className="max-w-[400px]">
        <Modal.Body className="flex flex-col items-center gap-6 text-center py-4">
          <div className="flex-col-center gap-2">
            <Icon name="alert" className="size-6 tablet:size-6 mb-2 text-status-danger" />
            <h2 className="text-lg-medium ">회원 탈퇴를 진행하시겠어요?</h2>
            <p className="text-md-medium text-text-secondary">
              그룹장으로 있는 그룹은 자동으로 삭제되고,
              <br />
              모든 그룹에서 나가집니다.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex gap-3">
          <BaseButton
            variant="outlinedSecondary"
            size="large"
            className="flex-1"
            onClick={() => setIsDeleteOpen(false)}
          >
            취소
          </BaseButton>
          <BaseButton variant="solid" size="large" danger className="flex-1" onClick={handleDelete}>
            탈퇴하기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SecessionButton;
