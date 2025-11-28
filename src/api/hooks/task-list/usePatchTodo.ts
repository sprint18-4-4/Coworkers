import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { patchTodo } from "@/api/axios";
import { PatchTodoRequest } from "@/api/axios/task-list/_type";

const usePatchTodo = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, id, name }: PatchTodoRequest) => patchTodo({ groupId, id, name }),

    onSuccess: (_data, variables) => {
      const { groupId } = variables;

      success("할 일 수정 성공");
      // TODO(지권): groupId 네이밍 변경
      queryClient.invalidateQueries({
        queryKey: ["groups", groupId],
      });
    },

    onError: () => {
      error("할 일 수정 실패");
    },
  });
};

export default usePatchTodo;
