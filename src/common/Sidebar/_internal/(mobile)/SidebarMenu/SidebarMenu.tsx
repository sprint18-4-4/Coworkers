import { cn } from "@/utils";
import Link from "next/link";

interface SidebarMenuProps {
  menu: string;
  href: string;
  isOpen: boolean;
}

const SidebarMenu = ({ menu, href, isOpen }: SidebarMenuProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-full min-h-[52px] p-4 flex gap-3 items-center rounded-xl",
        " bg-background-primary hover:bg-gray-200 transition-colors",
        href && "bg-blue-50 text-brand-primary",
      )}
    >
      {/* TODO(지권): 아이콘 변경 */}
      <div className={cn("size-5 bg-gray-300 rounded-full", isOpen && "bg-blue-50 text-brand-primary")} />
      {!isOpen && <span className="text-lg-regular text-text-primary">{menu}</span>}
    </Link>
  );
};

export default SidebarMenu;
