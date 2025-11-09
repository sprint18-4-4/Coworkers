"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { TIME_PERIOD_LIST, TIME_LIST } from "./CONST_TIME";

const styles = {
  periodBaseButton:
    "w-[78px] h-[40px] px-[10px] py-2 rounded-[12px] border border-border-primary bg-background-primary text-text-default",
  timeBaseButton: "min-h-[34px] text-lg-regular text-text-default",
} as const;

const Time = () => {
  const [timePeriod, setTimePeriod] = useState<"am" | "pm">("am");
  const [selectedTime, setSelectedTime] = useState("12:00");

  return (
    <section
      className={cn(
        "w-[288px] h-[176px] rounded-[12px] p-3 flex gap-[10px]",
        "bg-background-primary border border-interaction-hover",
      )}
    >
      <div className="flex flex-col gap-2">
        {TIME_PERIOD_LIST.map((item) => (
          <button
            key={item.value}
            type="button"
            className={cn(styles.periodBaseButton, timePeriod === item.value && "bg-brand-primary text-text-inverse")}
            onClick={() => setTimePeriod(item.value)}
            aria-label={item.label}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "flex flex-col items-start w-[172px] h-[152px] pl-4 pr-2 py-2 rounded-[12px]",
          "bg-background-primary border border-border-primary overflow-y-scroll",
        )}
      >
        {TIME_LIST.map((item) => (
          <button
            key={item.value}
            type="button"
            className={cn(styles.timeBaseButton, selectedTime === item.value && "text-interaction-focus")}
            onClick={() => setSelectedTime(item.value)}
            aria-label={item.label}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Time;
