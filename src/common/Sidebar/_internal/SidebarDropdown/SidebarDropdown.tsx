import { SIDEBAR_MOCK_DATA } from "@/MOCK_DATA";
import { cn } from "@/utils/cn";

const DropdownItem = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  return (
    <div className={cn("h-[52px] rounded-3 p-4 flex items-center gap-3 bg-white", isOpen ? "w-full" : "w-[52px]")}>
      <div className="size-5 bg-black shrink-0" />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular text-brand-primary truncate">{title}</span>}
    </div>
  );
};

const SidebarDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <details className="group w-full rounded-3 bg-white">
      <summary className="list-none px-4 py-2 flex items-center justify-between cursor-pointer rounded-3 select-none">
        <span className="flex items-center gap-3">
          <div className="size-5 bg-gray-400" />
          {isOpen && <span className="text-lg-semibold text-slate-400">팀 선택</span>}
        </span>
        {isOpen && <div className="size-5 bg-gray-400 group-open:rotate-180 transition-transform" />}
      </summary>

      <ul className="flex flex-col gap-2 mt-2">
        {SIDEBAR_MOCK_DATA.map((item, index) => (
          <li key={index}>
            <DropdownItem title={item.title} isOpen={isOpen} />
          </li>
        ))}
      </ul>
    </details>
  );
};

export default SidebarDropdown;
