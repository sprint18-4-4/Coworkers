export interface GetTaskListDetailRequest {
  groupId: string;
  taskListId: string;
  taskId: string;
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
  frequency: "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY";
  displayIndex: number;
  commentCount: number;
  writer: TaskUser;
  doneBy: DoneBy;
}

export interface TaskUser {
  id: number;
  nickname: string;
  image: string | null;
}

export interface DoneBy {
  user: TaskUser | null;
}
