import Link from "next/link";
import { cn } from "@/utils/cn";

const SidebarLink = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  return (
    <Link
      href="/"
      className={cn("h-[52px] rounded-[12px] p-4 flex items-center gap-3 bg-white", isOpen ? "w-full" : "w-[52px]")}
    >
      <div className="w-5 h-5 bg-black shrink-0" />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular text-brand-primary truncate">{title}</span>}
    </Link>
  );
};

export default SidebarLink;
