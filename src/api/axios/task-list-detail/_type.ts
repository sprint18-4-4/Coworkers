import { DoneBy, Frequency, TaskUser } from "@/types";

// GET TaskListDetail

export interface GetTaskListDetailRequest {
  groupId: number;
  taskListId: number;
  taskId: number;
}

export interface Recurring {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  startDate: string;
  frequencyType: Frequency;
  weekDays: string[];
  monthDay: number | null;
  taskListId: number;
  groupId: number;
  writerId: number;
}

export interface GetTaskListDetailResponse {
  id: number;
  name: string;
  description: string | null;
  date: string;
  doneAt: string | null;
  updatedAt: string;
  deletedAt: string | null;
  recurringId: number;
  frequency: Frequency;
  displayIndex: number;
  commentCount: number;
  writer: TaskUser;
  doneBy: DoneBy;
  recurring: Recurring;
}

// PATCH TaskListDetail

export interface PatchTaskListDetailRequest {
  groupId: number;
  taskListId: number;
  taskId: number;
  body: {
    name?: string;
    description?: string;
    done?: boolean;
  };
}

export interface PatchTaskListDetailResponse {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string;
  frequency: Frequency;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string;
  date: string;
  updatedAt: string;
  id: number;
}

// DELETE TaskListDetail

export interface DeleteTaskListDetailRequest {
  groupId: number;
  taskListId: number;
  taskId: number;
}
