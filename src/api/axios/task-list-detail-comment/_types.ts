// POST TaskListComment

import { TaskUser } from "@/types";

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

// GET TaskListComment

export interface GetTaskListCommentRequest {
  taskId: string;
}

export interface GetTaskListCommentResponse {
  user: TaskUser;
  userId: number;
  taskId: number;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

// DELETE TaskListComment

export interface DeleteTaskListCommentRequest {
  taskId: string;
  commentId: string;
}

// PATCH TaskListComment

export interface PatchCommentRequest {
  taskId: string;
  commentId: string;
  content: string;
}

export interface PatchCommentResponse {
  content: string;
  updatedAt: string;
  createdAt: string;
  id: number;
  user: TaskUser;
}
