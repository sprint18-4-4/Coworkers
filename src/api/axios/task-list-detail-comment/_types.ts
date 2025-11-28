import { TaskUser } from "@/types";

// POST TaskListComment

export interface PostTaskListCommentRequest {
  groupId: number;
  taskListId: number;
  taskId: number;
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
  taskId: number;
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
  taskId: number;
  commentId: number;
}

// PATCH TaskListComment

export interface PatchCommentRequest {
  taskId: number;
  commentId: number;
  content: string;
}

export interface PatchCommentResponse {
  content: string;
  updatedAt: string;
  createdAt: string;
  id: number;
  user: TaskUser;
}
