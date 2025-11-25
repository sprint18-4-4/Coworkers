import { postResetPassword } from "@/api/axios";
import { useMutation } from "@tanstack/react-query";

type UsePostResetPwOptions = {
  onSuccess?: () => void;
  onError?: (message: string) => void;
};

const usePostResetPw = (options?: UsePostResetPwOptions) => {
  return useMutation({
    mutationFn: postResetPassword,
    onSuccess: () => {
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      options?.onError?.(error.message);
    },
  });
};

export default usePostResetPw;
