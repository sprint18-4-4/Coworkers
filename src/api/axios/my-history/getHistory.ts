import { instance } from "@/lib";

const getHistory = async () => {
  const response = await instance.get("/user/history");

  return response.data.tasksDone || [];
};

export default getHistory;
