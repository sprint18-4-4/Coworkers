"use client";

import { ProfileItem } from "@/common";
import { GroupMember } from "@/types/Group/GroupData";
/**
 * @author sangin
 * 1. 멤버 강퇴는 관리자만 가능하다.
 * 2. 강퇴하려는 대상의 Role이 ADMIN이면 내보낼 수 없다.
 */

interface WidgetProfileProps {
  members: GroupMember[];
  onClickDelete: (member: GroupMember) => void;
}

const WidgetProfile = ({ members, onClickDelete }: WidgetProfileProps) => {
  return (
    <>
      <ul className="flex flex-col gap-[18px]">
        {members.map((member) => (
          <li key={member.userId}>
            <ProfileItem
              type="memberItem"
              src={member.userImage || null}
              name={member.userName}
              email={member.userEmail}
              dropdownOptions={[
                {
                  label: "삭제하기",
                  action: () => onClickDelete(member),
                },
              ]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WidgetProfile;
