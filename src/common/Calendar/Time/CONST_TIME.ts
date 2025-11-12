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
