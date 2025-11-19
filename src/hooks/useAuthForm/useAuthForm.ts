import { ChangeEvent, FormEvent, useState } from "react";
import useForm from "./useForm";
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

  const { formData, handleChange, resetForm } = useForm(initialValues);

  const { errors, validateField: baseValidateField, validateForm } = useFormValidation(validationRules ?? {});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAllFilled = Object.values(formData).every((value) => value.trim().length > 0);
  const hasError = Object.keys(errors).length > 0;
  const isButtonEnabled = isAllFilled && !hasError && !isSubmitting;

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
