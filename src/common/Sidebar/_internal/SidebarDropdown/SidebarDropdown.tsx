import { Icon } from "@/common";
import { Membership } from "@/types";
import { useIsActivePath } from "@/utils";
import { cn } from "@/utils/cn";
import Link from "next/link";

const DropdownItem = ({ title, id, isOpen }: { title: string; id: string; isOpen: boolean }) => {
  const isActive = useIsActivePath(`/${id}`);

  return (
    <Link
      href={`/${id}`}
      className={cn(
        "h-[52px] rounded-xl p-4 flex items-center gap-3 bg-primary",
        isOpen ? "w-full" : "w-[52px]",
        isActive ? "bg-blue-50 text-brand-primary" : "bg-transparent text-text-primary",
      )}
    >
      <Icon name="chess" className={cn("size-5 tablet:size-5", isActive ? "text-brand-primary" : "text-slate-300")} />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular truncate">{title}</span>}
    </Link>
  );
};

const SidebarDropdown = ({ isOpen, membership }: { isOpen: boolean; membership: Membership[] }) => {
  return (
    <details className="group w-full rounded-xl bg-white">
      <summary className="list-none px-4 py-2 flex items-center justify-between cursor-pointer rounded-xl select-none">
        <span className="flex items-center gap-3">
          <Icon name="chess" className="size-5 text-slate-300 tablet:size-5" />
          {isOpen && <span className="text-lg-semibold text-slate-400">팀 선택</span>}
        </span>
        {isOpen && (
          <Icon
            name="downArrow"
            className="size-5 tablet:size-5 group-open:rotate-180 transition-transform text-icon-primary"
          />
        )}
      </summary>

      <ul className="flex flex-col gap-2 mt-2">
        {membership.map((item, index) => (
          <li key={index}>
            <DropdownItem title={item.group.name} id={item.group.id.toString()} isOpen={isOpen} />
          </li>
        ))}
      </ul>
    </details>
  );
};

export default SidebarDropdown;
