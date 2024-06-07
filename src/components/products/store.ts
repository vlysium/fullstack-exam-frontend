import { create } from "zustand";

interface ProductQuery {
  page: number;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setPage: (page: number) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: { page: 1 },
  setPage: (page) => set((store) => ({ productQuery: { ...store.productQuery, page } })),
}));

export default useProductQueryStore;