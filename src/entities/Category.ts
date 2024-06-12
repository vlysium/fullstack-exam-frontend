export interface Cuisine {
  name: string
  | "Scandinavian"
  | "British & Irish"
  | "Mediterranean"
  | "Eastern European"
  | "Ottoman"
  | "East Asian"
  | "South Asian"
  | "North American"
  | "Latin American";

  slug: string
  | "scandinavian"
  | "british-irish"
  | "mediterranean"
  | "eastern-european"
  | "ottoman"
  | "east-asian"
  | "south-asian"
  | "north-american"
  | "latin-american";
}

export interface Menu {
  name: string
  | "Soups"
  | "Salads"
  | "Noodles"
  | "Pasta"
  | "Bread"
  | "Rice"
  | "Meat"
  | "Fried"
  | "Grilled"
  | "Seafood"
  | "Desserts"
  | "Beverages"
  | "Alcohol"
  | "Snacks";

  slug: string
  | "soups"
  | "salads"
  | "noodles"
  | "pasta"
  | "bread"
  | "rice"
  | "meat"
  | "fried"
  | "grilled"
  | "seafood"
  | "desserts"
  | "beverages"
  | "alcohol"
  | "snacks";
}