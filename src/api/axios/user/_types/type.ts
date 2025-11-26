import { User } from "@/types";

// 유저 정보 조회

export type UserResponse = User;

// 프로필 업데이트

export type PatchUserProfileRequest = {
  nickname?: string;
  image?: string;
};

export type PatchUserProfileResponse = {
  message: string;
};

// 비밀번호 변경

export type PatchUserPasswordRequest = {
  password: string;
  passwordConfirmation: string;
};

export type PatchUserPasswordResponse = {
  message: string;
};
