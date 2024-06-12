import { create } from "zustand";
import { Cuisine, Menu } from "../../entities/Category";

interface ProductQuery {
  page: number;
  cuisine?: Cuisine | null;
  menu?: Menu | null;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setPage: (page: number) => void;
  setCuisine: (cuisine: Cuisine | null) => void;
  setMenu: (menu: Menu | null) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: { page: 1 },
  setPage: (page) => set((store) => ({ productQuery: { ...store.productQuery, page } })),
  setCuisine: (cuisine) => set((store) => ({ productQuery: { ...store.productQuery, cuisine } })),
  setMenu: (menu) => set((store) => ({ productQuery: { ...store.productQuery, menu } })),
}));

export default useProductQueryStore;