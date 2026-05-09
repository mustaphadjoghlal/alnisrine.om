import { useState, useEffect } from "react";
import {
  LogOut,
  Lock,
  PlusCircle,
  Edit2,
  Trash2,
  BarChart2,
  Package,
  Eye,
  Info,
  Save,
} from "lucide-react";
import { ProductForm } from "../components/ProductForm";
import type { Product, SiteInfo } from "../types";
import { INIT_PRODUCTS, ADMIN_PASS, CAT_LABELS, INIT_SITE_INFO, SITE_INFO_KEY } from "../constants";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";

type Tab = "products" | "siteinfo";

export function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("products");

  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [siteInfo, setSiteInfo] = useState<SiteInfo>(INIT_SITE_INFO);
  const [siteInfoSaved, setSiteInfoSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : INIT_PRODUCTS);
    const savedInfo = localStorage.getItem(SITE_INFO_KEY);
    setSiteInfo(savedInfo ? JSON.parse(savedInfo) : INIT_SITE_INFO);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("كلمة المرور غير صحيحة");
    }
  };

  const handleSave = (p: Product) => {
    setProducts((prev) =>
      editingProduct
        ? prev.map((x) => (x.id === p.id ? p : x))
        : [...prev, { ...p, id: Date.now().toString() }]
    );
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (p: Product) => {
    setEditingProduct(p);
    setShowForm(true);
  };

  const handleSaveSiteInfo = () => {
    localStorage.setItem(SITE_INFO_KEY, JSON.stringify(siteInfo));
    setSiteInfoSaved(true);
    setTimeout(() => setSiteInfoSaved(false), 2500);
  };

  const setSiteField = (key: keyof SiteInfo, val: string) =>
    setSiteInfo((prev) => ({ ...prev, [key]: val }));

  const stats = {
    total: products.length,
    inStock: products.filter((p) => p.inStock).length,
    outOfStock: products.filter((p) => !p.inStock).length,
    featured: products.filter((p) => p.featured).length,
  };

  if (!loggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-4"
        dir="rtl"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="النسرين"
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
            <h1 className="text-2xl font-black text-foreground">لوحة التحكم</h1>
            <p className="text-sm text-muted-foreground mt-2">
              محل النسرين للأصباغ ومواد البناء
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">كلمة المرور</label>
              <div className="relative">
                <Lock
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="أدخل كلمة المرور"
                />
              </div>
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30" dir="rtl">
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="النسرين"
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h1 className="text-2xl font-black">لوحة التحكم</h1>
                <p className="text-sm text-blue-100">محل النسرين للأصباغ ومواد البناء</p>
              </div>
            </div>
            <button
              onClick={() => setLoggedIn(false)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              تسجيل الخروج
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setTab("products")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${tab === "products" ? "bg-white text-blue-700" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              <Package size={16} />
              إدارة المنتجات
            </button>
            <button
              onClick={() => setTab("siteinfo")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${tab === "siteinfo" ? "bg-white text-blue-700" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              <Info size={16} />
              معلومات الموقع
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {tab === "products" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي المنتجات</p>
                    <p className="text-3xl font-black text-foreground">{stats.total}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                    <Package size={24} />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">متوفر</p>
                    <p className="text-3xl font-black text-green-600">{stats.inStock}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <BarChart2 size={24} />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">نفد المخزون</p>
                    <p className="text-3xl font-black text-red-600">{stats.outOfStock}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <Eye size={24} />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">منتجات مميزة</p>
                    <p className="text-3xl font-black text-amber-600">{stats.featured}</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                    <BarChart2 size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-foreground">إدارة المنتجات</h2>
                <button
                  onClick={() => { setEditingProduct(null); setShowForm(true); }}
                  className="bg-blue-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                  <PlusCircle size={18} />
                  إضافة منتج جديد
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right p-3 text-sm font-bold">الصورة</th>
                      <th className="text-right p-3 text-sm font-bold">الاسم</th>
                      <th className="text-right p-3 text-sm font-bold">الفئة</th>
                      <th className="text-right p-3 text-sm font-bold">الأحجام</th>
                      <th className="text-right p-3 text-sm font-bold">المخزون</th>
                      <th className="text-right p-3 text-sm font-bold">مميز</th>
                      <th className="text-center p-3 text-sm font-bold">إجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="p-3">
                          <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                        </td>
                        <td className="p-3 text-sm font-semibold">{p.name}</td>
                        <td className="p-3 text-sm text-muted-foreground">{CAT_LABELS[p.category]}</td>
                        <td className="p-3">
                          <div className="flex flex-col gap-0.5">
                            {p.sizes.slice(0, 2).map((s, i) => (
                              <span key={i} className="text-xs text-muted-foreground">
                                {s.label} — <span className="font-semibold text-blue-700">{s.price.toFixed(3)} ر.ع</span>
                              </span>
                            ))}
                            {p.sizes.length > 2 && (
                              <span className="text-xs text-muted-foreground">+{p.sizes.length - 2} أكثر</span>
                            )}
                            {p.sizes.length === 0 && (
                              <span className="text-xs text-muted-foreground">—</span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {p.inStock ? "متوفر" : "نفد"}
                          </span>
                        </td>
                        <td className="p-3">
                          {p.featured && (
                            <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">مميز</span>
                          )}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEdit(p)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(p.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {tab === "siteinfo" && (
          <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-foreground">معلومات الموقع</h2>
              {siteInfoSaved && (
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  ✓ تم الحفظ بنجاح
                </span>
              )}
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">اسم المتجر</label>
                <input
                  value={siteInfo.storeName}
                  onChange={(e) => setSiteField("storeName", e.target.value)}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">رسالتنا / رؤيتنا</label>
                <textarea
                  value={siteInfo.mission}
                  onChange={(e) => setSiteField("mission", e.target.value)}
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">نبذة عنا</label>
                <textarea
                  value={siteInfo.about}
                  onChange={(e) => setSiteField("about", e.target.value)}
                  rows={5}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">رقم واتساب</label>
                  <input
                    value={siteInfo.whatsappNumber}
                    onChange={(e) => setSiteField("whatsappNumber", e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    dir="ltr"
                    placeholder="968XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">رقم الهاتف</label>
                  <input
                    value={siteInfo.phone}
                    onChange={(e) => setSiteField("phone", e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    dir="ltr"
                    placeholder="+968 XXXX XXXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">البريد الإلكتروني</label>
                  <input
                    value={siteInfo.email}
                    onChange={(e) => setSiteField("email", e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    dir="ltr"
                    placeholder="info@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">العنوان</label>
                  <input
                    value={siteInfo.address}
                    onChange={(e) => setSiteField("address", e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">ساعات العمل</label>
                <input
                  value={siteInfo.workingHours}
                  onChange={(e) => setSiteField("workingHours", e.target.value)}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  placeholder="السبت - الخميس: 8:00 ص - 8:00 م"
                />
              </div>
            </div>

            <button
              onClick={handleSaveSiteInfo}
              className="mt-6 w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              حفظ معلومات الموقع
            </button>
          </div>
        )}
      </div>

      {showForm && (
        <ProductForm
          initial={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}
