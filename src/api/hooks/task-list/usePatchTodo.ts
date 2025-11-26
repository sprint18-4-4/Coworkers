import { patchTodo } from "@/api/axios";
import { PatchTodoRequest } from "@/types";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTodo = ({ groupId, id, name }: PatchTodoRequest) => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => patchTodo({ groupId, id, name }),

    onSuccess: () => {
      success("할 일 수정 성공");
      queryClient.invalidateQueries({
        queryKey: ["group-info", groupId],
      });
    },

    onError: () => {
      error("할 일 수정 실패");
    },
  });
};

export default usePatchTodo;
