import { tokenStorage } from "@/utils";
import { clearAuthCookies } from "@/utils/setAuthCookies";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = async () => {
    await clearAuthCookies();

    tokenStorage.clearTokens();

    queryClient.setQueryData(["user"], null);

    queryClient.removeQueries({ queryKey: ["user"] });

    toast.success("로그아웃 되었습니다.");

    router.replace("/login");
  };

  return { logout };
};

export default useLogout;
