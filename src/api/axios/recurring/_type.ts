import { Frequency, TaskUser } from "@/types";

// GET TaskList

export interface GetTaskListRequest {
  groupId: number;
  taskListId: number;
  date?: string | null;
}

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

export type TaskListResponse = TaskGroupItem[];

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

// PATCH Todo

export interface PatchTodoRequest {
  groupId: number;
  id: number;
  name: string;
}
