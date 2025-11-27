export type ResetPasswordRequest = {
  email: string;
  redirectUrl: string;
};

export type ResetPasswordResponse = {
  message: string;
};
