import { create } from "zustand";
import { Cuisine } from "../../entities/Category";

interface ProductQuery {
  page: number;
  cuisine?: Cuisine | null;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setPage: (page: number) => void;
  setCuisine: (cuisine: Cuisine | null) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: { page: 1 },
  setPage: (page) => set((store) => ({ productQuery: { ...store.productQuery, page } })),
  setCuisine: (cuisine) => set((store) => ({ productQuery: { ...store.productQuery, cuisine } })),
}));

export default useProductQueryStore;