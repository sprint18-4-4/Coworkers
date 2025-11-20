import { ChangeEvent, FormEvent, useState } from "react";
import useFormValidation from "./useFormValidation";
import { FormValues, FormErrors, ValidationRules } from "@/types";

type AuthValidationRules = ValidationRules;

interface UseAuthFormOptions {
  initialValues: FormValues;
  validationRules?: AuthValidationRules;
  onSubmit: (values: FormValues) => Promise<void> | void;
}

interface UseAuthFormReturn {
  formData: FormValues;
  errors: FormErrors;
  isSubmitting: boolean;
  isButtonEnabled: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  validateField: (fieldName: string) => void;
}

const useAuthForm = (options: UseAuthFormOptions): UseAuthFormReturn => {
  const { initialValues, validationRules, onSubmit } = options;

  const [formData, setFormData] = useState<FormValues>(initialValues);

  const {
    errors,
    validateField: baseValidateField,
    validateForm,
    clearError,
  } = useFormValidation(validationRules ?? {});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = (): boolean => {
    const hasEmptyField = Object.values(formData).some((value) => value.trim() === "");
    if (hasEmptyField) return false;

    if (!validationRules) return true;

    for (const fieldName of Object.keys(validationRules)) {
      const validator = validationRules[fieldName];
      if (!validator) continue;

      const value = formData[fieldName] ?? "";
      const result = validator(value, formData);

      if (!result.isValid) return false;
    }
    return true;
  };

  const isButtonEnabled = isFormValid() && !isSubmitting;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm(formData);
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      clearError(name);
    }
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  const validateField = (fieldName: string) => {
    const value = formData[fieldName] ?? "";
    baseValidateField(fieldName, value, formData);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isButtonEnabled,
    handleChange,
    handleSubmit,
    validateField,
  };
};

export default useAuthForm;
