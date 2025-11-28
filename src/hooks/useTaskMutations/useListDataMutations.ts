import { useDeleteTaskListDetail, usePatchTaskListDetail } from "@/api/hooks";

interface UseTaskListMutationsProps {
  teamId: number;
  taskListId: number;
}

const useTaskMutations = ({ teamId, taskListId }: UseTaskListMutationsProps) => {
  const { mutate: patchTaskListDetailMutate } = usePatchTaskListDetail();
  const { mutate: deleteTaskListDetailMutate } = useDeleteTaskListDetail();

  const toggleTaskDone = (taskId: number, isDone: boolean) => {
    patchTaskListDetailMutate({
      groupId: teamId,
      taskListId,
      taskId,
      body: {
        done: !isDone,
      },
    });
  };

  const updateTask = (taskId: number, name: string, description?: string) => {
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

  const deleteTask = (taskId: number) => {
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

export default useTaskMutations;
