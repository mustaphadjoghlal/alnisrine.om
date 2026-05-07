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

// Review System
export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  images: string[];
  date: string;
}

// Order Tracking
export type OrderStatus = "pending" | "processing" | "shipped" | "completed";

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
  date: string;
  notes?: string;
}

// Admin Management
export type AdminRole = "owner" | "manager" | "staff";

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  permissions: {
    canManageProducts: boolean;
    canViewOrders: boolean;
    canViewAnalytics: boolean;
    canManageAdmins: boolean;
  };
  createdAt: string;
}

// Inventory & Analytics
export interface InventoryAlert {
  productId: string;
  productName: string;
  currentStock: number;
  threshold: number;
  lastAlertDate: string;
}

