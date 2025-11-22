import { Frequency } from "../FrequencyType";

export interface TaskUser {
  image: string;
  nickname: string;
  id: number;
}

export interface TaskGroupItem {
  doneBy: {
    user: TaskUser;
  };
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
