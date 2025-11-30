import { Group } from "@/types";
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
  param: {
    id: number;
  };
  body: {
    image?: string | null;
    name?: string;
  };
}

export type PatchGroupResponse = Group;

export interface GetInvitationRequest {
  id: number;
}

export type GetInvitationResponse = string;
