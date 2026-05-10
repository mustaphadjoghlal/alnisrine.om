import {
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import type {
  Product,
  SiteInfo,
  ServiceRequest,
  SaleRecord,
  PurchaseRecord,
  BranchStock,
  AuditEntry,
} from "../app/types";
import { INIT_SITE_INFO } from "../app/constants";

const PRODUCTS_COL = "products";

export function subscribeToProducts(callback: (products: Product[]) => void) {
  return onSnapshot(collection(db, PRODUCTS_COL), (snap) => {
    const products = snap.docs.map((d) => d.data() as Product);
    callback(products);
  });
}

export async function saveProduct(p: Product): Promise<void> {
  await setDoc(doc(db, PRODUCTS_COL, p.id), p);
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, PRODUCTS_COL, id));
}

export function subscribeToSiteInfo(callback: (info: SiteInfo) => void) {
  return onSnapshot(doc(db, "siteConfig", "info"), (snap) => {
    callback(snap.exists() ? (snap.data() as SiteInfo) : INIT_SITE_INFO);
  });
}

export async function saveSiteInfo(info: Omit<SiteInfo, "categoryImages">): Promise<void> {
  await setDoc(doc(db, "siteConfig", "info"), info, { merge: true });
}

export async function saveCategoryImage(cat: string, url: string): Promise<void> {
  await updateDoc(doc(db, "siteConfig", "info"), { [`categoryImages.${cat}`]: url });
}

export async function saveThemeColors(colors: Record<string, string>): Promise<void> {
  await setDoc(doc(db, "siteConfig", "theme"), colors);
}

export function subscribeToThemeColors(callback: (colors: Record<string, string> | null) => void) {
  return onSnapshot(doc(db, "siteConfig", "theme"), (snap) => {
    callback(snap.exists() ? (snap.data() as Record<string, string>) : null);
  });
}

// ─── Service Requests ─────────────────────────────────────────────────────────
export function subscribeToServiceRequests(callback: (reqs: ServiceRequest[]) => void) {
  const q = query(collection(db, "serviceRequests"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() } as ServiceRequest)));
  });
}

export async function addServiceRequest(req: Omit<ServiceRequest, "id">): Promise<void> {
  await addDoc(collection(db, "serviceRequests"), req);
}

export async function updateServiceRequestStatus(id: string, status: ServiceRequest["status"]): Promise<void> {
  await updateDoc(doc(db, "serviceRequests", id), { status });
}

// ─── Sales ────────────────────────────────────────────────────────────────────
export function subscribeToSales(callback: (sales: SaleRecord[]) => void) {
  const q = query(collection(db, "sales"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() } as SaleRecord)));
  });
}

export async function addSale(sale: Omit<SaleRecord, "id">): Promise<void> {
  await addDoc(collection(db, "sales"), sale);
}

export async function deleteSale(id: string): Promise<void> {
  await deleteDoc(doc(db, "sales", id));
}

// ─── Purchases ────────────────────────────────────────────────────────────────
export function subscribeToPurchases(callback: (purchases: PurchaseRecord[]) => void) {
  const q = query(collection(db, "purchases"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() } as PurchaseRecord)));
  });
}

export async function addPurchase(purchase: Omit<PurchaseRecord, "id">): Promise<void> {
  await addDoc(collection(db, "purchases"), purchase);
}

export async function deletePurchase(id: string): Promise<void> {
  await deleteDoc(doc(db, "purchases", id));
}

// ─── Branch Inventory ─────────────────────────────────────────────────────────
export function subscribeToBranchStocks(callback: (stocks: BranchStock[]) => void) {
  return onSnapshot(collection(db, "branchStocks"), (snap) => {
    callback(snap.docs.map((d) => ({ branchId: d.id, ...d.data() } as BranchStock)));
  });
}

export async function saveBranchStock(stock: BranchStock): Promise<void> {
  const { branchId, ...rest } = stock;
  await setDoc(doc(db, "branchStocks", branchId), rest);
}

// ─── Audit Log ────────────────────────────────────────────────────────────────
export function subscribeToAuditLog(callback: (entries: AuditEntry[]) => void) {
  const q = query(collection(db, "auditLog"), orderBy("timestamp", "desc"));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() } as AuditEntry)));
  });
}

export async function addAuditEntry(entry: Omit<AuditEntry, "id">): Promise<void> {
  await addDoc(collection(db, "auditLog"), entry);
}

export function nowISO(): string {
  return new Date().toISOString();
}
