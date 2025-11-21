import { DateValue, HalfHour } from "@/types";
import { FormEvent, useState } from "react";

export const useTodoForm = (onClose: () => void) => {
  const [value, setValue] = useState({
    title: "",
    startDate: new Date(),
    startTime: {
      period: "am" as "am" | "pm",
      value: "01:30" as HalfHour,
    },
    order: "once",
    todoMemo: "",
  });

  const isFormValid =
    value.title.trim().length > 0 &&
    value.todoMemo.trim().length > 0 &&
    value.startDate !== null &&
    value.startTime.value !== null &&
    value.order !== "";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(value);
    onClose();
  };

  const onChangeDate = (date: DateValue) => {
    if (date === null) return;

    const selectedDate = Array.isArray(date) ? date[0] : date;
    if (selectedDate) {
      setValue((prev) => ({
        ...prev,
        startDate: selectedDate,
      }));
    }
  };

  const onChangeTime = (period: "am" | "pm", timeValue: HalfHour) => {
    setValue((prev) => ({
      ...prev,
      startTime: {
        period,
        value: timeValue,
      },
    }));
  };

  return {
    value,
    setValue,
    isFormValid,
    onSubmit,
    onChangeDate,
    onChangeTime,
  };
};
