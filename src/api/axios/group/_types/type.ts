import { GroupMember, TaskList } from "@/types/Group/GroupData";

export interface GetGroupsRequest {
  id: number;
}

export interface GetGroupsResponse {
  createdAt: string;
  id: number;
  image: string;
  members: GroupMember[];
  name: string;
  taskLists: TaskList[];
  teamId: string;
  updatedAt: string;
}
