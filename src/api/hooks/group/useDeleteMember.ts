import { deleteMember } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteMember = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteMember"],
    mutationFn: deleteMember,
    onSuccess: () => {
      success("팀원을 성공적으로 내보냈습니다.");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: () => {
      error("팀원을 내보내지 못했습니다.");
    },
  });
};

export default useDeleteMember;
