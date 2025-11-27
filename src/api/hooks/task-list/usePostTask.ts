import { postTask } from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { PostTaskRequest } from "@/api/axios/task-list/_types/type";
import { useQueryClient } from "@tanstack/react-query";

const usePostRecurring = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, taskListId, formData }: PostTaskRequest) => postTask({ groupId, taskListId, formData }),

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
