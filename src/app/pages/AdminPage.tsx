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
} from "lucide-react";
import { ProductForm } from "../components/ProductForm";
import type { Product } from "../types";
import { INIT_PRODUCTS, ADMIN_PASS, CAT_LABELS } from "../constants";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";

export function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : INIT_PRODUCTS);
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
            <h1 className="text-2xl font-black text-foreground">
              لوحة التحكم
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              محل النسرين للأصباغ ومواد البناء
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                كلمة المرور
              </label>
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
              {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
              )}
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
                <p className="text-sm text-blue-100">
                  محل النسرين للأصباغ ومواد البناء
                </p>
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
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  إجمالي المنتجات
                </p>
                <p className="text-3xl font-black text-foreground">
                  {stats.total}
                </p>
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
                <p className="text-3xl font-black text-green-600">
                  {stats.inStock}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <BarChart2 size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  نفد المخزون
                </p>
                <p className="text-3xl font-black text-red-600">
                  {stats.outOfStock}
                </p>
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
                <p className="text-3xl font-black text-amber-600">
                  {stats.featured}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                <BarChart2 size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-foreground">
              إدارة المنتجات
            </h2>
            <button
              onClick={() => {
                setEditingProduct(null);
                setShowForm(true);
              }}
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
                  <th className="text-right p-3 text-sm font-bold">السعر</th>
                  <th className="text-right p-3 text-sm font-bold">المخزون</th>
                  <th className="text-right p-3 text-sm font-bold">مميز</th>
                  <th className="text-center p-3 text-sm font-bold">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-border hover:bg-secondary/50">
                    <td className="p-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="p-3 text-sm font-semibold">{p.name}</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {CAT_LABELS[p.category]}
                    </td>
                    <td className="p-3 text-sm font-bold text-blue-700">
                      {p.price.toFixed(3)} ر.ع
                    </td>
                    <td className="p-3">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {p.inStock ? "متوفر" : "نفد"}
                      </span>
                    </td>
                    <td className="p-3">
                      {p.featured && (
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                          مميز
                        </span>
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
