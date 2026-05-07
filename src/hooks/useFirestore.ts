import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Product, SiteSettings } from '../types';

// جلب جميع المنتجات
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'products'),
      (snapshot) => {
        try {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Product[];
          setProducts(data);
          setError(null);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'خطأ في جلب المنتجات');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { products, loading, error };
}

// جلب إعدادات الموقع
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, 'settings', 'siteSettings'),
      (snapshot) => {
        try {
          if (snapshot.exists()) {
            setSettings(snapshot.data() as SiteSettings);
            setError(null);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'خطأ في جلب الإعدادات');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { settings, loading, error };
}

// جلب منتج واحد
export function useProduct(productId: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const unsubscribe = onSnapshot(
      doc(db, 'products', productId),
      (snapshot) => {
        try {
          if (snapshot.exists()) {
            setProduct({ id: snapshot.id, ...snapshot.data() } as Product);
            setError(null);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'خطأ في جلب المنتج');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [productId]);

  return { product, loading, error };
}
