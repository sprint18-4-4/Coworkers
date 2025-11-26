import { getTaskListDetail } from "@/api/axios";
import { GetTaskListDetailRequest } from "@/api/axios/task-list-detail/_types/type";
import { useQuery } from "@tanstack/react-query";

const useGetTaskListDetail = ({ groupId, taskListId, taskId }: GetTaskListDetailRequest) => {
  return useQuery({
    queryKey: ["task-list", groupId, taskListId, taskId],
    queryFn: () => getTaskListDetail({ groupId, taskListId, taskId }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!taskId,
  });
};

export default useGetTaskListDetail;
