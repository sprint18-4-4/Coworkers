"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import useFormValidation from "./useFormValidation";
import { FormValues, ValidationRules } from "@/types";

type AuthValidationRules = ValidationRules;

interface UseAuthFormOptions {
  initialValues: FormValues;
  validationRules?: AuthValidationRules;
  onSubmit: (values: FormValues) => Promise<void>;
}

const useAuthForm = ({ initialValues, validationRules, onSubmit }: UseAuthFormOptions) => {
  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const { errors, validateForm, validateField, clearError, clearAllErrors } = useFormValidation(validationRules);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) clearError(name);
  };

  const handleBlur = (name: string) => {
    validateField(name, formData[name] ?? "", formData);
  };

  const setValue = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const register = (name: string) => {
    return {
      name,
      value: formData[name] ?? "",
      onChange: handleChange,
      onBlur: () => handleBlur(name),
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm(formData);
    if (!isValid) return;

    setIsLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setFormData(initialValues);
    clearAllErrors();
  };

  const hasEmpty = Object.values(formData).some((val) => !val || val.trim() === "");

  const hasError = Object.keys(errors).length > 0;

  let isFormValid = true;

  if (hasEmpty || hasError) {
    isFormValid = false;
  } else if (validationRules) {
    const allRulesPassed = Object.keys(validationRules).every((key) => {
      const value = formData[key] ?? "";
      const rule = validationRules[key];
      const result = rule(value, formData);
      return result.isValid;
    });

    if (!allRulesPassed) {
      isFormValid = false;
    }
  }

  return {
    register,
    errors,
    handleSubmit,
    setValue,
    reset,
    meta: {
      isLoading,
      isValid: isFormValid,
    },
  };
};

export default useAuthForm;
