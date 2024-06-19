export interface CreateOrderItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

export interface CreateOrder {
  items: CreateOrderItem[];
  items_count: number;
  total: number;
}

// from database

export interface Order extends CreateOrder {
  _id: string;
  created_at: number;
}