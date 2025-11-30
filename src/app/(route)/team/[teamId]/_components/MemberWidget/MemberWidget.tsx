"use client";

import { useGetGroups } from "@/api/hooks";
import { BaseButton, FloatingButton, Modal } from "@/common";
import { useParams } from "next/navigation";
import { useState } from "react";
import WidgetProfile from "./_internal/WidgetProfile";
import WidgetHeader from "./_internal/WidgetHeader";

const MemberWidget = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenWidget, setIsOpenWidget] = useState(false);

  const { teamId } = useParams();
  const id = Number(teamId);
  const { data: groups } = useGetGroups({ id });

  if (!groups) {
    return null;
  }

  const handleInviteLinkClick = () => {};

  return (
    <>
      <span className="fixed right-3 bottom-3">
        <FloatingButton iconName="user" onClick={() => setIsOpenWidget((prev) => !prev)} />

        {isOpenWidget && (
          <aside className="absolute bottom-[65px] right-0 flex flex-col gap-6 w-[240px] border border-border-primary rounded-xl bg-background-primary px-5 py-[24px]">
            <WidgetHeader
              setIsOpenWidget={setIsOpenWidget}
              setIsOpenModal={setIsOpenModal}
              memberCount={groups.members.length}
            />
            <WidgetProfile members={groups.members} />
          </aside>
        )}
      </span>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Modal.CloseIcon onClose={() => setIsOpenModal(false)} />
        <Modal.Body className="flex-col-center gap-2">
          <h3 className="text-text-primary text-lg-medium">멤버 초대</h3>
          <p>그룹에 참여할 수 있는 링크를 복사합니다.</p>
        </Modal.Body>
        <Modal.Footer>
          <BaseButton onClick={handleInviteLinkClick} variant="solid" size="large">
            링크 복사하기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemberWidget;
