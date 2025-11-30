import Link from "next/link";
import { cn } from "@/utils/cn";
import { Icon } from "@/common";
import { usePathname } from "next/navigation";
import SidebarTooltip from "../SidebarTooltip/SidebarTooltip";
import { IconKeys } from "@/common/Icon/Icon";

interface SidebarLinkProps {
  title: string;
  isOpen: boolean;
  href: string;
  iconName: IconKeys;
}

const SidebarLink = ({ title, isOpen, href = "dashboard", iconName = "board" }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative w-full flex items-center justify-center group">
      <Link
        href={href}
        aria-label={title}
        className={cn(
          "h-[52px] rounded-xl p-4 flex items-center gap-3 bg-white",
          isOpen ? "w-full" : "w-[52px]",
          isActive
            ? "bg-blue-50 text-brand-primary"
            : "bg-transparent text-text-primary hover:bg-gray-100 transition-colors",
        )}
      >
        <Icon
          name={iconName}
          className={cn("size-5 tablet:size-5", isActive ? "text-brand-primary" : "text-slate-300")}
        />
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
      {!isOpen && <SidebarTooltip title={title} />}
    </div>
  );
};

export default SidebarLink;
