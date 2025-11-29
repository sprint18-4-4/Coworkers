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

export interface PostArticleRequest {
  image?: string;
  content: string;
  title: string;
}

export type PostArticleResponse = ArticleListItem;
