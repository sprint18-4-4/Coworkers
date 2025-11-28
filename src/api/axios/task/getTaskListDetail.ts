import { instance } from "@/lib";
import { GetTaskListDetailRequest, GetTaskListDetailResponse } from "./_type";

const getTaskListDetail = async ({
  groupId,
  taskListId,
  taskId,
}: GetTaskListDetailRequest): Promise<GetTaskListDetailResponse> => {
  const response = await instance.get<GetTaskListDetailResponse>(
    `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
  );

  return response.data || [];
};

export default getTaskListDetail;
