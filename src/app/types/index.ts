// ─── Types ────────────────────────────────────────────────────────────────────
export type Category = "interior" | "exterior" | "materials";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  subcategory: string;
  colors: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  unit: string;
  size: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
