import { Frequency, TaskGroupItem } from "@/types";

export interface GetTaskListRequest {
  groupId: string;
  taskListId: string;
  date?: string | null;
}

export type GetTaskListResponse = TaskGroupItem[];

export interface PostTaskRequest {
  groupId: string;
  taskListId: string;
  formData: {
    name: string;
    description: string;
    startDate: string;
    frequencyType: Frequency;
    // TODO(지권): monthDay 테스트 필요
    // monthDay: number;
  };
}

export interface PostTaskResponse {
  name: string;
  description: string;
  startDate: string;
  frequencyType: Frequency;
  monthDay: number;
}
