import { Cuisine, Menu } from "./Category";

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
    cuisine: Cuisine;
    menu: Menu;
  };
}