import { instance } from "@/lib";
import { Frequency } from "@/types";

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

const postTask = async ({ groupId, taskListId, formData }: PostTaskRequest) => {
  const response = await instance.post(`/groups/${groupId}/task-lists/${taskListId}/tasks`, formData);

  return response.data;
};

export default postTask;
