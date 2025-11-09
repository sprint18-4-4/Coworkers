"use client";

import { cn } from "@/utils";
import { useState } from "react";

const styles = {
  baseButton:
    "w-[78px] h-[40px] px-[10px] py-2 rounded-[12px] border border-border-primary bg-background-primary text-text-default",
};

const timePeriodList = [
  { label: "오전", value: "am" },
  { label: "오후", value: "pm" },
] as const;

const timeList = [
  { label: "2:30", value: "2:30" },
  { label: "3:00", value: "3:00" },
  { label: "3:30", value: "3:30" },
  { label: "4:00", value: "4:00" },
  { label: "4:30", value: "4:30" },
];

const Time = () => {
  const [timePeriod, setTimePeriod] = useState<"am" | "pm">("am");
  const [time, setTime] = useState<string>("12:00");

  return (
    <section className="w-[288px] h-[176px] rounded-[12px] p-3 bg-background-primary flex gap-[10px]">
      <div className="flex flex-col gap-2">
        {timePeriodList.map((item) => (
          <button
            key={item.value}
            className={cn(styles.baseButton, timePeriod === item.value && "bg-brand-primary text-text-inverse")}
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
        {timeList.map((item) => (
          <button
            key={item.value}
            className={cn(
              "min-h-[34px] text-lg-regular text-text-default",
              time === item.value && "text-interaction-pressed",
            )}
            onClick={() => setTime(item.value)}
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
