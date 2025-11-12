import { cn } from "@/utils";
import Link from "next/link";

interface ChipProps {
  title: string;
  count: number;
  isActive?: boolean;
}

const Chip = ({ title, count, isActive }: ChipProps) => {
  return (
    <Link
      // TODO(지권): 추후 href 변경 필요
      href={"/"}
      className={cn(
        "px-4 py-3 flex items-center gap-[6px] rounded-full",
        !isActive
          ? "bg-background-primary text-text-primary border border-border-primary hover:bg-background-secondary transition-colors"
          : "bg-brand-primary text-text-inverse",
      )}
    >
      <span className="text-lg-medium">{title}</span>
      <span className={cn("text-lg-bold", !isActive && "text-brand-primary")}>{count}</span>
    </Link>
  );
};

export default Chip;
