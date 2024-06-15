export interface BasketItem {
  product: {
    _id: string;
    name: string;
    price: number;
    image: {
      src: string;
      alt: string;
    };
  };
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  total: number;
}