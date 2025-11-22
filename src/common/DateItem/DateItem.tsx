"use client";

import { cn } from "@/utils";
import { startOfWeek, addDays, format } from "date-fns";
import { ko } from "date-fns/locale";

const getWeek = (date: Date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  return [...Array(7)].map((_, i) => addDays(start, i));
};

const DateItem = ({ onClick, selectedDate }: { onClick: (date: Date) => void; selectedDate: Date }) => {
  const week = getWeek(selectedDate);

  return (
    <div className="w-full flex gap-3">
      {week.map((day) => {
        const formatted = format(day, "d");
        const weekday = format(day, "EEE", { locale: ko });

        const isSelected = format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

        return (
          <button
            key={day.toISOString()}
            onClick={(e) => {
              e.preventDefault();
              onClick(day);
            }}
            className={cn(
              "box-border flex-col-center gap-1 rounded-lg w-[60px] h-[49px] py-2 border",
              "tablet:flex-1 tablet:min-h-[68px] tablet:px-4 tablet:py-3 tablet:rounded-xl",
              isSelected ? "bg-slate-800 text-white" : "border hover:bg-gray-100 transition-colors",
            )}
          >
            <div className={`text-xs-medium tablet:text-sm-medium ${!isSelected ? "text-text-default" : ""}`}>
              {weekday}
            </div>
            <div className={`text-lg-semibold tablet:text-xl-semibold ${!isSelected ? "text-text-primary" : ""}`}>
              {formatted}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default DateItem;
