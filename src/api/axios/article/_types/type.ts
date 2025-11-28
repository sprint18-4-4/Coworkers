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

export interface PostArticleLikeRequest {
  articleId: number;
}

export interface PostArticleLikeResponse {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  title: string;
  id: number;
  commentCount: number;
  isLiked: boolean;
  content: string;
}

export interface DeleteArticleLikeRequest {
  articleId: number;
}

export type DeleteArticleLikeResponse = PostArticleLikeResponse;

export interface DeleteArticleRequest {
  articleId: number;
}
export interface DeleteArticleResponse {
  id?: number;
  message?: string;
}

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
