import { patchGroup } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePatchGroup = () => {
  const { success, error } = toastKit();
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchGroup,
    onSuccess: () => {
      success("팀 이름을 성공적으로 변경하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.back();
    },
    onError: () => {
      error("팀 이름을 변경하지 못했습니다.");
    },
  });
};

export default usePatchGroup;
