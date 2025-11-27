import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { ApiErrorResponse } from "@/types";
import { deleteUser } from "@/api/axios";
import { toastKit } from "@/utils";

type UseDeleteUserOptions = {
  onSuccess?: () => void;
  onError?: (message: string) => void;
};

const useDeleteUser = (options?: UseDeleteUserOptions) => {
  const router = useRouter();
  const { success, error } = toastKit();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      success("회원 탈퇴가 완료되었습니다.");
      options?.onSuccess?.();

      router.push("/");
    },
    onError: (err: AxiosError<ApiErrorResponse>) => {
      const message = err.response?.data?.message || err.message || "회원 탈퇴에 실패했습니다.";
      error(message);
      options?.onError?.(message);
    },
  });
};

export default useDeleteUser;
