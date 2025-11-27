// Post Reset Password Email

export type ResetPasswordRequest = {
  email: string;
  redirectUrl: string;
};

export type ResetPasswordResponse = {
  message: string;
};

// Patch Reset Password

export type PatchResetPasswordRequest = {
  password: string;
  passwordConfirmation: string;
  token: string;
};

export type PatchResetPasswordResponse = {
  message: string;
};
