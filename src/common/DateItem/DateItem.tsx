import { cn } from "@/utils";
import Link from "next/link";

interface DateItemProps {
  day: "월" | "화" | "수" | "목" | "금" | "토" | "일";
  isToday?: boolean;
}

const DateItem = ({ day, isToday }: DateItemProps) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "py-2 w-[60px] min-h-[49px] flex-col-center gap-[2px] rounded-lg",
        "tablet:px-4 tablet:py-3 tablet:w-[100px] tablet:gap-1 tablet:rounded-xl",
        isToday
          ? "bg-slate-800 text-text-inverse"
          : "border border-border-primary bg-background-primary hover:bg-background-secondary transition-colors",
      )}
    >
      <span className={cn("text-xs-medium tablet:text-sm-medium", !isToday && "text-text-default")}>월</span>
      <span className={cn("text-lg-semibold tablet:text-xl-semibold", !isToday && "text-text-primary")}>13</span>
    </Link>
  );
};

export default DateItem;
