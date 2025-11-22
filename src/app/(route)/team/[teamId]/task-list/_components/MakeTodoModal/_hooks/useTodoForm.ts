import { DateValue, HalfHour } from "@/types";
import { FormEvent, useState } from "react";

export const useTodoForm = (onClose: () => void) => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: new Date(),
    startTime: {
      period: "am" as "am" | "pm",
      value: "01:30" as HalfHour,
    },
    order: "ONCE",
    todoMemo: "",
  });

  const isFormValid =
    formData.title.trim().length > 0 &&
    formData.todoMemo.trim().length > 0 &&
    formData.startDate !== null &&
    formData.startTime.value !== null &&
    formData.order !== "";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    // TODO(지권): 할 일 만들기 함수 추가
    onClose();
  };

  const onChangeDate = (date: DateValue) => {
    if (date === null) return;

    const selectedDate = Array.isArray(date) ? date[0] : date;
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        startDate: selectedDate,
      }));
    }
  };

  const onChangeTime = (period: "am" | "pm", timeValue: HalfHour) => {
    setFormData((prev) => ({
      ...prev,
      startTime: {
        period,
        value: timeValue,
      },
    }));
  };

  return {
    formData,
    setFormData,
    isFormValid,
    onSubmit,
    onChangeDate,
    onChangeTime,
  };
};
