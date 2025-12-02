import { Task } from "@/types/Group/GroupData";

export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

const getTaskStatus = (task: Task) => {
  if (task.doneAt) return "DONE";

  const now = new Date();
  const taskDate = new Date(task.date);

  if (taskDate > now) return "TODO";

  return "IN_PROGRESS";
};

export default getTaskStatus;
