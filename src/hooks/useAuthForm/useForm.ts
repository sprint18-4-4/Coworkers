import { ChangeEvent, useState } from "react";
import type { FormValues } from "@/types";

interface UseFormReturn {
  formData: FormValues;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
}

const useForm = (initialValues: FormValues): UseFormReturn => {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};

export default useForm;
