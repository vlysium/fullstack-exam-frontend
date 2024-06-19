import { Product } from "./Product";

export interface BasketItem {
  product: Product;
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  total: number;
  items_count: number;
}