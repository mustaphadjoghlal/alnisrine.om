import { useEffect, useState } from "react";
import { db } from "../firebase";  // المسار الصحيح للخروج من مجلد hooks إلى src
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { Product, SiteSettings } from "../types";

// جلب المنتجات
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, "products");
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
      setProducts(data);
      setLoading(false);
    }, (error) => {
      console.error("خطأ في جلب المنتجات:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { products, loading };
}

// جلب إعدادات الموقع
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const settingsRef = collection(db, "settings");
    const unsubscribe = onSnapshot(settingsRef, (snapshot) => {
      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        setSettings({ id: docSnap.id, ...docSnap.data() } as SiteSettings);
      } else {
        console.warn("لا توجد إعدادات في Firestore");
        setSettings(null);
      }
      setLoading(false);
    }, (error) => {
      console.error("خطأ في جلب الإعدادات:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { settings, loading };
}

// دالة لتحديث منتج
export async function updateProduct(productId: string, data: Partial<Product>) {
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, data);
}
