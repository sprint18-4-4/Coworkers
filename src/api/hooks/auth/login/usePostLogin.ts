import { useMutation } from "@tanstack/react-query";
import { setAuthCookies, tokenStorage } from "@/utils";
import { postLogin } from "@/api/axios/auth/login/login";

const usePostLogin = () => {
  return useMutation({
    mutationFn: postLogin,
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
