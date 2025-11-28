import { toastKit } from "@/utils";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/api/axios";
import { DeleteTaskRequest } from "@/api/axios/task/_types";

const useDeleteTaskListDetail = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ groupId, taskListId, taskId }: DeleteTaskRequest) => deleteTask({ groupId, taskListId, taskId }),

    onSuccess: (_data, variables) => {
      if (!variables) return;
      const { taskId, groupId, taskListId } = variables;

      success("할 일 삭제 성공");
      queryClient.invalidateQueries({
        queryKey: ["task-list-detail", taskId],
      });
      queryClient.invalidateQueries({
        queryKey: ["task-list", groupId, taskListId],
      });
      queryClient.invalidateQueries({
        queryKey: ["task-list-detail", groupId, taskListId, taskId],
      });
      queryClient.invalidateQueries({
        queryKey: ["groups", groupId],
      });

      router.replace(`/team/${groupId}/task-list/${taskListId}`);
    },

    onError: () => {
      error("할 일 삭제 실패");
    },
  });
};

export default useDeleteTaskListDetail;
