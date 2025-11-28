import { instance } from "@/lib";
import { SignUpResponse, SignUpRequest } from "./types";

const postSignup = async (credentials: SignUpRequest): Promise<SignUpResponse> => {
  const { data } = await instance.post<SignUpResponse>("/auth/signUp", credentials);
  return data;
};

export default postSignup;
