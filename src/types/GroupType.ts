import { UserRole } from "./UserType";

// 리뷰: 직관적으로 바로 보여주는게 좋을까? vs 외부에서 만들어놓은 member, task 등 타입들 불러오는게 좋을까?
export interface GetGroupsRequest {
  id: string;
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
