import { instance } from "@/lib";
import { MyHistoryResponse } from "@/types";

const getHistory = async (): Promise<MyHistoryResponse> => {
  const response = await instance.get("/user/history");

  return response.data || [];
};

export default getHistory;
