import { DoneBy, Frequency, TaskUser } from "@/types";

export interface GetTaskListDetailRequest {
  groupId: string;
  taskListId: string;
  taskId: string;
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

export interface PostTaskListCommentRequest {
  groupId: string;
  taskListId: string;
  taskId: string;
  content: string;
}

export interface PostTaskListCommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: TaskUser;
}
