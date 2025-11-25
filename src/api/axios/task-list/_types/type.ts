import { TaskGroupItem } from "@/types";

export interface GetTaskListRequest {
  groupId: string;
  taskListId: string;
  date?: string | null;
}

export type GetTaskListResponse = TaskGroupItem[];
