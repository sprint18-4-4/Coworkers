import { AuthToken, User } from "@/types";

// 로그인
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends AuthToken {
  user: User;
}

// 회원가입
export interface SignUpRequest {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignUpResponse extends AuthToken {
  user: User;
}

// 비밀번호 재설정 URL 이메일 보내기

export interface ResetPasswordRequest {
  email: string;
  redirectUrl: string;
}

export interface ResetPasswordResponse {
  message: string;
}

// 비밀번호 재설정

export interface PatchResetPasswordRequest {
  password: string;
  passwordConfirmation: string;
  token: string;
}

export interface PatchResetPasswordResponse {
  message: string;
}
