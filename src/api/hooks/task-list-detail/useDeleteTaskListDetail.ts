import { deleteTaskListDetail } from "@/api/axios";
import { DeleteTaskListDetailRequest } from "@/api/axios/task-list-detail/_types/type";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTaskListDetail = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, taskListId, taskId }: DeleteTaskListDetailRequest) =>
      deleteTaskListDetail({ groupId, taskListId, taskId }),

    onSuccess: (_data, variables) => {
      if (!variables) return;
      const { taskId } = variables;

      success("할 일 삭제 성공");
      // queryClient.invalidateQueries({
      //   queryKey: ["task-list-detail", taskId],
      // });
      // queryClient.invalidateQueries({
      //   queryKey: ["task-list"],
      // });
    },

    onError: () => {
      error("할 일 삭제 실패");
    },
  });
};

export default useDeleteTaskListDetail;
