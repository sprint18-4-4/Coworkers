import { Frequency, TaskGroupItem } from "@/types";

export interface GetTaskListRequest {
  groupId: number;
  taskListId: number;
  date?: string | null;
}

export type GetTaskListResponse = TaskGroupItem[];

export interface PostTaskRequest {
  groupId: number;
  taskListId: number;
  body: {
    name: string;
    description: string;
    startDate: string;
    frequencyType: Frequency;
    monthDay?: number | null;
    weekDays?: number[];
  };
}

export interface PostTaskResponse {
  name: string;
  description: string;
  startDate: string;
  frequencyType: Frequency;
  monthDay?: number | null;
  weekDays?: number[];
}
