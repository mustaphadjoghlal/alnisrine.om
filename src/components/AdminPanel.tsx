import { useState } from "react";
import { Settings, Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { SiteSettings, Product, SizeOption, ColorOption } from "../types";
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
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "settings", "siteSettings"), editingSettings);
      alert("تم حفظ الإعدادات بنجاح!");
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
      alert("تم حفظ المنتج بنجاح!");
      setEditingProduct(null);
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", productId));
      alert("تم حذف المنتج بنجاح!");
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (!editingProduct) return;
    setUploadingImage(true);
    try {
      const url = await uploadProductImage(file, editingProduct.name || "product");
      setEditingProduct({ ...editingProduct, image: url });
      alert("تم رفع الصورة بنجاح!");
    } catch (error) {
      alert("فشل رفع الصورة: " + (error instanceof Error ? error.message : ""));
    } finally {
      setUploadingImage(false);
    }
  };

  const addSize = () => {
    if (editingProduct) {
      setEditingProduct({
        ...editingProduct,
        sizes: [...editingProduct.sizes, { size: "", price: 0, unit: "" }],
      });
    }
  };

  const updateSize = (index: number, field: keyof SizeOption, value: string | number) => {
    if (editingProduct) {
      const newSizes = [...editingProduct.sizes];
      newSizes[index] = { ...newSizes[index], [field]: value };
      setEditingProduct({ ...editingProduct, sizes: newSizes });
    }
  };

  const removeSize = (index: number) => {
    if (editingProduct) {
      const newSizes = editingProduct.sizes.filter((_, i) => i !== index);
      setEditingProduct({ ...editingProduct, sizes: newSizes });
    }
  };

  const addColor = () => {
    if (editingProduct) {
      setEditingProduct({
        ...editingProduct,
        colors: [...editingProduct.colors, { name: "", price: 0 }],
      });
    }
  };

  const updateColor = (index: number, field: keyof ColorOption, value: string | number) => {
    if (editingProduct) {
      const newColors = [...editingProduct.colors];
      newColors[index] = { ...newColors[index], [field]: value };
      setEditingProduct({ ...editingProduct, colors: newColors });
    }
  };

  const removeColor = (index: number) => {
    if (editingProduct) {
      const newColors = editingProduct.colors.filter((_, i) => i !== index);
      setEditingProduct({ ...editingProduct, colors: newColors });
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
              <button onClick={() => setEditingProduct({
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
              })} className="bg-primary text-primary-foreground px-4 py-2 rounded">+ إضافة منتج جديد</button>

              {editingProduct && (
                <div className="border p-4 space-y-4">
                  <h3 className="font-bold">تحرير المنتج</h3>
                  <input type="text" placeholder="اسم المنتج" value={editingProduct.name} onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} className="w-full px-3 py-2 border rounded" />
                  <textarea placeholder="وصف المنتج" value={editingProduct.description} onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})} className="w-full px-3 py-2 border rounded h-20" />
                  
                  {/* رفع الصورة */}
                  <div>
                    <label>صورة المنتج</label>
                    <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} disabled={uploadingImage} className="w-full px-3 py-2 border rounded" />
                    {uploadingImage && <p className="text-sm text-blue-600">جاري الرفع...</p>}
                    {editingProduct.image && <img src={editingProduct.image} alt="preview" className="w-32 h-32 object-cover mt-2" />}
                  </div>

                  {/* التصنيف */}
                  <div>
                    <label>التصنيف</label>
                    <select value={editingProduct.category} onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value as any})} className="w-full px-3 py-2 border rounded">
                      <option value="interior">داخلي</option>
                      <option value="exterior">خارجي</option>
                      <option value="materials">مواد بناء</option>
                    </select>
                  </div>

                  {/* المقاسات */}
                  <div>
                    <label>المقاسات والأحجام</label>
                    {editingProduct.sizes.map((size, idx) => (
                      <div key={idx} className="flex gap-2 mt-1">
                        <input type="text" placeholder="الحجم (مثل 5 لتر)" value={size.size} onChange={(e) => updateSize(idx, "size", e.target.value)} className="flex-1 px-2 py-1 border rounded" />
                        <input type="number" placeholder="السعر" value={size.price} onChange={(e) => updateSize(idx, "price", parseFloat(e.target.value))} className="w-24 px-2 py-1 border rounded" />
                        <button type="button" onClick={() => removeSize(idx)} className="text-red-600"><Trash2 size={16} /></button>
                      </div>
                    ))}
                    <button type="button" onClick={addSize} className="text-sm text-blue-600 mt-1">+ إضافة مقاس</button>
                  </div>

                  {/* الألوان */}
                  <div>
                    <label>الألوان (اختياري)</label>
                    {editingProduct.colors.map((color, idx) => (
                      <div key={idx} className="flex gap-2 mt-1">
                        <input type="text" placeholder="اللون" value={color.name} onChange={(e) => updateColor(idx, "name", e.target.value)} className="flex-1 px-2 py-1 border rounded" />
                        <input type="number" placeholder="سعر إضافي" value={color.price} onChange={(e) => updateColor(idx, "price", parseFloat(e.target.value))} className="w-24 px-2 py-1 border rounded" />
                        <button type="button" onClick={() => removeColor(idx)} className="text-red-600"><Trash2 size={16} /></button>
                      </div>
                    ))}
                    <button type="button" onClick={addColor} className="text-sm text-blue-600 mt-1">+ إضافة لون</button>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={handleSaveProduct} disabled={loading} className="flex-1 bg-green-600 text-white py-2 rounded">حفظ المنتج</button>
                    <button onClick={() => setEditingProduct(null)} className="flex-1 bg-gray-300 py-2 rounded">إلغاء</button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {products.map((product) => (
                  <div key={product.id} className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                      <p className="text-xs font-bold text-green-600">{product.sizes[0]?.price} ر.ع</p>
                    </div>
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
