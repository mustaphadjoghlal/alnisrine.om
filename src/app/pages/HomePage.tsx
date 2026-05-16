import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import { ChevronRight, Star, Package, Shield, TrendingUp } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { PaintCalculator } from "../components/PaintCalculator";
import { CraftsmanRequest } from "../components/CraftsmanRequest";
import type { Product } from "../types";
import { CAT_LABELS, INIT_SITE_INFO } from "../constants";
import { subscribeToProducts, subscribeToSiteInfo } from "../../lib/firestore";

export function HomePage() {
  const { addToCart, cart, updateCart } = useOutletContext<{
    addToCart: (p: Product) => void;
    cart: import("../types").CartItem[];
    updateCart: (id: string, qty: number) => void;
  }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                محل النسرين
                <br />
                <span className="text-blue-200">للأصباغ ومواد البناء</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                نوفر لكم أفضل أصباغ جوتن العالمية ومواد البناء عالية الجودة في
                سلطنة عُمان. جودة مضمونة وخدمة متميزة لتحقيق أحلامكم.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/interior"
                  className="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
                >
                  تسوق الآن
                  <ChevronRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="bg-blue-600/30 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-600/40 transition-all border border-white/20 flex items-center gap-2"
                >
                  من نحن
                </Link>
              </div>
            </div>
            {catImages && (
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(catImages).map(([key, img]) => img ? (
                    <img
                      key={key}
                      src={img}
                      alt={CAT_LABELS[key as keyof typeof CAT_LABELS]}
                      className="rounded-2xl shadow-2xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div key={key} className="rounded-2xl shadow-2xl h-48 w-full bg-blue-600/30" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">جودة عالمية</h3>
              <p className="text-sm text-muted-foreground">
                أصباغ جوتن الأصلية بأعلى معايير الجودة
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">توصيل سريع</h3>
              <p className="text-sm text-muted-foreground">
                خدمة توصيل سريعة لجميع أنحاء سلطنة عُمان
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">ضمان الجودة</h3>
              <p className="text-sm text-muted-foreground">
                منتجات أصلية 100% مع ضمان الشركة المصنعة
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-2">
                المنتجات الأكثر مبيعاً
              </h2>
              <p className="text-muted-foreground">
                منتجاتنا المميزة الأكثر طلباً من عملائنا
              </p>
            </div>
            <Link
              to="/interior"
              className="hidden md:flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              عرض الكل
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
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
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center text-foreground mb-12">
            تسوق حسب الفئة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(CAT_LABELS) as Array<keyof typeof CAT_LABELS>).map(
              (cat) => (
                <Link
                  key={cat}
                  to={`/${cat}`}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] relative bg-blue-800">
                    {catImages?.[cat] && (
                      <img
                        src={catImages[cat]}
                        alt={CAT_LABELS[cat]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-black mb-2">
                      {CAT_LABELS[cat]}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <span>تسوق الآن</span>
                      <ChevronRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <CraftsmanRequest />

      <PaintCalculator />

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
