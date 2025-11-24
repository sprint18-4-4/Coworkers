import postRecurring from "@/api/axios/task-list/postRecurring";
import { PostRecurringResponse } from "@/api/axios/task-list/postRecurring";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const usePostRecurring = ({ groupId, taskListId, formData }: PostRecurringResponse) => {
  const { success, error } = toastKit();
  return useMutation({
    mutationFn: () => postRecurring({ groupId, taskListId, formData }),

    onSuccess: () => {
      success("할 일 추가 성공");
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostRecurring;
