import { AuthToken, User } from "@/types";

export type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpResponse = AuthToken & {
  user: User;
};
