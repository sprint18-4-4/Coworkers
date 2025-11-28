import { instance } from "@/lib";
import { GetTaskDetailRequest, GetTaskDetailResponse } from "./_types";

const getTaskDetail = async ({ groupId, taskListId, taskId }: GetTaskDetailRequest): Promise<GetTaskDetailResponse> => {
  const response = await instance.get<GetTaskDetailResponse>(
    `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
  );

  return response.data || [];
};

export default getTaskDetail;
