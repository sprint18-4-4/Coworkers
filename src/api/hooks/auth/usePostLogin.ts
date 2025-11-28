import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAuthCookies, tokenStorage } from "@/utils";
import { postLogin } from "@/api/axios";

const usePostLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: async (data) => {
      await setAuthCookies({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      tokenStorage.setAccessToken(data.accessToken);

      router.push("/team");
    },
    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};

export default usePostLogin;
