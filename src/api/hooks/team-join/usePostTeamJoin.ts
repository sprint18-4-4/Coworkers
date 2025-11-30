import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postTeamJoin from "@/api/axios/team-join/postTeamJoin";
import { PostTeamJoinRequest, PostTeamJoinResponse } from "@/api/axios/team-join/_type/type";
import { toastKit } from "@/utils";

type UsePostTeamJoinOptions = {
  onSuccess?: (data: PostTeamJoinResponse) => void;
  onError?: (error: Error) => void;
};

const usePostTeamJoin = (options?: UsePostTeamJoinOptions) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { success, error } = toastKit();

  return useMutation<PostTeamJoinResponse, AxiosError, PostTeamJoinRequest>({
    mutationFn: postTeamJoin,
    onSuccess: (data) => {
      success("팀에 성공적으로 참여했습니다!");
      options?.onSuccess?.(data);
      router.push(`/team/${data.groupId}`);

      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (errors) => {
      const axiosError = errors as AxiosError<{ message?: string }>;

      if (axiosError.response?.status === 401) {
        error("로그인이 필요합니다.");
        router.push("/login");
        return;
      }

      if (axiosError.response?.status === 404) {
        error("유효하지 않은 팀 링크입니다.");
        return;
      }

      if (axiosError.response?.status === 409) {
        error("이미 참여한 팀입니다.");
        return;
      }

      error(axiosError.response?.data?.message || "팀 참여에 실패했습니다.");

      options?.onError?.(axiosError);
    },
  });
};

export default usePostTeamJoin;
