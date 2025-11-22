import { useMutation } from "@tanstack/react-query";
import { setAuthCookies, tokenStorage } from "@/utils";
import { loginApi } from "@/api/axios/auth/login/login";

const usePostLogin = () => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: async (data) => {
      await setAuthCookies({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      tokenStorage.setAccessToken(data.accessToken);
    },
    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};

export default usePostLogin;
