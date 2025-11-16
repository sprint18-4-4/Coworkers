import { Icon } from "@/common";
import { cn, useIsActivePath } from "@/utils";
import Link from "next/link";

interface MobileMenuItemProps {
  menu: string;
  href: string;
  isOpen: boolean;
}

const MobileMenuItem = ({ menu, href, isOpen }: MobileMenuItemProps) => {
  const isActive = useIsActivePath(href);

  return (
    <Link
      href={href}
      className={cn(
        "w-full min-h-[52px] p-4 flex gap-3 items-center rounded-xl",
        "text-text-primary bg-background-primary hover:bg-gray-200 transition-colors",
        isActive && "text-brand-primary bg-blue-50",
      )}
    >
      <Icon name="chess" className={cn("size-5 tablet:size-5", isActive ? "text-brand-primary" : "text-slate-300")} />
      {isOpen && <span className={cn(isActive ? "text-lg-semibold" : "text-lg-regular")}>{menu}</span>}
    </Link>
  );
};

export default MobileMenuItem;
