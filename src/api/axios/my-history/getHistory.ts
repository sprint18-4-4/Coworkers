import { instance } from "@/lib";
import { MyHistoryResponse } from "./_types";

const getHistory = async (): Promise<MyHistoryResponse> => {
  const response = await instance.get<MyHistoryResponse>("/user/history");

  return response.data || [];
};

export default getHistory;
