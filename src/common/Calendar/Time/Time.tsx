"use client";

import { cn } from "@/utils";
import { HALF_HOUR_TIMES, TIME_PERIOD_LIST } from "./CONST_TIME";
import { HalfHour } from "@/types";
import { TimeProps } from "@/types/TimeType";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * const [timePeriod, setTimePeriod] = useState("am");
 * const [selectedTime, setSelectedTime] = useState<HalfHour>("12:00");
 *
 * <Time timePeriod={timePeriod} setTimePeriod={setTimePeriod} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
 * ```
 */

const styles = {
  periodBaseButton:
    "w-[78px] h-[40px] px-[10px] py-2 rounded-xl border border-border-primary bg-background-primary text-text-default",
  timeBaseButton: "min-h-[34px] text-lg-regular text-text-default",
} as const;

const Time = ({ timePeriod, setTimePeriod, selectedTime, setSelectedTime }: TimeProps) => {
  return (
    <div
      className={cn(
        "w-[288px] h-[176px] rounded-xl p-3 flex gap-[10px]",
        "bg-background-primary border border-interaction-hover",
      )}
    >
      <div role="radiogroup" aria-label="오전/오후 선택" className="flex flex-col gap-2">
        {TIME_PERIOD_LIST.map((item) => (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-label={item.label}
            aria-checked={timePeriod === item.value}
            onClick={() => setTimePeriod(item.value)}
            className={cn(styles.periodBaseButton, timePeriod === item.value && "bg-brand-primary text-text-inverse")}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        role="radiogroup"
        aria-label="시간 목록"
        className={cn(
          "flex flex-col items-start w-[172px] h-[152px] pl-4 pr-2 py-2 rounded-xl",
          "bg-background-primary border border-border-primary overflow-y-scroll",
        )}
      >
        {HALF_HOUR_TIMES.map((item) => (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-label={item.label}
            aria-checked={selectedTime === item.value}
            onClick={() => setSelectedTime(item.value as HalfHour)}
            className={cn(styles.timeBaseButton, selectedTime === item.value && "text-interaction-focus")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Time;
