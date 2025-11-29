export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type FormErrors = Partial<Record<keyof SignUpFormData, string>>;
