import { FormEvent, useState } from "react";
import { DateValue, Frequency, HalfHour } from "@/types";
import { usePostTask } from "@/api/hooks";

interface UseTodoFormProps {
  onClose: () => void;
  groupId: string;
  taskListId: string;
}

export const useTodoForm = ({ onClose, groupId, taskListId }: UseTodoFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: new Date(),
    startTime: {
      period: "am" as "am" | "pm",
      value: "01:30" as HalfHour,
    },
    frequencyType: "ONCE" as Frequency,
    todoMemo: "",
  });

  const { mutate: postTask } = usePostTask({
    groupId,
    taskListId,
    formData: {
      name: formData.title,
      description: formData.todoMemo,
      startDate: formData.startDate.toISOString(),
      frequencyType: formData.frequencyType,
      // TODO(지권): monthDay 테스트 필요
      // monthDay: formData.startDate.getDate(),
    },
  });

  const isFormValid =
    formData.title.trim().length > 0 &&
    formData.todoMemo.trim().length > 0 &&
    formData.startDate !== null &&
    formData.startTime.value !== null &&
    formData.frequencyType;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTask();
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
