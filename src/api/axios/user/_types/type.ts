// 프로필 업데이트

import { Frequency } from "@/types";

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

// GET myHistory
export interface MyHistoryItem {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string;
  frequency: Frequency;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string;
  date: string;
  updatedAt: string;
  id: number;
}

export interface MyHistoryResponse {
  tasksDone: MyHistoryItem[];
}
