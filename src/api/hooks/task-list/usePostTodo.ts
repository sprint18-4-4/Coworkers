import { postTodo } from "@/api/axios";
import { PostTodoRequest } from "@/types";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostTodo = ({ groupId, name }: PostTodoRequest) => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postTodo({ groupId, name }),

    onSuccess: () => {
      success("할 일 추가 성공");
      queryClient.invalidateQueries({
        queryKey: ["group-info", groupId],
      });
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostTodo;
