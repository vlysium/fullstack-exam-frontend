import { create } from "zustand";

export interface OrderQuery {
  page: number;
}

interface OrderQueryStore {
  orderQuery: OrderQuery;
  setPage: (page: number) => void;
}

const useOrderQueryStore = create<OrderQueryStore>((set) => ({
  orderQuery: { page: 1 },
  setPage: (page) => set((store) => ({ orderQuery: { ...store.orderQuery, page } })),
}));

export default useOrderQueryStore;