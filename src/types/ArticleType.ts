interface ArticleBase {
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
}

export type ArticleListItem = ArticleBase;

export interface ArticleDetail extends ArticleBase {
  content: string;
  commentCount: number;
  isLiked: boolean;
}
