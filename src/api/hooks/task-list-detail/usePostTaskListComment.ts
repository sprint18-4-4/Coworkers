import { postTaskListComment } from "@/api/axios";
import { PostTaskListCommentRequest } from "@/api/axios/task-list-detail/_types/type";
import { toastKit } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostTaskListComment = ({ groupId, taskListId, taskId, content }: PostTaskListCommentRequest) => {
  const { success, error } = toastKit();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postTaskListComment({ groupId, taskListId, taskId, content }),

    onSuccess: () => {
      success("댓글 추가 성공");
      queryClient.invalidateQueries({ queryKey: ["task-list", groupId, taskListId, taskId] });
    },

    onError: () => {
      error("댓글 추가 실패");
    },
  });
};

export default usePostTaskListComment;
