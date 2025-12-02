"use client";

import { useGetGroups, useGetInvitation } from "@/api/hooks";
import { BaseButton, FloatingButton, Modal } from "@/common";
import { useParams } from "next/navigation";
import { useState } from "react";
import WidgetProfile from "./_internal/WidgetProfile";
import WidgetHeader from "./_internal/WidgetHeader";
import DeleteMemberModal from "../Modal/DeleteMemberModal";
import { GroupMember } from "@/types/Group/GroupData";
import InviteMemberModal from "../Modal/InviteMemberModal";

const MemberWidget = () => {
  const [isOpenInviteModal, setIsOpenInviteModal] = useState(false);
  const [isOpenWidget, setIsOpenWidget] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<GroupMember | null>(null);

  const { teamId } = useParams();
  const id = Number(teamId);

  const { data: groups } = useGetGroups({ id });

  if (!groups) {
    return null;
  }

  const handleDeleteClick = (member: GroupMember) => {
    setSelectedMember(member);
    setIsOpenDeleteModal(true);
  };

  return (
    <>
      <span className="fixed right-3 bottom-3">
        <FloatingButton iconName="user" onClick={() => setIsOpenWidget((prev) => !prev)} />

        {isOpenWidget && (
          <aside className="absolute bottom-[65px] right-0 flex flex-col gap-6 w-[240px] border border-border-primary rounded-xl bg-background-primary px-5 py-[24px]">
            <WidgetHeader
              setIsOpenWidget={setIsOpenWidget}
              setIsOpenModal={setIsOpenInviteModal}
              memberCount={groups.members.length}
            />
            <WidgetProfile members={groups.members} onClickDelete={handleDeleteClick} />
          </aside>
        )}
      </span>

      <InviteMemberModal isOpen={isOpenInviteModal} onClose={() => setIsOpenInviteModal(false)} groupId={id} />

      <DeleteMemberModal
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        member={selectedMember}
      />
    </>
  );
};

export default MemberWidget;
