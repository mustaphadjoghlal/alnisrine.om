import { useState, useEffect } from "react";
import {
  LogOut,
  Lock,
  Mail,
  PlusCircle,
  Edit2,
  Trash2,
  BarChart2,
  Package,
  Eye,
  Info,
  Save,
  Loader2,
} from "lucide-react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { subscribeToProducts, saveProduct, deleteProduct, subscribeToSiteInfo, saveSiteInfo } from "../../lib/firestore";
import { uploadCategoryImage } from "../../lib/storage";
import { ProductForm } from "../components/ProductForm";
import type { Product, SiteInfo } from "../types";
import { CAT_LABELS, INIT_SITE_INFO } from "../constants";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";

type Tab = "products" | "siteinfo";

export function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [tab, setTab] = useState<Tab>("products");

  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [siteInfo, setSiteInfo] = useState<SiteInfo>(INIT_SITE_INFO);
  const [siteInfoSaved, setSiteInfoSaved] = useState(false);
  const [savingSiteInfo, setSavingSiteInfo] = useState(false);
  const [uploadingCat, setUploadingCat] = useState<string | null>(null);
  // Track Firebase auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  // Subscribe to products from Firestore when logged in
  useEffect(() => {
    if (!loggedIn) return;
    const unsub = subscribeToProducts(setProducts);
    return unsub;
  }, [loggedIn]);

  // Subscribe to site info from Firestore when logged in
  useEffect(() => {
    if (!loggedIn) return;
    const unsub = subscribeToSiteInfo(setSiteInfo);
    return unsub;
  }, [loggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSave = async (p: Product) => {
    const productToSave = editingProduct
      ? p
      : { ...p, id: Date.now().toString() };
    await saveProduct(productToSave);
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      await deleteProduct(id);
    }
  };

  const handleEdit = (p: Product) => {
    setEditingProduct(p);
    setShowForm(true);
  };

  const handleSaveSiteInfo = async () => {
    setSavingSiteInfo(true);
    await saveSiteInfo(siteInfo);
    setSavingSiteInfo(false);
    setSiteInfoSaved(true);
    setTimeout(() => setSiteInfoSaved(false), 2500);
  };

  const setSiteField = (key: keyof SiteInfo, val: string) =>
    setSiteInfo((prev) => ({ ...prev, [key]: val }));

  const handleCategoryImageUpload = async (cat: "interior" | "exterior" | "materials", file: File) => {
    setUploadingCat(cat);
    try {
      const url = await uploadCategoryImage(file, cat);
      const updated = {
        ...siteInfo,
        categoryImages: { ...siteInfo.categoryImages, [cat]: url },
      };
      setSiteInfo(updated);
      await saveSiteInfo(updated);
    } catch (e) {
      console.error("فشل رفع الصورة:", e);
      alert("فشل رفع الصورة. تحقق من إعدادات Firebase Storage.");
    } finally {
      setUploadingCat(null);
    }
  };

  const stats = {
    total: products.length,
    inStock: products.filter((p) => p.inStock).length,
    outOfStock: products.filter((p) => !p.inStock).length,
    featured: products.filter((p) => p.featured).length,
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <Loader2 className="w-10 h-10 text-white animate-spin" />
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img src={logo} alt="النسرين" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h1 className="text-2xl font-black text-foreground">لوحة التحكم</h1>
            <p className="text-sm text-muted-foreground mt-2">محل النسرين للأصباغ ومواد البناء</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pr-10 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="admin@example.com"
                  dir="ltr"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="أدخل كلمة المرور"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loginLoading ? <Loader2 size={18} className="animate-spin" /> : null}
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
              <img src={logo} alt="النسرين" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
              <div>
                <h1 className="text-2xl font-black">لوحة التحكم</h1>
                <p className="text-sm text-blue-100">محل النسرين للأصباغ ومواد البناء</p>
              </div>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
              <LogOut size={18} />
              تسجيل الخروج
            </button>
          </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "إجمالي المنتجات", val: stats.total, color: "blue", icon: <Package size={24} /> },
                { label: "متوفر", val: stats.inStock, color: "green", icon: <BarChart2 size={24} /> },
                { label: "نفد المخزون", val: stats.outOfStock, color: "red", icon: <Eye size={24} /> },
                { label: "منتجات مميزة", val: stats.featured, color: "amber", icon: <BarChart2 size={24} /> },
              ].map(({ label, val, color, icon }) => (
                <div key={label} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{label}</p>
                      <p className={`text-3xl font-black text-${color}-600`}>{val}</p>
                    </div>
                    <div className={`w-12 h-12 bg-${color}-100 text-${color}-600 rounded-full flex items-center justify-center`}>
                      {icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
                            {p.sizes.length > 2 && <span className="text-xs text-muted-foreground">+{p.sizes.length - 2} أكثر</span>}
                            {p.sizes.length === 0 && <span className="text-xs text-muted-foreground">—</span>}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {p.inStock ? "متوفر" : "نفد"}
                          </span>
                        </td>
                        <td className="p-3">
                          {p.featured && <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">مميز</span>}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-2">
                            <button onClick={() => handleEdit(p)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit2 size={16} />
                            </button>
                            <button onClick={() => handleDelete(p.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ تم الحفظ بنجاح</span>
              )}
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">اسم المتجر</label>
                <input value={siteInfo.storeName} onChange={(e) => setSiteField("storeName", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">رسالتنا / رؤيتنا</label>
                <textarea value={siteInfo.mission} onChange={(e) => setSiteField("mission", e.target.value)} rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">نبذة عنا</label>
                <textarea value={siteInfo.about} onChange={(e) => setSiteField("about", e.target.value)} rows={5} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">رقم واتساب</label>
                  <input value={siteInfo.whatsappNumber} onChange={(e) => setSiteField("whatsappNumber", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" dir="ltr" placeholder="968XXXXXXXX" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">رقم الهاتف</label>
                  <input value={siteInfo.phone} onChange={(e) => setSiteField("phone", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" dir="ltr" placeholder="+968 XXXX XXXX" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">البريد الإلكتروني</label>
                  <input value={siteInfo.email} onChange={(e) => setSiteField("email", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" dir="ltr" placeholder="info@example.com" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">العنوان</label>
                  <input value={siteInfo.address} onChange={(e) => setSiteField("address", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">ساعات العمل</label>
                <input value={siteInfo.workingHours} onChange={(e) => setSiteField("workingHours", e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30" placeholder="السبت - الخميس: 8:00 ص - 8:00 م" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">صور التصنيفات</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(["interior", "exterior", "materials"] as const).map((cat) => {
                    const labels = { interior: "أصباغ داخلية", exterior: "أصباغ خارجية", materials: "مواد بناء" };
                    return (
                      <div key={cat} className="border border-border rounded-lg overflow-hidden">
                        <img
                          src={siteInfo.categoryImages?.[cat]}
                          alt={labels[cat]}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-2">
                          <p className="text-xs font-semibold text-center mb-2">{labels[cat]}</p>
                          <label className="flex items-center justify-center gap-1 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold py-1.5 rounded-lg transition-colors">
                            {uploadingCat === cat ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                            تغيير الصورة
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleCategoryImageUpload(cat, file);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={handleSaveSiteInfo}
              disabled={savingSiteInfo}
              className="mt-6 w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {savingSiteInfo ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
              حفظ معلومات الموقع
            </button>
          </div>
        )}
      </div>

      {showForm && (
        <ProductForm
          initial={editingProduct}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingProduct(null); }}
        />
      )}
    </div>
  );
}
