import { cn } from "@/utils";
import Link from "next/link";
import { DateNumber, Day } from "./_types";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <DateItem day="월" date={1} />
 * ```
 */

interface DateItemProps {
  day: Day;
  date: DateNumber;
  isToday?: boolean;
}

const DateItem = ({ day, date, isToday }: DateItemProps) => {
  return (
    <Link
      // TODO(지권): 추후 href 변경 필요
      href="/"
      aria-label={`${day} ${date}일`}
      className={cn(
        "box-border flex-col-center gap-1 rounded-lg w-[60px] h-[49px] py-2 border",
        "tablet:w-[100px] tablet:min-h-[68px] tablet:px-4 tablet:py-3 tablet:rounded-xl",
        isToday
          ? "bg-slate-800 text-text-inverse border-transparent"
          : "bg-background-primary border-border-primary hover:bg-background-secondary transition-colors",
      )}
    >
      <span className={`text-xs-medium tablet:text-sm-medium ${!isToday ? "text-text-default" : ""}`}>{day}</span>
      <span className={`text-lg-semibold tablet:text-xl-semibold ${!isToday ? "text-text-primary" : ""}`}>{date}</span>
    </Link>
  );
};

export default DateItem;
