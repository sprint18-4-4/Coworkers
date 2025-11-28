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

export interface PostArticleRequest {
  image?: string;
  content: string;
  title: string;
}

export type PostArticleResponse = ArticleListItem;
