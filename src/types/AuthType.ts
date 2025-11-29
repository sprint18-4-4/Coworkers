export type FormValues = Record<string, string>;

export type FormErrors = Record<string, string>;

export type ValidationResult = {
  isValid: boolean;
  ErrorMessage?: string;
};

export type ValidationFunction = (value: string, formData?: FormValues) => ValidationResult;

export type ValidationRules = Record<string, ValidationFunction>;

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};
