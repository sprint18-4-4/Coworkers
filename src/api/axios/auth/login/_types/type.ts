import { AuthToken, User } from "@/types";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = AuthToken & {
  user: User;
};
