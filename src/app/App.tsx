import { useState, useMemo } from "react";
import {
  ShoppingCart, X, Plus, Minus, Trash2, Menu, Phone, MapPin, Mail,
  Search, LogOut, Lock, Home, Settings, ChevronRight, MessageCircle
} from "lucide-react";
import { useProducts, useSiteSettings } from "../hooks/useFirestore";
import { ProductCard } from "../components/ProductCard";
import { AdminPanel } from "../components/AdminPanel";
import { Product, CartItem, Category, View, SiteSettings } from "../types";

const CAT_LABELS: Record<Category, string> = {
  interior: "أصباغ داخلية",
  exterior: "أصباغ خارجية",
  materials: "مواد بناء",
};

const CAT_DESC: Record<Category, string> = {
  interior: "طلاء داخلي فاخر لكل غرفة",
  exterior: "حماية متكاملة للواجهات",
  materials: "أدوات ومواد بناء متنوعة",
};

export default function App() {
  // ─── State ────────────────────────────────────────────────────────────────
  const { products, loading: productsLoading } = useProducts();
  const { settings, loading: settingsLoading } = useSiteSettings();
  
  const [view, setView] = useState<View>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<Category | "all">("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ─── Computed Values ──────────────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    let result = products;
    if (filterCategory !== "all") {
      result = result.filter((p) => p.category === filterCategory);
    }
    if (search) {
      result = result.filter((p) =>
        p.name.includes(search) || p.description.includes(search)
      );
    }
    return result;
  }, [products, filterCategory, search]);

  const featured = useMemo(() => products.filter((p) => p.featured).slice(0, 8), [products]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = item.selectedSize.price + (item.selectedColor?.price || 0);
      return sum + price * item.quantity;
    }, 0);
  }, [cart]);

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleAddToCart = (product: Product, size, color?) => {
    const existingItem = cart.find(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize.size === size.size &&
        item.selectedColor?.color === color?.color
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1, selectedSize: size, selectedColor: color }]);
    }
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCheckAdmin = () => {
    if (adminPassword === "nasreen2024") {
      setShowAdminPanel(true);
      setAdminPassword("");
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  // ─── Loading State ────────────────────────────────────────────────────────
  if (productsLoading || settingsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Home size={24} className="text-primary" />
              <span className="font-bold text-lg hidden sm:inline">{settings?.companyName || "النسرين"}</span>
            </button>

            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 max-w-md">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg text-sm"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setView("cart")}
                className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg"
              >
                <Menu size={20} />
              </button>

              {/* Admin Button */}
              <button
                onClick={() => {
                  const pwd = prompt("أدخل كلمة المرور:");
                  if (pwd === "nasreen2024") {
                    setShowAdminPanel(true);
                  } else if (pwd) {
                    alert("كلمة المرور غير صحيحة");
                  }
                }}
                className="p-2 hover:bg-secondary rounded-lg text-muted-foreground"
              >
                <Settings size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col p-4 gap-2">
              <button
                onClick={() => {
                  setView("home");
                  setMobileMenuOpen(false);
                }}
                className="text-right px-4 py-2 hover:bg-secondary rounded"
              >
                الرئيسية
              </button>
              {(["interior", "exterior", "materials"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setView(cat);
                    setFilterCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className="text-right px-4 py-2 hover:bg-secondary rounded"
                >
                  {CAT_LABELS[cat]}
                </button>
              ))}
              <button
                onClick={() => {
                  setView("about");
                  setMobileMenuOpen(false);
                }}
                className="text-right px-4 py-2 hover:bg-secondary rounded"
              >
                عن الشركة
              </button>
              <button
                onClick={() => {
                  setView("contact");
                  setMobileMenuOpen(false);
                }}
                className="text-right px-4 py-2 hover:bg-secondary rounded"
              >
                اتصل بنا
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Home View */}
        {view === "home" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="rounded-lg overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">مرحباً بك في {settings?.companyName || "النسرين"}</h1>
                <p className="text-lg text-muted-foreground mb-6">{settings?.storyDescription || "أفضل الأصباغ والمواد للبناء"}</p>
                <button
                  onClick={() => {
                    setView("interior");
                    setFilterCategory("interior");
                  }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90"
                >
                  تسوق الآن
                </button>
              </div>
            </section>

            {/* Featured Products */}
            {featured.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-8">المنتجات المميزة</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {featured.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAdd={handleAddToCart}
                      onView={(p) => {
                        setSelectedProduct(p);
                        setView("home");
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Categories */}
            <section>
              <h2 className="text-3xl font-bold mb-8">الفئات</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(["interior", "exterior", "materials"] as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setView(cat);
                      setFilterCategory(cat);
                    }}
                    className="group relative rounded-lg overflow-hidden h-48 md:h-64"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-secondary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
                      <h3 className="text-2xl font-bold mb-2">{CAT_LABELS[cat]}</h3>
                      <p className="text-sm opacity-90">{CAT_DESC[cat]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Category Views */}
        {(["interior", "exterior", "materials"] as Category[]).includes(view as Category) && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{CAT_LABELS[view as Category]}</h1>
              <p className="text-muted-foreground mb-8">{CAT_DESC[view as Category]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={handleAddToCart}
                  onView={setSelectedProduct}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">لا توجد منتجات في هذه الفئة</p>
              </div>
            )}
          </div>
        )}

        {/* Cart View */}
        {view === "cart" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">سلتك فارغة</p>
                <button
                  onClick={() => setView("home")}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
                >
                  العودة للتسوق
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.selectedSize.size}</p>
                        {item.selectedColor && (
                          <p className="text-sm text-muted-foreground">{item.selectedColor.name}</p>
                        )}
                        <p className="font-semibold mt-2">
                          {(item.selectedSize.price + (item.selectedColor?.price || 0)).toFixed(2)} ر.ع
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setCart(
                                cart.map((c, i) =>
                                  i === index
                                    ? { ...c, quantity: Math.max(1, c.quantity - 1) }
                                    : c
                                )
                              )
                            }
                            className="p-1 hover:bg-secondary rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              setCart(
                                cart.map((c, i) =>
                                  i === index ? { ...c, quantity: c.quantity + 1 } : c
                                )
                              )
                            }
                            className="p-1 hover:bg-secondary rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(index)}
                          className="text-destructive hover:bg-destructive/10 p-1 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">الإجمالي:</span>
                    <span className="text-2xl font-bold text-primary">{cartTotal.toFixed(2)} ر.ع</span>
                  </div>
                  <button
                    onClick={() => {
                      alert("شكراً لطلبك! سيتم التواصل معك قريباً.");
                      setCart([]);
                      setView("home");
                    }}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90"
                  >
                    إتمام الطلب
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* About View */}
        {view === "about" && (
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h1 className="text-4xl font-bold mb-6">{settings?.aboutTitle || "عن الشركة"}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {settings?.aboutDescription || "نحن نقدم أفضل المنتجات والخدمات"}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">{settings?.storyTitle || "قصتنا"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {settings?.storyDescription || "بدأنا رحلتنا بحلم واحد..."}
              </p>
            </section>
          </div>
        )}

        {/* Contact View */}
        {view === "contact" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold mb-8">اتصل بنا</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-border rounded-lg text-center">
                <Phone size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">الهاتف</h3>
                <a href={`tel:${settings?.contactPhone}`} className="text-primary hover:underline">
                  {settings?.contactPhone}
                </a>
              </div>

              <div className="p-6 border border-border rounded-lg text-center">
                <Mail size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
                <a href={`mailto:${settings?.contactEmail}`} className="text-primary hover:underline">
                  {settings?.contactEmail}
                </a>
              </div>

              <div className="p-6 border border-border rounded-lg text-center">
                <MapPin size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">العنوان</h3>
                <p className="text-muted-foreground">{settings?.contactAddress}</p>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-semibold mb-4">أرسل لنا رسالة</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="اسمك"
                  className="w-full px-4 py-2 border border-border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-2 border border-border rounded-lg"
                />
                <textarea
                  placeholder="رسالتك"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90"
                >
                  إرسال
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Admin Panel */}
      {showAdminPanel && (
        <AdminPanel
          settings={settings}
          products={products}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-secondary border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 {settings?.companyName || "النسرين"}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
