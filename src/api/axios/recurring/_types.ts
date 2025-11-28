import { Frequency } from "@/types";

// POST Task

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
