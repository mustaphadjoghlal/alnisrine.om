import { useState } from "react";
import { Settings, Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { SiteSettings, Product } from "../types";
import { db, uploadProductImage } from "../firebase";
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

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "settings", "siteSettings"), editingSettings);
      alert("تم حفظ الإعدادات!");
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProduct = async () => {
    if (!editingProduct) return;
    setLoading(true);
    try {
      if (editingProduct.id) {
        await setDoc(doc(db, "products", editingProduct.id), editingProduct);
      } else {
        await addDoc(collection(db, "products"), editingProduct);
      }
      alert("تم حفظ المنتج!");
      setEditingProduct(null);
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("حذف المنتج؟")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", productId));
      alert("تم الحذف");
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Settings size={24} />
            <h2 className="text-2xl font-bold">لوحة التحكم</h2>
          </div>
          <button onClick={onClose}><X size={24} /></button>
        </div>
        <div className="flex border-b">
          <button onClick={() => setActiveTab("settings")} className={`px-6 py-3 ${activeTab === "settings" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>إعدادات الموقع</button>
          <button onClick={() => setActiveTab("products")} className={`px-6 py-3 ${activeTab === "products" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>المنتجات</button>
        </div>
        <div className="p-6">
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div><label>اسم الشركة</label><input type="text" value={editingSettings.companyName} onChange={(e) => setEditingSettings({...editingSettings, companyName: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>الشعار (URL)</label><input type="text" value={editingSettings.logo} onChange={(e) => setEditingSettings({...editingSettings, logo: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>عنوان "قصتنا"</label><input type="text" value={editingSettings.storyTitle} onChange={(e) => setEditingSettings({...editingSettings, storyTitle: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>وصف "قصتنا"</label><textarea value={editingSettings.storyDescription} onChange={(e) => setEditingSettings({...editingSettings, storyDescription: e.target.value})} className="w-full px-3 py-2 border rounded h-24" /></div>
              <div><label>عنوان "عن الشركة"</label><input type="text" value={editingSettings.aboutTitle} onChange={(e) => setEditingSettings({...editingSettings, aboutTitle: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>وصف "عن الشركة"</label><textarea value={editingSettings.aboutDescription} onChange={(e) => setEditingSettings({...editingSettings, aboutDescription: e.target.value})} className="w-full px-3 py-2 border rounded h-24" /></div>
              <div><label>رقم الهاتف</label><input type="text" value={editingSettings.contactPhone} onChange={(e) => setEditingSettings({...editingSettings, contactPhone: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>البريد الإلكتروني</label><input type="email" value={editingSettings.contactEmail} onChange={(e) => setEditingSettings({...editingSettings, contactEmail: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <div><label>العنوان</label><input type="text" value={editingSettings.contactAddress} onChange={(e) => setEditingSettings({...editingSettings, contactAddress: e.target.value})} className="w-full px-3 py-2 border rounded" /></div>
              <button onClick={handleSaveSettings} disabled={loading} className="w-full bg-primary text-primary-foreground py-2 rounded">حفظ الإعدادات</button>
            </div>
          )}
          {activeTab === "products" && (
            <div className="space-y-4">
              <button onClick={() => setEditingProduct({ id: "", name: "", description: "", image: "", category: "interior", subcategory: "", sizes: [], colors: [], inStock: true, featured: false, rating: 0, reviews: 0 })} className="bg-primary text-primary-foreground px-4 py-2 rounded">إضافة منتج</button>
              {editingProduct && (
                <div className="border p-4 space-y-3">
                  <input type="text" placeholder="اسم المنتج" value={editingProduct.name} onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} className="w-full px-3 py-2 border rounded" />
                  <textarea placeholder="وصف المنتج" value={editingProduct.description} onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})} className="w-full px-3 py-2 border rounded h-20" />
                  {/* هنا التعديل: حقل رفع الصورة من الجهاز */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file && editingProduct) {
                        try {
                          const url = await uploadProductImage(file, editingProduct.name || "product");
                          setEditingProduct({ ...editingProduct, image: url });
                          alert("تم رفع الصورة!");
                        } catch (err) {
                          alert("فشل الرفع: " + (err instanceof Error ? err.message : ""));
                        }
                      }
                    }}
                    className="w-full px-3 py-2 border rounded"
                  />
                  {editingProduct.image && <div className="text-xs break-all">الرابط: {editingProduct.image.substring(0, 50)}...</div>}
                  {/* انتهى التعديل */}
                  <div className="flex gap-2">
                    <button onClick={handleSaveProduct} disabled={loading} className="flex-1 bg-green-600 text-white py-2 rounded">حفظ</button>
                    <button onClick={() => setEditingProduct(null)} className="flex-1 bg-gray-300 py-2 rounded">إلغاء</button>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                {products.map((product) => (
                  <div key={product.id} className="flex justify-between p-3 border rounded">
                    <div><p className="font-semibold">{product.name}</p><p className="text-xs text-muted-foreground">{product.category}</p></div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingProduct(product)} className="text-blue-600"><Edit2 size={16} /></button>
                      <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600"><Trash2 size={16} /></button>
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
