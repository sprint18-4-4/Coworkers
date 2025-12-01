import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { postTaskList } from "@/api/axios";
import { PostTaskListRequest } from "@/api/axios/task-list/_types";

const usePostTaskList = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, name }: PostTaskListRequest) => postTaskList({ groupId, name }),

    onSuccess: (_data, variables) => {
      const { groupId } = variables;

      success("할 일 추가 성공");
      queryClient.invalidateQueries({
        queryKey: ["groups", groupId],
      });
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostTaskList;
