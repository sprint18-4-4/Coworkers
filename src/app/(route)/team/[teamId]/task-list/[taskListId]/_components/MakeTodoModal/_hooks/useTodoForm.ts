import { FormEvent, useState } from "react";
import { DateValue, Frequency, HalfHour } from "@/types";
import { usePostTask } from "@/api/hooks";

interface UseTodoFormProps {
  onClose: () => void;
  groupId: string;
  taskListId: string;
  repeatConfig: {
    order: Frequency;
    weekDays: number[];
    monthDay: number | null;
  };
}

export const useTodoForm = ({ onClose, groupId, taskListId, repeatConfig }: UseTodoFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: new Date(),
    startTime: {
      period: "am" as "am" | "pm",
      value: "01:30" as HalfHour,
    },
    todoMemo: "",
  });

  const { mutate: postTask } = usePostTask();

  const isFormValid =
    formData.title.trim().length > 0 &&
    formData.todoMemo.trim().length > 0 &&
    formData.startDate !== null &&
    formData.startTime.value !== null &&
    (repeatConfig.order === "WEEKLY"
      ? repeatConfig.weekDays.length > 0
      : repeatConfig.order === "MONTHLY"
        ? repeatConfig.monthDay !== null
        : true);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    postTask({
      groupId,
      taskListId,
      formData: {
        name: formData.title.trim(),
        description: formData.todoMemo.trim(),
        startDate: formData.startDate.toISOString(),
        frequencyType: repeatConfig.order,
        ...(repeatConfig.order === "WEEKLY" ? { weekDays: repeatConfig.weekDays } : {}),
        ...(repeatConfig.order === "MONTHLY" ? { monthDay: repeatConfig.monthDay } : {}),
      },
    });

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
