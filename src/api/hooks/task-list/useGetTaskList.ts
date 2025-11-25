import getTaskList, { GetTaskListResponse } from "@/api/axios/task-list/getTaskList";
import { useQuery } from "@tanstack/react-query";

const useGetTaskList = ({ groupId, taskListId, date }: GetTaskListResponse) => {
  return useQuery({
    queryKey: ["task-list", groupId, taskListId, date],
    queryFn: () => getTaskList({ groupId, taskListId, date }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!taskListId,
  });
};

export default useGetTaskList;
