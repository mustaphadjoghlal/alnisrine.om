import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { Product, SiteSettings } from "../types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      console.error("db is not initialized");
      setLoading(false);
      return;
    }
    const productsRef = collection(db, "products");
    const unsubscribe = onSnapshot(productsRef, 
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
        setProducts(data);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore error:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return { products, loading };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const settingsRef = collection(db, "settings");
    const unsubscribe = onSnapshot(settingsRef, (snapshot) => {
      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        setSettings({ id: docSnap.id, ...docSnap.data() } as SiteSettings);
      } else {
        setSettings(null);
      }
      setLoading(false);
    }, (error) => {
      console.error(error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { settings, loading };
}

export async function updateProduct(productId: string, data: Partial<Product>) {
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, data);
}
