import { useState, ChangeEvent, FormEvent } from "react";
import { validateEmail, validatePassword, validatePasswordConfirm, validateName } from "@/utils";
import { SignUpFormData, FormErrors } from "../_type";

const useSignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkCurrentValidity = (): boolean => {
    if (
      formData.name.trim() === "" &&
      formData.email.trim() === "" &&
      formData.password.trim() === "" &&
      formData.passwordConfirm.trim() === ""
    ) {
      return false;
    }

    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) return false;

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) return false;

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) return false;

    const passwordConfirmValidation = validatePasswordConfirm(formData.password, formData.passwordConfirm);
    if (!passwordConfirmValidation.isValid) return false;

    return true;
  };

  const isButtonEnabled = checkCurrentValidity() && !isSubmitting;

  const validateField = (fieldName: keyof SignUpFormData) => {
    const validation = (() => {
      switch (fieldName) {
        case "name":
          return validateName(formData.name);
        case "email":
          return validateEmail(formData.email);
        case "password":
          return validatePassword(formData.password);
        case "passwordConfirm":
          return validatePasswordConfirm(formData.password, formData.passwordConfirm);
        default:
          return { isValid: true };
      }
    })();

    if (!validation) return;

    if (!validation.isValid) {
      setErrors((prev) => ({ ...prev, [fieldName]: validation.message }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.message;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    const passwordConfirmValidation = validatePasswordConfirm(formData.password, formData.passwordConfirm);
    if (!passwordConfirmValidation.isValid) {
      newErrors.passwordConfirm = passwordConfirmValidation.message;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // TODO(김원선): API 연동시 API 호출
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

export default useSignUpForm;
