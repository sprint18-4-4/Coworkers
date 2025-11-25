import { useQuery } from "@tanstack/react-query";
import { UserResponse } from "@/types";
import { tokenStorage } from "@/utils";
import { getUser } from "@/api/axios";

const useGetUser = () => {
  const isLogined = typeof window !== "undefined" && !!tokenStorage.getAccessToken();

  return useQuery<UserResponse, Error>({
    queryKey: ["user"],
    queryFn: () => getUser(),
    enabled: isLogined,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useGetUser;
