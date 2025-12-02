import { TaskList } from "@/types";
import { TaskStatus } from "./getTaskStatus";

const getTaskListStatus = (taskList: TaskList): TaskStatus => {
  const hasDone = taskList.tasks.some((task) => task.doneAt !== null);
  const hasInProgress = taskList.tasks.some((task) => !task.doneAt && new Date(task.date) <= new Date());

  if (hasDone && !hasInProgress) return "DONE";
  if (hasInProgress) return "IN_PROGRESS";
  return "TODO";
};

export default getTaskListStatus;
