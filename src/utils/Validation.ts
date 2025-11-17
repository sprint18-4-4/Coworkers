export const EMAIL_REGX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
export const PW_REGX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (!email.trim()) {
    return { isValid: false, message: "이메일을 입력해주세요." };
  }

  if (!EMAIL_REGX.test(email)) {
    return { isValid: false, message: "올바른 이메일 형식이 아닙니다." };
  }

  return { isValid: true };
};

export const validatePasswordForLogin = (password: string): { isValid: boolean; message?: string } => {
  if (!password.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (!password.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }

  if (password.length < 8) {
    return { isValid: false, message: "비밀번호는 최소 8자 이상이어야 합니다." };
  }

  if (!PW_REGX.test(password)) {
    return { isValid: false, message: "비밀번호는 영문자와 숫자를 포함해야 합니다." };
  }

  return { isValid: true };
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string,
): { isValid: boolean; message?: string } => {
  if (!passwordConfirm.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }

  if (password !== passwordConfirm) {
    return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
  }

  return { isValid: true };
};

export const validateName = (name: string): { isValid: boolean; message?: string } => {
  if (!name.trim()) {
    return { isValid: false, message: "이름을 입력해주세요." };
  }

  if (name.trim().length < 2) {
    return { isValid: false, message: "이름은 최소 2자 이상이어야 합니다." };
  }

  return { isValid: true };
};
