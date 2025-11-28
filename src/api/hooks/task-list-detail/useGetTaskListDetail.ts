import { getTaskDetail } from "@/api/axios";
import { GetTaskDetailRequest } from "@/api/axios/task/_types";
import { useQuery } from "@tanstack/react-query";

const useGetTaskListDetail = ({ groupId, taskListId, taskId }: GetTaskDetailRequest) => {
  return useQuery({
    queryKey: ["task-list-detail", groupId, taskListId, taskId],
    queryFn: () => getTaskDetail({ groupId, taskListId, taskId }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!taskId,
  });
};
export default useGetTaskListDetail;
