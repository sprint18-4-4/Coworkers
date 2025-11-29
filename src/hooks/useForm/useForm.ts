"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import useFormValidation from "./useFormValidation";
import { FormValues, ValidationRules } from "@/types";

type AuthValidationRules = ValidationRules;

interface UseFormOptions {
  initialValues: FormValues;
  validationRules?: AuthValidationRules;
  onSubmit: (values: FormValues) => Promise<void>;
  validationTriggers?: Record<string, string[]>;
}

const useForm = ({ initialValues, validationRules, onSubmit, validationTriggers }: UseFormOptions) => {
  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const { errors, validateForm, validateField, clearError, clearAllErrors } = useFormValidation(validationRules);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
    if (errors[name]) clearError(name);

    if (validationTriggers && validationTriggers[name]) {
      validationTriggers[name].forEach((targetField) => {
        if (newFormData[targetField]) {
          {
            validateField(targetField, newFormData[targetField], newFormData);
          }
        }
      });
    }
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
    values: formData,
    setValue,
    reset,
    meta: {
      isLoading,
      isValid: isFormValid,
    },
  };
};

export default useForm;
