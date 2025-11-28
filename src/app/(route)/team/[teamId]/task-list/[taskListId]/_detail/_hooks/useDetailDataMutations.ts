import { FormEvent } from "react";
import { useDeleteTaskListDetail, usePatchTaskListDetail } from "@/api/hooks";

interface UseDetailDataMutationsProps {
  taskPath: {
    teamId: number;
    taskListId: number;
    id: number;
  };
}

const useDetailDataMutations = ({ taskPath }: UseDetailDataMutationsProps) => {
  const { mutate: patchTaskListDetailMutate } = usePatchTaskListDetail();
  const { mutate: deleteTaskListDetailMutate } = useDeleteTaskListDetail();

  const submitDetailEdit = (
    e: FormEvent<HTMLFormElement>,
    form: { name: string; description: string },
    setIsEditModal: (value: boolean) => void,
  ) => {
    e.preventDefault();

    if (!form.name.trim() || !form.description.trim()) return;

    patchTaskListDetailMutate({
      groupId: taskPath.teamId,
      taskListId: taskPath.taskListId,
      taskId: taskPath.id,
      body: {
        name: form.name,
        description: form.description,
      },
    });

    setIsEditModal(false);
  };

  const toggleDone = (isDone: boolean) => {
    patchTaskListDetailMutate({
      groupId: taskPath.teamId,
      taskListId: taskPath.taskListId,
      taskId: taskPath.id,
      body: {
        done: !isDone,
      },
    });
  };

  const detailDelete = () => {
    deleteTaskListDetailMutate({
      groupId: taskPath.teamId,
      taskListId: taskPath.taskListId,
      taskId: taskPath.id,
    });
  };

  return {
    submitDetailEdit,
    toggleDone,
    detailDelete,
  };
};

export default useDetailDataMutations;
