export interface CommentUser {
  id: number;
  nickname: string;
  image: string;
}

export interface CommentData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: CommentUser;
}
