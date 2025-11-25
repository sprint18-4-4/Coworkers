import { postTodo } from "@/api/axios";
import { PostTodoRequest } from "@/types";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const usePostTodo = ({ groupId, formData }: PostTodoRequest) => {
  const { success, error } = toastKit();

  return useMutation({
    mutationFn: () => postTodo({ groupId, formData }),

    onSuccess: () => {
      success("할 일 추가 성공");
    },

    onError: () => {
      error("할 일 추가 실패");
    },
  });
};

export default usePostTodo;
