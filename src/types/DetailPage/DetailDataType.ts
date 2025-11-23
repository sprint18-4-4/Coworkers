import { Frequency, TaskUser } from "@/types";

interface TaskDoneBy {
  user: TaskUser;
}

export interface TaskWriter {
  id: number;
  nickname: string;
  image: string;
}

export interface DetailDataItem {
  id: number;
  name: string;
  description: string;
  displayIndex: number;
  commentCount: number;

  date: string;
  doneAt: string;
  updatedAt: string;
  deletedAt: string | null;

  frequency: Frequency;
  recurringId: number;

  doneBy: TaskDoneBy;
  writer: TaskWriter;
}
