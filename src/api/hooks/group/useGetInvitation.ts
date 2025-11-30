import { getInvitation } from "@/api/axios";
import { GetInvitationRequest } from "@/api/axios/group/_type";
import { useQuery } from "@tanstack/react-query";

const useGetInvitation = ({ id }: GetInvitationRequest) => {
  return useQuery({
    queryKey: ["getInvitation", id],
    queryFn: () => getInvitation({ id }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
    enabled: !!id,
  });
};

export default useGetInvitation;
