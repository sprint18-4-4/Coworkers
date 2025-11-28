import { postRecurring } from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { PostTaskRequest } from "@/api/axios/recurring/_type";
import { useQueryClient } from "@tanstack/react-query";

const usePostRecurring = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, taskListId, body }: PostTaskRequest) => postRecurring({ groupId, taskListId, body }),

    onSuccess: (_data, variables) => {
      success("할 일 추가 성공");
      const { groupId, taskListId } = variables;

      queryClient.invalidateQueries({
        queryKey: ["task-list", groupId, taskListId],
      });
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostRecurring;
