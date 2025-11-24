import getGroup from "@/api/axios/group/getGroup";
import { useQuery } from "@tanstack/react-query";

interface UseGetGroupParams {
  groupId: string;
}

const useGetGroup = ({ groupId }: UseGetGroupParams) => {
  return useQuery({
    queryKey: ["group-info", groupId],
    queryFn: () => getGroup({ groupId }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export default useGetGroup;
