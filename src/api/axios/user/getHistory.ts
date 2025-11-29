import { instance } from "@/lib";
import { GetHistoryResponse } from "./_types/type";

const getHistory = async (): Promise<GetHistoryResponse> => {
  const response = await instance.get<GetHistoryResponse>("/user/history");

  return response.data || [];
};

export default getHistory;
