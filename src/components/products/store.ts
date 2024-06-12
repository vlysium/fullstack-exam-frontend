import { create } from "zustand";

interface ProductQuery {
  page: number;
  cuisine?: string | null;
  menu?: string | null;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setPage: (page: number) => void;
  resetQuery: () => void;
  setCuisine: (cuisine: string | null) => void;
  setMenu: (menu: string | null) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: { page: 1 },
  setPage: (page) => set((store) => ({ productQuery: { ...store.productQuery, page } })),
  resetQuery: () => set({ productQuery: { page: 1 } }),
  setCuisine: (cuisine) => set((store) => ({ productQuery: { ...store.productQuery, cuisine } })),
  setMenu: (menu) => set((store) => ({ productQuery: { ...store.productQuery, menu } })),
}));

export default useProductQueryStore;