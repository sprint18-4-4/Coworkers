"use client";

import { useDeleteMember } from "@/api/hooks";
import { ProfileItem } from "@/common";
import { useCheckAdmin } from "@/hooks";
import { UserRole } from "@/types";
import { GroupMember } from "@/types/Group/GroupData";
import { toastKit } from "@/utils";
import { useParams } from "next/navigation";

/**
 * @author sangin
 * 1. 멤버 강퇴는 관리자만 가능하다.
 * 2. 강퇴하려는 대상의 Role이 ADMIN이면 내보낼 수 없다.
 */

interface WidgetProfileProps {
  members: GroupMember[];
}

const WidgetProfile = ({ members }: WidgetProfileProps) => {
  const { mutate: deleteMember } = useDeleteMember();
  const { teamId } = useParams();

  const { error } = toastKit();
  const isAdmin = useCheckAdmin();

  const handleDeleteClick = (userId: number, role: UserRole) => {
    if (!isAdmin) {
      error("관리자만 이용 가능합니다.");
      return;
    }

    if (role === "ADMIN") {
      error("관리자는 내보낼 수 없습니다.");
      return;
    }

    deleteMember({ id: Number(teamId), memberUserId: userId });
  };

  return (
    <ul className="flex flex-col gap-[18px]">
      {members.map((member) => (
        <li key={member.userId}>
          <ProfileItem
            onClick={() => {}}
            type="memberItem"
            src={member.userImage || null}
            name={member.userName}
            email={member.userEmail}
            dropdownOptions={[
              {
                label: "삭제하기",
                action: () => {
                  handleDeleteClick(member.userId, member.role);
                },
              },
            ]}
          />
        </li>
      ))}
    </ul>
  );
};

export default WidgetProfile;
