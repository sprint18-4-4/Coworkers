// POST Todo

export interface PostTaskListRequest {
  groupId: number;
  name: string;
}

export interface PostTaskListResponse {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
}

// DELETE TaskList

export interface DeleteTaskListRequest {
  groupId: number;
  id: number;
}
