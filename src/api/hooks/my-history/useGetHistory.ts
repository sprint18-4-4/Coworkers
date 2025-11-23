import { useQuery } from "@tanstack/react-query";
import { getHistory } from "@/api/axios";

const useGetHistory = () => {
  return useQuery({
    queryKey: ["my-history"],
    queryFn: () => getHistory(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export default useGetHistory;
