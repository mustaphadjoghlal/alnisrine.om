import { useState, useEffect, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router";
import { Search, Filter } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import type { Product, Category } from "../types";
import { CAT_LABELS, CAT_DESC, INIT_SITE_INFO } from "../constants";
import { subscribeToProducts, subscribeToSiteInfo } from "../../lib/firestore";

export function CategoryPage() {
  const location = useLocation();
  const category = location.pathname.replace("/", "") as Category;
  const { addToCart, cart, updateCart } = useOutletContext<{
    addToCart: (p: Product) => void;
    cart: import("../types").CartItem[];
    updateCart: (id: string, qty: number) => void;
  }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [showInStock, setShowInStock] = useState(false);
  const [catImages, setCatImages] = useState<typeof INIT_SITE_INFO.categoryImages | null>(null);

  useEffect(() => {
    const unsub = subscribeToProducts(setProducts);
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = subscribeToSiteInfo((info) => {
      setCatImages(info.categoryImages ?? null);
    });
    return unsub;
  }, []);

  const filtered = useMemo(() => {
    return products
      .filter((p) => p.category === category)
      .filter((p) =>
        search
          ? p.name.includes(search) || p.description.includes(search)
          : true
      )
      .filter((p) => (showInStock ? p.inStock : true));
  }, [products, category, search, showInStock]);

  if (!category || !CAT_LABELS[category]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">الفئة غير موجودة</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section
        className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 px-4"
        style={catImages?.[category] ? {
          backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.9), rgba(30, 64, 175, 0.9)), url(${catImages[category]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } : undefined}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {CAT_LABELS[category]}
          </h1>
          <p className="text-xl text-blue-100">{CAT_DESC[category]}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            onClick={() => setShowInStock(!showInStock)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
              showInStock
                ? "bg-blue-700 text-white"
                : "bg-white border border-border hover:bg-secondary"
            }`}
          >
            <Filter size={18} />
            المتوفر فقط
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              لا توجد منتجات في هذه الفئة
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-muted-foreground">
              عرض {filtered.length} من المنتجات
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  cartQty={cart.find(i => i.product.id === p.id)?.quantity ?? 0}
                  onAdd={addToCart}
                  onUpdate={updateCart}
                  onView={setSelectedProduct}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={addToCart}
        />
      )}
    </div>
  );
}
