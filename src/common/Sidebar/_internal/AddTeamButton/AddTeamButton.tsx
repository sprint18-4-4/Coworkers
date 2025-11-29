import Link from "next/link";
import { cn } from "@/utils";
import Icon from "@/common/Icon/Icon";

const AddTeamButton = () => {
  return (
    <Link
      href="/team-creation"
      aria-label="팀 추가하기"
      className={cn(
        "w-full px-3 py-2 min-h-[33px] flex-center gap-1 rounded-[8px]",
        "border border-brand-primary text-lg-semibold text-brand-primary",
        "hover:bg-brand-primary/80 hover:text-white transition-colors",
      )}
    >
      <Icon name="plus" className="size-4 tablet:size-4" />
      <span>팀 추가하기</span>
    </Link>
  );
};

export default AddTeamButton;
