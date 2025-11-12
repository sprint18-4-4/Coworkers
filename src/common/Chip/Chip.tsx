import { cn } from "@/utils";
import Link from "next/link";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <Chip title="법인 등기" count={3} isActive={false} />
 * ```
 */

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
          ? "text-text-primary bg-background-primary border border-border-primary hover:bg-background-secondary transition-colors"
          : "text-text-inverse bg-brand-primary",
      )}
    >
      <span className="text-lg-medium">{title}</span>
      <span className={cn("text-lg-bold", !isActive && "text-brand-primary")}>{count}</span>
    </Link>
  );
};

export default Chip;
