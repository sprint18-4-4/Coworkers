// DELETE Todo

export interface DeleteTodoRequest {
  groupId: number;
  id: number;
}

// POST Todo

export interface PostTodoRequest {
  groupId: number;
  name: string;
}

export interface PostTodoResponse {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
}
