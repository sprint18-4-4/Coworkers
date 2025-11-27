// TODO(지권): useDetailDataMutations.ts 파일 중복

import { useDeleteTaskListDetail, usePatchTaskListDetail } from "@/api/hooks";

interface UseTaskListMutationsProps {
  teamId: string;
  taskListId: string;
}

const useTaskListMutations = ({ teamId, taskListId }: UseTaskListMutationsProps) => {
  const { mutate: patchTaskListDetailMutate } = usePatchTaskListDetail();
  const { mutate: deleteTaskListDetailMutate } = useDeleteTaskListDetail();

  const toggleTaskDone = (taskId: string, isDone: boolean) => {
    patchTaskListDetailMutate({
      groupId: teamId,
      taskListId,
      taskId,
      body: {
        done: !isDone,
      },
    });
  };

  const updateTask = (taskId: string, name: string, description?: string) => {
    patchTaskListDetailMutate({
      groupId: teamId,
      taskListId,
      taskId,
      body: {
        name,
        description,
      },
    });
  };

  const deleteTask = (taskId: string) => {
    deleteTaskListDetailMutate({
      groupId: teamId,
      taskListId,
      taskId,
    });
  };

  return {
    toggleTaskDone,
    updateTask,
    deleteTask,
  };
};

export default useTaskListMutations;
