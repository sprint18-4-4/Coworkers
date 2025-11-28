import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { patchResetPassword } from "@/api/axios";
import { ApiErrorResponse } from "@/types";
import { toastKit } from "@/utils";

type UsePatchResetPasswordOptions = {
  onSuccess?: () => void;
  onError?: (message: string) => void;
};

const usePatchResetPassword = (options?: UsePatchResetPasswordOptions) => {
  const router = useRouter();
  const { success, error } = toastKit();

  return useMutation({
    mutationFn: patchResetPassword,
    onSuccess: () => {
      success("비밀번호가 성공적으로 변경되었습니다.");
      options?.onSuccess?.();
      router.push("/login");
    },
    onError: (err: AxiosError<ApiErrorResponse>) => {
      const message = err.response?.data?.message || err.message || "비밀번호 재설정에 실패했습니다.";
      error(message);
      options?.onError?.(message);
    },
  });
};

export default usePatchResetPassword;
