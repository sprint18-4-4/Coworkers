import { Frequency } from "../FrequencyType";
import { TaskUser } from "../TaskUser";

interface TaskDoneBy {
  user: TaskUser;
}

export interface TaskGroupItem {
  doneBy: TaskDoneBy;
  writer: TaskUser;
  displayIndex: number;
  commentCount: number;
  deletedAt: string;
  recurringId: number;
  frequency: Frequency;
  updatedAt: string;
  doneAt: string;
  date: string;
  description: string;
  name: string;
  id: number;
}

export type TaskListData = TaskGroupItem[];
