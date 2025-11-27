export interface PostTodoRequest {
  groupId: string;
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
