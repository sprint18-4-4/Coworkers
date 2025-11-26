import { deleteGroup } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeleteGroup = () => {
  const { success, error } = toastKit();
  const router = useRouter();
  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      success("팀을 성공적으로 삭제 하였습니다.");
      router.replace("/team");
    },
    onError: () => error("팀을 삭제하지 못하였습니다."),
  });
};

export default useDeleteGroup;
