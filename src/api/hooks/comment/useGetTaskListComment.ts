import { getTaskListComment } from "@/api/axios";
import { GetTaskListCommentRequest } from "@/api/axios/comment/_types";
import { useQuery } from "@tanstack/react-query";

const useGetTaskListComment = ({ taskId }: GetTaskListCommentRequest) => {
  return useQuery({
    queryKey: ["task-list-comment", taskId],
    queryFn: () => getTaskListComment({ taskId }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!taskId,
  });
};

export default useGetTaskListComment;
