import { Input } from "@/common";
import { DATE_OPTIONS } from "../../_constants";
import { cn } from "@/utils";
import { ChangeEvent } from "react";

const RepeatOptionItem = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 py-3 rounded-xl text-md-medium border transition-colors",
        selected
          ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-primary/80"
          : "border-border-primary bg-background-primary text-text-default hover:bg-gray-200",
      )}
    >
      {label}
    </button>
  );
};

interface RepeatWeeklySelectProps {
  weekDays: number[];
  setWeekDays: (weekDays: number[]) => void;
}

export const RepeatWeeklySelect = ({ weekDays, setWeekDays }: RepeatWeeklySelectProps) => {
  const handleWeeklyToggle = (value: number) => {
    setWeekDays(
      weekDays.includes(value) ? weekDays.filter((day) => day !== value) : [...weekDays, value].sort((a, b) => a - b),
    );
  };

  return (
    <div className="flex gap-1 mt-2">
      {DATE_OPTIONS.map((option) => (
        <RepeatOptionItem
          key={option.value}
          label={option.label}
          selected={weekDays.includes(option.value)}
          onClick={() => handleWeeklyToggle(option.value)}
        />
      ))}
    </div>
  );
};

interface RepeatMonthlySelectProps {
  monthDay: number | null;
  setMonthDay: (monthDay: number | null) => void;
}

export const RepeatMonthlySelect = ({ monthDay, setMonthDay }: RepeatMonthlySelectProps) => {
  const handleMonthlySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) {
      setMonthDay(null);
      return;
    }
    if (value < 1 || value > 31) return;

    setMonthDay(value);
  };

  return (
    <Input
      placeholder="1~31 사이 날짜를 입력해주세요."
      value={monthDay ? String(monthDay) : ""}
      onChange={handleMonthlySelectChange}
    />
  );
};
