import { getTaskList } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { GetTaskListRequest } from "@/api/axios/task/_types";

const useGetTaskList = ({ groupId, taskListId, date }: GetTaskListRequest) => {
  return useQuery({
    queryKey: ["task-list", groupId, taskListId, date],
    queryFn: () => getTaskList({ groupId, taskListId, date }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!taskListId,
  });
};

export default useGetTaskList;
