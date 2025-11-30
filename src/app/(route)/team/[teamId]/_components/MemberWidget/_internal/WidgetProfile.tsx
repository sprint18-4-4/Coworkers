import { ProfileItem } from "@/common";
import { GroupMember } from "@/types/Group/GroupData";

interface WidgetProfileProps {
  members: GroupMember[];
}

const WidgetProfile = ({ members }: WidgetProfileProps) => {
  console.log(members);
  return (
    <ul className="flex flex-col gap-[18px]">
      {members.map((member) => (
        <li key={member.userId}>
          <ProfileItem
            type="memberItem"
            src={member.userImage || null}
            name={member.userName}
            email={member.userEmail}
            onClick={() => {}}
          />
        </li>
      ))}
    </ul>
  );
};

export default WidgetProfile;
