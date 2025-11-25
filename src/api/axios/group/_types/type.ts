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
      displayIndex: 0;
      groupId: 0;
      updatedAt: string;
      createdAt: string;
      name: string;
      id: 0;
      tasks: string[];
    },
  ];
}
