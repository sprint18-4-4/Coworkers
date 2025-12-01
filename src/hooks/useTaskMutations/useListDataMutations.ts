import { usePatchTaskDetail } from "@/api/hooks";
import useDeleteTask from "@/api/hooks/task/useDeleteTask";

interface UseTaskListMutationsProps {
  teamId: number;
  taskListId: number;
}

const useTaskMutations = ({ teamId, taskListId }: UseTaskListMutationsProps) => {
  const { mutate: patchTaskListDetailMutate } = usePatchTaskDetail();
  const { mutate: deleteTaskListDetailMutate } = useDeleteTask();

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
