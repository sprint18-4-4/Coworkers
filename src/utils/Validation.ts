import { ValidationResult } from "@/types";

export const EMAIL_REGX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
export const PW_REGX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, ErrorMessage: "이메일은 필수 입력입니다." };
  }

  if (!EMAIL_REGX.test(email)) {
    return { isValid: false, ErrorMessage: "이메일 형식으로 작성해 주세요." };
  }

  return { isValid: true };
};

export const validatePasswordForLogin = (password: string): ValidationResult => {
  if (!password.trim()) {
    return { isValid: false, ErrorMessage: "비밀번호는 필수 입력입니다." };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password.trim()) {
    return { isValid: false, ErrorMessage: "비밀번호는 필수 입력입니다." };
  }

  if (password.length < 8) {
    return { isValid: false, ErrorMessage: "비밀번호는 최소 8자 이상이어야 합니다." };
  }

  if (!PW_REGX.test(password)) {
    return { isValid: false, ErrorMessage: "비밀번호는 영문, 숫자, 특수문자로만 가능합니다." };
  }

  return { isValid: true };
};

export const validatePasswordConfirm = (password: string, passwordConfirm: string): ValidationResult => {
  if (!passwordConfirm.trim()) {
    return { isValid: false, ErrorMessage: "비밀번호 확인을 입력해주세요." };
  }

  if (!password) {
    return { isValid: false, ErrorMessage: "먼저 비밀번호를 입력해주세요." };
  }

  if (password !== passwordConfirm) {
    return { isValid: false, ErrorMessage: "비밀번호가 일치하지 않습니다." };
  }

  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, ErrorMessage: "이름은 필수 입력입니다." };
  }

  if (name.trim().length < 2) {
    return { isValid: false, ErrorMessage: "이름은 최소 2자 이상이어야 합니다." };
  }

  if (name.trim().length > 20) {
    return { isValid: false, ErrorMessage: "이름은 최대 20자까지 가능합니다." };
  }

  return { isValid: true };
};

interface Membership {
  group: {
    name: string;
  };
}

export const validateTeamName = (
  name: string,
  existingMemberships?: Membership[],
): { isValid: boolean; error: string } => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return {
      isValid: false,
      error: "팀 이름을 입력해주세요.",
    };
  }

  if (trimmedName.length > 30) {
    return {
      isValid: false,
      error: "팀 이름은 최대 30자까지 가능합니다.",
    };
  }

  const isDuplicate = existingMemberships?.some((membership) => membership.group.name === trimmedName);

  if (isDuplicate) {
    return {
      isValid: false,
      error: "이미 존재하는 팀 이름입니다.",
    };
  }

  return { isValid: true, error: "" };
};
