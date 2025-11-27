export interface GetArticlesRequest {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "like";
  keyword?: "string";
}

export interface GetArticlesResponse {
  totalCount: number;
  list: [
    {
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
    },
  ];
}
