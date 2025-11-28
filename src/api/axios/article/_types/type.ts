import { CommentUser } from "@/types";
import { ArticleDetail, ArticleListItem } from "@/types/ArticleType";

export interface GetArticlesRequest {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "like";
  keyword?: string;
}

export interface GetArticlesResponse {
  totalCount: number;
  list: ArticleListItem[];
}

export interface GetArticleRequest {
  articleId: number;
}

export type GetArticleResponse = ArticleDetail;

export interface GetArticleCommentsRequest {
  articleId: number;
  limit?: number;
  cursor?: number;
}

export interface GetArticleCommentsResponse {
  nextCursor: number;
  list: [
    {
      writer: CommentUser;
      id: number;
      content: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
}

export interface PostArticleCommentsRequest {
  articleId: number;
  body: {
    content: string;
  };
}

export interface PostArticleCommentsResponse {
  writer: CommentUser;
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
