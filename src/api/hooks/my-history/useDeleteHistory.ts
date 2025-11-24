import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import deleteHistory, { DeleteHistoryData } from "@/api/axios/my-history/deleteHistory";

const useDeleteHistory = () => {
  const { success, error, loading } = toastKit();

  return useMutation<
    DeleteHistoryData,
    Error,
    { groupId: number; taskListId: number; taskId: number },
    { toastId: string }
  >({
    mutationFn: (params) => deleteHistory(params),

    onMutate: () => {
      const toastId = loading("삭제중..");
      return { toastId };
    },

    onSuccess: (_data, _variables, context) => {
      if (!context?.toastId) return;

      success("할 일이 삭제되었습니다.", { id: context.toastId });
    },

    onError: (_error, _variables, context) => {
      if (!context?.toastId) return;

      error("할 일 삭제에 실패했습니다.", { id: context.toastId });
    },
  });
};

export default useDeleteHistory;
