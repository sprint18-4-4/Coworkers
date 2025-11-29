import { cn } from "@/utils";

interface SidebarTooltipProps {
  title: string;
}

const SidebarTooltip = ({ title }: SidebarTooltipProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-full ml-6 top-1/2 -translate-y-1/2 z-10",
        "opacity-0 translate-x-1",
        "group-hover:opacity-100 group-hover:translate-x-0",
        "transition-all duration-150 ease-out",
      )}
    >
      <div className="bg-brand-primary/80 text-white text-sm-medium px-3 py-1.5 rounded-lg shadow-lg max-w-[220px] break-words">
        <span className="block truncate">{title}</span>
      </div>
    </div>
  );
};

export default SidebarTooltip;
