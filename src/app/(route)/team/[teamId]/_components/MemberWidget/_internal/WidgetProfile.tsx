import { ProfileItem } from "@/common";
import { GroupMember } from "@/types/Group/GroupData";

interface WidgetProfileProps {
  members: GroupMember[];
}

const WidgetProfile = ({ members }: WidgetProfileProps) => {
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
            dropdownOptions={[{ label: "삭제하기", action: () => {} }]}
          />
        </li>
      ))}
    </ul>
  );
};

export default WidgetProfile;
