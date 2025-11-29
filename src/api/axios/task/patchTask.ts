import { instance } from "@/lib";
import { PatchTaskRequest } from "./_types";

const patchTask = async ({ groupId, id, name }: PatchTaskRequest) => {
  const response = await instance.patch(`/groups/${groupId}/task-lists/${id}`, { name });

  return response.data;
};

export default patchTask;
