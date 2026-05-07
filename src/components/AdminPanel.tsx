import { useState } from "react";
import { Settings, Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { SiteSettings, Product, SizeOption, ColorOption } from "../types";
import { db } from "../firebase";
import { doc, setDoc, deleteDoc, collection, addDoc } from "firebase/firestore";

interface AdminPanelProps {
  settings: SiteSettings | null;
  products: Product[];
  onClose: () => void;
}

export function AdminPanel({ settings, products, onClose }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<"settings" | "products">("settings");
  const [editingSettings, setEditingSettings] = useState<SiteSettings>(
    settings || {
      logo: "",
      companyName: "النسرين",
      aboutTitle: "",
      aboutDescription: "",
      storyTitle: "",
      storyDescription: "",
      storyImage: "",
      heroImage: "",
      contactPhone: "",
      contactEmail: "",
      contactAddress: "",
    }
  );
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  // حفظ إعدادات الموقع
  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "settings", "siteSettings"), editingSettings);
      alert("تم حفظ الإعدادات بنجاح!");
    } catch (error) {
      alert("خطأ في حفظ الإعدادات: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  // حفظ المنتج
  const handleSaveProduct = async () => {
    if (!editingProduct) return;
    setLoading(true);
    try {
      if (editingProduct.id) {
        await setDoc(doc(db, "products", editingProduct.id), editingProduct);
      } else {
        await addDoc(collection(db, "products"), editingProduct);
      }
      alert("تم حفظ المنتج بنجاح!");
      setEditingProduct(null);
    } catch (error) {
      alert("خطأ في حفظ المنتج: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  // حذف المنتج
  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", productId));
      alert("تم حذف المنتج بنجاح!");
    } catch (error) {
      alert("خطأ في حذف المنتج: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* رأس اللوحة */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Settings size={24} />
            <h2 className="text-2xl font-bold">لوحة التحكم</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        {/* التبويبات */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "settings"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            إعدادات الموقع
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "products"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            المنتجات
          </button>
        </div>

        {/* محتوى التبويبات */}
        <div className="p-6">
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">اسم الشركة</label>
                <input
                  type="text"
                  value={editingSettings.companyName}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, companyName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">الشعار (URL)</label>
                <input
                  type="text"
                  value={editingSettings.logo}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, logo: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">عنوان "قصتنا"</label>
                <input
                  type="text"
                  value={editingSettings.storyTitle}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, storyTitle: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">وصف "قصتنا"</label>
                <textarea
                  value={editingSettings.storyDescription}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, storyDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">عنوان "عن الشركة"</label>
                <input
                  type="text"
                  value={editingSettings.aboutTitle}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, aboutTitle: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">وصف "عن الشركة"</label>
                <textarea
                  value={editingSettings.aboutDescription}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, aboutDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">رقم الهاتف</label>
                <input
                  type="text"
                  value={editingSettings.contactPhone}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, contactPhone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={editingSettings.contactEmail}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, contactEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">العنوان</label>
                <input
                  type="text"
                  value={editingSettings.contactAddress}
                  onChange={(e) =>
                    setEditingSettings({ ...editingSettings, contactAddress: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded"
                />
              </div>

              <button
                onClick={handleSaveSettings}
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save size={18} />
                حفظ الإعدادات
              </button>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-4">
              <button
                onClick={() =>
                  setEditingProduct({
                    id: "",
                    name: "",
                    description: "",
                    image: "",
                    category: "interior",
                    subcategory: "",
                    sizes: [{ size: "", price: 0, unit: "" }],
                    colors: [],
                    inStock: true,
                    featured: false,
                    rating: 0,
                    reviews: 0,
                  })
                }
                className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold hover:bg-primary/90 flex items-center gap-2"
              >
                <Plus size={18} />
                إضافة منتج جديد
              </button>

              {editingProduct && (
                <div className="border border-border rounded p-4 space-y-3">
                  <h3 className="font-semibold">تحرير المنتج</h3>
                  <input
                    type="text"
                    placeholder="اسم المنتج"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border rounded text-sm"
                  />
                  <textarea
                    placeholder="وصف المنتج"
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border rounded text-sm h-20"
                  />
                  <input
                    type="text"
                    placeholder="رابط الصورة"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, image: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border rounded text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProduct}
                      disabled={loading}
                      className="flex-1 bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:opacity-50"
                    >
                      حفظ
                    </button>
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="flex-1 bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border border-border rounded"
                  >
                    <div>
                      <p className="font-semibold text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
