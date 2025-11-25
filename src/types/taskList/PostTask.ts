import { Frequency } from "../FrequencyType";

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
