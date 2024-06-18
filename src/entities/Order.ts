export interface OrderItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

export interface Order {
  items: OrderItem[];
  total: number;
}