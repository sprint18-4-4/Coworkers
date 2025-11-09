"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { HALF_HOUR_TIMES, TIME_PERIOD_LIST } from "./CONST_TIME";

type HalfHour = `${number}:${"00" | "30"}`;

const styles = {
  periodBaseButton:
    "w-[78px] h-[40px] px-[10px] py-2 rounded-[12px] border border-border-primary bg-background-primary text-text-default",
  timeBaseButton: "min-h-[34px] text-lg-regular text-text-default",
} as const;

const Time = () => {
  const [timePeriod, setTimePeriod] = useState<"am" | "pm">("am");
  const [selectedTime, setSelectedTime] = useState<HalfHour>("12:00");

  return (
    <section
      className={cn(
        "w-[288px] h-[176px] rounded-[12px] p-3 flex gap-[10px]",
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
        role="listbox"
        aria-label="시간 목록"
        className={cn(
          "flex flex-col items-start w-[172px] h-[152px] pl-4 pr-2 py-2 rounded-[12px]",
          "bg-background-primary border border-border-primary overflow-y-scroll",
        )}
      >
        {HALF_HOUR_TIMES.map((item) => (
          <button
            key={item.value}
            type="button"
            role="option"
            aria-label={item.label}
            aria-selected={selectedTime === item.value}
            onClick={() => setSelectedTime(item.value as HalfHour)}
            className={cn(styles.timeBaseButton, selectedTime === item.value && "text-interaction-focus")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Time;
