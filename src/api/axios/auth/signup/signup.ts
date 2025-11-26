import { instance } from "@/lib";
import { SignUpResponse, SignUpRequest } from "./_types/type";

const postSignup = async (credentials: SignUpRequest): Promise<SignUpResponse> => {
  const { data } = await instance.post<SignUpResponse>("/auth/signUp", credentials);
  return data;
};

export default postSignup;
