import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { deleteTaskListDetail } from "@/api/axios";
import { DeleteTaskListDetailRequest } from "@/api/axios/task-list-detail/_types/type";

const useDeleteTaskListDetail = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ groupId, taskListId, taskId }: DeleteTaskListDetailRequest) =>
      deleteTaskListDetail({ groupId, taskListId, taskId }),

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
        queryKey: ["groups", Number(groupId)],
      });

      router.replace(`/team/${groupId}/task-list/${taskListId}`);
    },

    onError: () => {
      error("할 일 삭제 실패");
    },
  });
};

export default useDeleteTaskListDetail;
