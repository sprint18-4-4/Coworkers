import { postTask } from "@/api/axios";
import { PostTaskRequest } from "@/types";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const usePostRecurring = ({ groupId, taskListId, formData }: PostTaskRequest) => {
  const { success, error } = toastKit();

  return useMutation({
    mutationFn: () => postTask({ groupId, taskListId, formData }),

    onSuccess: () => {
      success("할 일 추가 성공");
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostRecurring;
