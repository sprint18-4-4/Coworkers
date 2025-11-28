// /stores/useArticleSearchStore.ts
import { create } from "zustand";

type ArticleSearchState = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const useArticleSearchStore = create<ArticleSearchState>((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
}));

export default useArticleSearchStore;
