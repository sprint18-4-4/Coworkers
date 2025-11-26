import { getGroups } from "@/api/axios";
import { GetGroupsRequest } from "../../axios/group/_types/type";
import { useQuery } from "@tanstack/react-query";

const useGetGroups = ({ id }: GetGroupsRequest) => {
  return useQuery({
    queryKey: ["groups", id],
    queryFn: () => getGroups({ id }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
    enabled: !!id,
  });
};

export default useGetGroups;
