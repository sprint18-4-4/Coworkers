import Link from "next/link";
import { cn } from "@/utils/cn";
import { Icon } from "@/common";

const SidebarLink = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  return (
    <Link
      href="/"
      className={cn("h-[52px] rounded-xl p-4 flex items-center gap-3 bg-white", isOpen ? "w-full" : "w-[52px]")}
    >
      <Icon name="board" className="size-5 tablet:size-5 text-slate-300" />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular text-text-primary truncate">{title}</span>}
    </Link>
  );
};

export default SidebarLink;
