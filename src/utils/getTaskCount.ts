import { TaskList } from "@/types";
import getTaskStatus from "./getTaskStatus";

export const getCompletedTaskCount = (taskLists: TaskList[]) => {
  return taskLists.reduce((acc, list) => {
    const completedCount = list.tasks.filter((task) => getTaskStatus(task) === "DONE").length;

    return acc + completedCount;
  }, 0);
};

export const getUncompletedTaskCount = (taskLists: TaskList[]) => {
  return taskLists.reduce((acc, list) => {
    const notDoneCount = list.tasks.filter((task) => getTaskStatus(task) !== "DONE").length;

    return acc + notDoneCount;
  }, 0);
};
