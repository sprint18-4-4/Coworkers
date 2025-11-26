import { postTask } from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { toastKit } from "@/utils";
import { PostTaskRequest } from "@/api/axios/task-list/_types/type";

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
