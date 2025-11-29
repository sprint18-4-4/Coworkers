"use client";

import { cn } from "@/utils";
import { ko } from "date-fns/locale";
import { startOfWeek, addDays, format } from "date-fns";

const getWeek = (date: Date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  return [...Array(7)].map((_, i) => addDays(start, i));
};

const DateItem = ({ onClick, selectedDate }: { onClick: (date: Date) => void; selectedDate: Date }) => {
  const week = getWeek(selectedDate);

  return (
    <div className={cn("w-full flex flex-wrap items-center justify-around mt-6 gap-1", "tablet:gap-3")}>
      {week.map((day) => {
        const formatted = format(day, "d");
        const weekday = format(day, "EEE", { locale: ko });

        const isSelected = format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

        return (
          <button
            aria-label={`${format(day, "yyyy년 MM월 dd일")}`}
            key={day.toISOString()}
            onClick={(e) => {
              e.preventDefault();
              onClick(day);
            }}
            className={cn(
              "box-border flex-col-center gap-1 rounded-lg flex-1 h-[49px] py-2 border ",
              "tablet:flex-1 tablet:min-h-[68px] tablet:px-4 tablet:py-3 tablet:rounded-xl",
              isSelected ? "bg-slate-800 text-white" : "border hover:bg-gray-100 transition-colors",
            )}
          >
            <span className={`text-xs-medium tablet:text-sm-medium ${!isSelected ? "text-text-default" : ""}`}>
              {weekday}
            </span>
            <span className={`text-lg-semibold tablet:text-xl-semibold ${!isSelected ? "text-text-primary" : ""}`}>
              {formatted}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default DateItem;
