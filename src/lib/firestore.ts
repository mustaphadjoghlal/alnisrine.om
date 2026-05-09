import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Product, SiteInfo } from "../app/types";
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

export async function saveSiteInfo(info: SiteInfo): Promise<void> {
  await setDoc(doc(db, "siteConfig", "info"), info);
}
