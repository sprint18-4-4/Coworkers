export const TIME_STYLES = {
  periodBaseButton:
    "w-[78px] h-[40px] px-[10px] py-2 rounded-xl border border-border-primary bg-background-primary text-text-default",
  timeBaseButton: "w-full min-h-[34px] text-lg-regular text-text-default text-start pl-4 pr-2 py-2",
} as const;

export const TIME_PERIOD_LIST = [
  { label: "오전", value: "am" },
  { label: "오후", value: "pm" },
] as const;

export const HALF_HOUR_TIMES = (() => {
  const result: { label: string; value: string }[] = [];
  for (let h = 12; h <= 23; h++) {
    const hour = h % 12 === 0 ? 12 : h % 12;
    result.push({ label: `${hour}:00`, value: `${hour}:00` });
    result.push({ label: `${hour}:30`, value: `${hour}:30` });
  }
  return result;
})();
