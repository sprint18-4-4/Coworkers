import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { deleteTodo } from "@/api/axios";
import { DeleteTodoRequest } from "@/api/axios/task-list/_type";

const useDeleteTodo = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, id }: DeleteTodoRequest) => deleteTodo({ groupId, id }),

    onSuccess: (_data, variables) => {
      const { groupId } = variables;

      success("할 일 삭제 성공");
      queryClient.invalidateQueries({
        // TODO(지권): groupId 네이밍 변경
        queryKey: ["groups", groupId],
      });
    },

    onError: () => {
      error("할 일 삭제 실패");
    },
  });
};

export default useDeleteTodo;
