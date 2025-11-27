import { usePatchTaskListDetail } from "@/api/hooks";

interface UseTaskListMutationsProps {
  teamId: string;
  taskListId: string;
}

const useTaskListMutations = ({ teamId, taskListId }: UseTaskListMutationsProps) => {
  const { mutate: patchTaskListDetailMutate } = usePatchTaskListDetail();

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

  return {
    toggleTaskDone,
  };
};

export default useTaskListMutations;
