import { CommentUser } from "@/types";

export type ArticleCommentType = {
  writer: CommentUser;
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};
