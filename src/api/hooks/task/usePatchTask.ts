import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { patchTask } from "@/api/axios";
import { PatchTaskRequest } from "@/api/axios/task/_types";

const usePatchTask = () => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, id, name }: PatchTaskRequest) => patchTask({ groupId, id, name }),

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

export default usePatchTask;
