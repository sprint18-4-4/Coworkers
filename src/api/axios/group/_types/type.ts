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

export interface DeleteGroupRequest {
  id: number;
}

export interface DeleteGroupResponse {
  message?: string;
}

export interface PatchGroupRequest {
  image: string;
  name: string;
}

export interface PatchGroupResponse {
  id: number;
  name: string;
  image: string | null;
  createdAt: "2025-11-26T08:52:30+09:00";
  updatedAt: "2025-11-26T09:12:03+09:00";
  teamId: "18-4";
}
