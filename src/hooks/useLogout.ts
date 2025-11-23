import { tokenStorage } from "@/utils";
import { clearAuthCookies } from "@/utils/setAuthCookies";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = async () => {
    await clearAuthCookies();

    tokenStorage.clearTokens();

    queryClient.setQueryData(["user"], null);

    queryClient.removeQueries({ queryKey: ["user"] });

    router.replace("/login");
  };

  return { logout };
};

export default useLogout;
