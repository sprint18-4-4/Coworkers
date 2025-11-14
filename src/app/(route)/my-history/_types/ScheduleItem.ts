import { Frequency } from "@/types/FrequencyType";

interface UserInfo {
  image: string;
  nickname: string;
  id: number;
}

interface DoneBy {
  user: UserInfo;
}

interface Writer {
  image: string;
  nickname: string;
  id: number;
}

export interface ScheduleItem {
  id: number;
  name: string;
  description: string;
  date: string;
  doneAt: string;
  updatedAt: string;
  deletedAt: string | null;
  displayIndex: number;
  commentCount: number;
  recurringId: number;
  frequency: Frequency;
  writer: Writer;
  doneBy: DoneBy;
}
