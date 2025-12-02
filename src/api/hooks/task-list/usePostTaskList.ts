import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { postTaskList } from "@/api/axios";
import { PostTaskListRequest } from "@/api/axios/task-list/_types";
import { useRouter } from "next/navigation";

const usePostTaskList = () => {
  const router = useRouter();
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, name }: PostTaskListRequest) => postTaskList({ groupId, name }),

    onSuccess: (data, variables) => {
      const { id } = data;
      const { groupId } = variables;

      success("할 일 추가 성공");
      queryClient.invalidateQueries({
        queryKey: ["groups", Number(groupId)],
      });

      router.replace(`/team/${groupId}/task-list/${id}`);
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostTaskList;
