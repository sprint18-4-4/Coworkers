import { instance } from "@/lib";

const deleteUser = async (): Promise<void> => {
  await instance.delete("/user");
};

export default deleteUser;
