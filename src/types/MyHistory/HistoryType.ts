import { Frequency } from "../FrequencyType";

export interface MyHistoryItem {
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

export interface MyHistoryResponse {
  tasksDone: MyHistoryItem[];
}
