import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
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

  const { errors, validateForm, validateField, clearError } = useFormValidation(validationRules);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) clearError(name);
    },
    [errors, clearError],
  );

  const handleBlur = useCallback(
    (name: string) => {
      validateField(name, formData[name] ?? "", formData);
    },
    [formData, validateField],
  );

  const register = useCallback(
    (name: string) => {
      return {
        name,
        value: formData[name] ?? "",
        onChange: handleChange,
        onBlur: () => handleBlur(name),
      };
    },
    [formData, handleChange, handleBlur],
  );

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

  const isFormValid = useMemo(() => {
    const hasEmpty = Object.values(formData).some((val) => !val || val.trim() === "");
    if (hasEmpty) return false;

    const hasError = Object.keys(errors).length > 0;
    if (hasError) return false;

    if (validationRules) {
      const allRulesPassed = Object.keys(validationRules).every((key) => {
        const value = formData[key] ?? "";
        const rule = validationRules[key];

        const result = rule(value, formData);
        return result.isValid;
      });

      if (!allRulesPassed) return false;
    }

    return true;
  }, [formData, errors, validationRules]);

  return {
    register,
    errors,
    handleSubmit,
    meta: {
      isLoading,
      isValid: isFormValid,
    },
  };
};

export default useAuthForm;
