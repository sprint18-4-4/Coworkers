import { instance } from "@/lib";
import { PatchTaskListDetailRequest, PatchTaskListDetailResponse } from "./_types/type";

const patchTaskListDetail = async ({
  groupId,
  taskListId,
  taskId,
  body: { name, description, done },
}: PatchTaskListDetailRequest): Promise<PatchTaskListDetailResponse> => {
  const response = await instance.patch<PatchTaskListDetailResponse>(
    `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
    {
      name,
      description,
      done,
    },
  );

  return response.data;
};

export default patchTaskListDetail;
