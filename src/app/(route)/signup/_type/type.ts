export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}
