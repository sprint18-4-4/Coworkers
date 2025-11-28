import { Frequency } from "@/types";

export const MODAL_STYLES = {
  baseDiv: "w-full flex flex-col gap-4",
  periodDiv: "w-full cursor-pointer focus:outline-none",
  periodDivPressed: "border-interaction-pressed",
} as const;

export const REPEAT_OPTIONS: { label: string; value: Frequency }[] = [
  { label: "한 번", value: "ONCE" },
  { label: "매일", value: "DAILY" },
  { label: "주 반복", value: "WEEKLY" },
  { label: "월 반복", value: "MONTHLY" },
];

export const DATE_OPTIONS = [
  { label: "월", value: 0 },
  { label: "화", value: 1 },
  { label: "수", value: 2 },
  { label: "목", value: 3 },
  { label: "금", value: 4 },
  { label: "토", value: 5 },
  { label: "일", value: 6 },
] as const;
