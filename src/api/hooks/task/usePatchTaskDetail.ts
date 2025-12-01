import { toastKit } from "@/utils";
import { patchTaskDetail } from "@/api/axios";
import { PatchTaskDetailRequest } from "@/api/axios/task/_types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskDetail = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, taskListId, taskId, body }: PatchTaskDetailRequest) =>
      patchTaskDetail({ groupId, taskListId, taskId, body }),

    onSuccess: (_data, variables) => {
      if (!variables) return;
      const { groupId, taskListId, taskId } = variables;

      success("할 일 수정 성공");
      queryClient.invalidateQueries({
        queryKey: ["task-list", groupId, taskListId],
      });
      queryClient.invalidateQueries({
        queryKey: ["task-list-detail", groupId, taskListId, taskId],
      });
      queryClient.invalidateQueries({
        queryKey: ["groups", Number(groupId)],
      });
      queryClient.invalidateQueries({
        queryKey: ["my-history"],
      });
    },

    onError: () => {
      error("할 일 수정 실패");
    },
  });
};

export default usePatchTaskDetail;
