import { getInvitation } from "@/api/axios";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const useGetInvitation = () => {
  const { success, error } = toastKit();
  return useMutation({
    mutationKey: ["getInvitation"],
    mutationFn: getInvitation,
    onSuccess: (data) => {
      navigator.clipboard.writeText(data);
      success("클립보드에 성공적으로 복사하였습니다.");
    },
    onError: () => {
      error("초대 링크를 복사하지 못하였습니다.");
    },
  });
};

export default useGetInvitation;
