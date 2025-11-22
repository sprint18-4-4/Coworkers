"use client";

import { cn } from "@/utils";
import { HALF_HOUR_TIMES, TIME_PERIOD_LIST, TIME_STYLES } from "./CONST_TIME";
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
            className={cn(
              TIME_STYLES.periodBaseButton,
              timePeriod === item.value ? "bg-brand-primary text-text-inverse" : "hover:bg-background-secondary",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        role="radiogroup"
        aria-label="시간 목록"
        className={cn(
          "flex flex-col items-start w-[172px] h-[152px] rounded-xl hide-scrollbar",
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
            className={cn(
              TIME_STYLES.timeBaseButton,
              selectedTime === item.value ? "text-interaction-focus" : "hover:bg-background-secondary",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Time;
