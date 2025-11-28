import { AuthToken, User } from "@/types";

// 로그인
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = AuthToken & {
  user: User;
};

// 회원가입
export type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpResponse = AuthToken & {
  user: User;
};

// 비밀번호 재설정 URL 이메일 보내기

export type ResetPasswordRequest = {
  email: string;
  redirectUrl: string;
};

export type ResetPasswordResponse = {
  message: string;
};

// 비밀번호 재설정

export type PatchResetPasswordRequest = {
  password: string;
  passwordConfirmation: string;
  token: string;
};

export type PatchResetPasswordResponse = {
  message: string;
};
