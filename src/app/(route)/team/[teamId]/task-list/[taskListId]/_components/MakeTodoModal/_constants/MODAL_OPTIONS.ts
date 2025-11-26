export const MODAL_STYLES = {
  baseDiv: "w-full flex flex-col gap-4",
  periodDiv: "w-full cursor-pointer focus:outline-none",
  periodDivPressed: "border-interaction-pressed",
} as const;

export const REPEAT_OPTIONS = [
  { label: "한 번", value: "ONCE" },
  { label: "매일", value: "DAILY" },
  { label: "주 반복", value: "WEEKLY" },
  { label: "월 반복", value: "MONTHLY" },
];
