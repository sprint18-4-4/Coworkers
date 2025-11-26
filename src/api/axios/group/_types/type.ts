import { UserRole } from "@/types";

export interface GetGroupsRequest {
  id: number;
}

export interface GetGroupsResponse {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
  members: [
    {
      role: UserRole;
      userImage: string;
      userEmail: string;
      userName: string;
      groupId: number;
      userId: number;
    },
  ];
  taskLists: [
    {
      displayIndex: number;
      groupId: number;
      updatedAt: string;
      createdAt: string;
      name: string;
      id: number;
      tasks: string[];
    },
  ];
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
