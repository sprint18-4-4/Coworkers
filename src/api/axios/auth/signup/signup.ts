import { instance } from "@/lib";
import { AuthToken, User } from "@/types";

type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

type SignUpResponse = AuthToken & {
  user: User;
};

const postSignup = async (credentials: SignUpRequest): Promise<SignUpResponse> => {
  const { data } = await instance.post<SignUpResponse>("/auth/signUp", credentials);
  return data;
};

export default postSignup;
