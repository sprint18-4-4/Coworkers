import { ArticleCommentType } from "@/types";

export interface GetArticleCommentsRequest {
  articleId: number;
  limit?: number;
  cursor?: number;
}

export interface GetArticleCommentsResponse {
  nextCursor: number;
  list: ArticleCommentType[];
}

export interface PostArticleCommentsRequest {
  articleId: number;
  body: {
    content: string;
  };
}

export type PostArticleCommentsResponse = ArticleCommentType;

export interface DeleteArticleCommentRequest {
  commentId: number;
}

export interface DeleteArticleCommentResponse {
  id?: number;
  message?: string;
}

export interface PatchArticleCommentRequest {
  commentId: number;
  body: {
    content: string;
  };
}

export type PatchArticleCommentResponse = PostArticleCommentsResponse;
