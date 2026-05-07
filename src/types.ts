// ─── Product Types ────────────────────────────────────────────────────────────
export type Category = "interior" | "exterior" | "materials";
export type View = "home" | Category | "about" | "contact" | "dashboard";

export interface SizeOption {
  size: string;
  price: number;
  unit: string;
}

export interface ColorOption {
  color: string; // hex color
  name: string;
  price: number; // سعر إضافي للون (اختياري)
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  subcategory: string;
  sizes: SizeOption[]; // قائمة الأحجام والأسعار
  colors: ColorOption[]; // قائمة الألوان والأسعار
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: SizeOption;
  selectedColor?: ColorOption;
}

// ─── Site Settings Types ──────────────────────────────────────────────────────
export interface SiteSettings {
  logo: string; // URL الشعار
  companyName: string;
  aboutTitle: string;
  aboutDescription: string;
  storyTitle: string;
  storyDescription: string;
  storyImage: string;
  heroImage: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  socialLinks?: {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface CategoryInfo {
  name: string;
  description: string;
  image: string;
}
