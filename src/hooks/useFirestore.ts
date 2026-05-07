import { useEffect, useState } from "react";
import { Product, SiteSettings } from "../types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // مؤقتاً: بيانات تجريبية ليتحرك الموقع
    setProducts([]);
    setLoading(false);
  }, []);

  return { products, loading };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSettings(null);
    setLoading(false);
  }, []);

  return { settings, loading };
}
