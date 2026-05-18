// ─── Types ────────────────────────────────────────────────────────────────────
export type Category = "interior" | "exterior" | "materials";

export interface SizeOption {
  label: string;
  price: number;
}

export interface SiteInfo {
  storeName: string;
  mission: string;
  about: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  categoryImages: {
    interior: string;
    exterior: string;
    materials: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  subcategory: string;
  sizes: SizeOption[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: SizeOption;
}

// Service Requests
export type ServiceType = "painter" | "other";
export type ServiceStatus = "pending" | "contacted" | "done";

export interface ServiceRequest {
  id: string;
  name: string;
  phone: string;
  serviceType: ServiceType;
  serviceDesc: string;
  location: string;
  notes: string;
  createdAt: string;
  status: ServiceStatus;
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

// ─── Branch ───────────────────────────────────────────────────────────────────
export interface Branch { id: string; ar: string; en: string; }

// ─── Accountant / Finance ──────────────────────────────────────────────────────
export interface SaleItem {
  name: string;
  qty: number;
  unit: string;
  price: number;
}

export interface SaleRecord {
  id: string;
  date: string;
  customerName: string;
  customerPhone: string;
  branch: string;
  salesperson: string;
  items: SaleItem[];
  total: number;
  notes: string;
  createdBy: string;
  createdByEmail: string;
  createdAt: string;
}

export interface PurchaseRecord {
  id: string;
  date: string;
  supplier: string;
  branch: string;
  items: { name: string; qty: number; unit: string; cost: number }[];
  total: number;
  notes: string;
  createdBy: string;
  createdByEmail: string;
  createdAt: string;
}

export interface InventoryItem {
  name: string;
  quantity: number;
  unit: string;
}

export interface BranchStock {
  branchId: string;
  items: InventoryItem[];
  updatedAt: string;
  updatedBy: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  entity: string;
  details: string;
  byEmail: string;
  byRole: "manager" | "accountant";
}
