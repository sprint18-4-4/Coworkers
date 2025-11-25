import { getGroup } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";

interface UseGetGroupParams {
  groupId: string;
}

// TODO(지권): 상인님 PR 머지 후 제거될 파일

const useGetGroup = ({ groupId }: UseGetGroupParams) => {
  return useQuery({
    queryKey: ["group-info", groupId],
    queryFn: () => getGroup({ groupId }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!groupId,
  });
};

export default useGetGroup;
