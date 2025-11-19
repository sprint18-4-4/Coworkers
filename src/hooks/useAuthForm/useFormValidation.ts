import { useState } from "react";
import type { FormValues, FormErrors, ValidationFunction, ValidationRules, ValidationResult } from "@/types";

interface UseFormValidationReturn {
  errors: FormErrors;
  validateField: (name: string, value: string, formData?: FormValues) => boolean;
  validateForm: (formData: FormValues) => boolean;
  clearError: (name: string) => void;
  clearAllErrors: () => void;
}

const useFormValidation = (validationRules: ValidationRules = {}): UseFormValidationReturn => {
  const [errors, setErrors] = useState<FormErrors>({});

  const runValidator = (name: string, value: string, formData?: FormValues): ValidationResult | undefined => {
    const validator: ValidationFunction | undefined = validationRules[name];
    if (!validator) return undefined;
    return validator(value, formData);
  };

  const validateField = (name: string, value: string, formData?: FormValues) => {
    const result = runValidator(name, value, formData);

    if (!result) {
      const { [name]: removed, ...rest } = errors;
      setErrors(rest);
      return true;
    }

    if (!result.isValid) {
      setErrors((prev) => ({
        ...prev,
        [name]: result.ErrorMessage ?? "",
      }));
      return false;
    }

    setErrors((prev) => {
      const { [name]: removed, ...rest } = prev;
      return rest;
    });

    return true;
  };

  const validateForm = (formData: FormValues) => {
    let isValid = true;

    Object.keys(validationRules).forEach((name) => {
      const value = formData[name] ?? "";
      const fieldValid = validateField(name, value, formData);
      if (!fieldValid) isValid = false;
    });

    return isValid;
  };

  const clearError = (name: string) => {
    setErrors((prev) => {
      const { [name]: removed, ...rest } = prev;
      return rest;
    });
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateField,
    validateForm,
    clearError,
    clearAllErrors,
  };
};

export default useFormValidation;
