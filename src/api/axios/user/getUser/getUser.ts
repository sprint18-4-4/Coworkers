import { instance } from "@/lib";
import { UserResponse } from "@/types";

const getUser = async (): Promise<UserResponse> => {
  const { data } = await instance.get<UserResponse>("/user");
  return data;
};

export default getUser;
