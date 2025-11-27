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

  const { mutate: postTask } = usePostTask();

  const isFormValid =
    formData.title.trim().length > 0 &&
    formData.todoMemo.trim().length > 0 &&
    formData.startDate !== null &&
    formData.startTime.value !== null &&
    formData.frequencyType;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!isFormValid) return;

    e.preventDefault();
    postTask({
      groupId,
      taskListId,
      formData: {
        name: formData.title.trim(),
        description: formData.todoMemo.trim(),
        startDate: formData.startDate.toISOString(),
        frequencyType: formData.frequencyType,
        // TODO(지권): monthDay 테스트 필요
        // monthDay: formData.startDate.getDate(),
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
