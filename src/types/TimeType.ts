export type HalfHour = `${number}:${"00" | "30"}`;

export interface TimeProps {
  timePeriod: "am" | "pm";
  setTimePeriod: (period: "am" | "pm") => void;
  selectedTime: HalfHour;
  setSelectedTime: (time: HalfHour) => void;
}
