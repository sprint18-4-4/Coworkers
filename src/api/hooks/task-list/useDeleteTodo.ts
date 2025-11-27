import { deleteTodo } from "@/api/axios";
import { DeleteTodoRequest } from "@/types";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTodo = ({ groupId, id }: DeleteTodoRequest) => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTodo({ groupId, id }),

    onSuccess: () => {
      success("할 일 삭제 성공");
      queryClient.invalidateQueries({
        queryKey: ["group-info", groupId],
      });
    },

    onError: () => {
      error("할 일 삭제 실패");
    },
  });
};

export default useDeleteTodo;
