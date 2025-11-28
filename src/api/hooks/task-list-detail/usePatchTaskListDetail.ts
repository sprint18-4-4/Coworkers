import { patchTaskListDetail } from "@/api/axios";
import { PatchTaskListDetailRequest } from "@/api/axios/task-list-detail/_types";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskListDetail = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, taskListId, taskId, body }: PatchTaskListDetailRequest) =>
      patchTaskListDetail({ groupId, taskListId, taskId, body }),

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
    },

    onError: () => {
      error("할 일 수정 실패");
    },
  });
};

export default usePatchTaskListDetail;
