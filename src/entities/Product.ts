export interface Product {
  _id:  string;
  name: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  image: { 
    src: string;
    alt: string;
  };
  category: {
    cuisine: string[];
    menu: string[];
  };
}