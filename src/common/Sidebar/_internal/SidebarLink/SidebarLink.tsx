import Link from "next/link";
import { cn } from "@/utils/cn";
import { Icon } from "@/common";
import { usePathname } from "next/navigation";

const SidebarLink = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  const pathname = usePathname();
  const isActive = pathname === "/dashboard";

  return (
    <Link
      href="/dashboard"
      className={cn(
        "h-[52px] rounded-xl p-4 flex items-center gap-3 bg-white",
        isOpen ? "w-full" : "w-[52px]",
        isActive
          ? "bg-blue-50 text-brand-primary"
          : "bg-transparent text-text-primary hover:bg-gray-100 transition-colors",
      )}
    >
      <Icon name="board" className={cn("size-5 tablet:size-5", isActive ? "text-brand-primary" : "text-slate-300")} />
      {isOpen && (
        <span
          className={cn(
            "flex-1 min-w-0 text-lg-regular truncate",
            isActive ? "text-brand-primary" : "text-text-primary",
          )}
        >
          {title}
        </span>
      )}
    </Link>
  );
};

export default SidebarLink;
