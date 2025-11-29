import Icon from "@/common/Icon/Icon";
import Link from "next/link";

const AddTeamButton = () => {
  return (
    <Link
      href="/team-creation"
      className="w-full px-3 py-2 min-h-[33px] flex-center gap-1 rounded-[8px] border border-brand-primary text-lg-semibold text-brand-primary"
    >
      <Icon name="plus" className="size-4 tablet:size-4" /> 팀 추가하기
    </Link>
  );
};

export default AddTeamButton;
