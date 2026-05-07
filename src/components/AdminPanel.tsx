import { useState, useEffect } from "react";
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
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [localProducts, setLocalProducts] = useState<Product[]>(products);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  // حفظ إعدادات الموقع (بما فيها الشعار)
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

  // حفظ المنتج (إضافة أو تعديل)
  const handleSaveProduct = async () => {
    if (!editingProduct) return;
    setLoading(true);
    try {
      const productToSave = { ...editingProduct };
      if (!productToSave.id) delete productToSave.id;

      if (productToSave.id) {
        await setDoc(doc(db, "products", productToSave.id), productToSave);
      } else {
        const docRef = await addDoc(collection(db, "products"), productToSave);
        productToSave.id = docRef.id;
      }
      alert("تم حفظ المنتج بنجاح!");
      // تحديث القائمة المحلية
      if (productToSave.id) {
        setLocalProducts(prev => {
          const filtered = prev.filter(p => p.id !== productToSave.id);
          return [...filtered, productToSave];
        });
      } else {
        setLocalProducts(prev => [...prev, productToSave]);
      }
      setEditingProduct(null);
    } catch (error) {
      alert("خطأ في حفظ المنتج: " + (error instanceof Error ? error.message : ""));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", productId));
      alert("تم حذف المنتج!");
      setLocalProducts(prev => prev.filter(p => p.id !== productId));
    } catch (error) {
      alert("خطأ: " + (error instanceof Error ? error.message : ""));
    } finally {
      setLoading(false);
    }
  };

  // رفع صورة المنتج
  const handleImageUpload = async (file: File) => {
    if (!editingProduct) return;
    setUploadingImage(true);
    try {
      const url = await uploadProductImage(file, editingProduct.name || "product");
      setEditingProduct({ ...editingProduct, image: url });
      alert("تم رفع الصورة!");
    } catch (error) {
      alert("فشل الرفع: " + (error instanceof Error ? error.message : ""));
    } finally {
      setUploadingImage(false);
    }
  };

  // رفع شعار الموقع
  const handleLogoUpload = async (file: File) => {
    setUploadingLogo(true);
    try {
      const url = await uploadProductImage(file, "logo");
      setEditingSettings({ ...editingSettings, logo: url });
      alert("تم رفع الشعار!");
    } catch (error) {
      alert("فشل رفع الشعار: " + (error instanceof Error ? error.message : ""));
    } finally {
      setUploadingLogo(false);
    }
  };

  // دوال المقاسات
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

  // دوال الألوان
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
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Settings size={24} />
            <h2 className="text-2xl font-bold">لوحة التحكم</h2>
          </div>
          <button onClick={onClose}><X size={24} /></button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button onClick={() => setActiveTab("settings")} className={`px-6 py-3 ${activeTab === "settings" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>إعدادات الموقع</button>
          <button onClick={() => setActiveTab("products")} className={`px-6 py-3 ${activeTab === "products" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>المنتجات</button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* ========== إعدادات الموقع ========== */}
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">اسم الشركة</label>
                <input type="text" value={editingSettings.companyName} onChange={(e) => setEditingSettings({...editingSettings, companyName: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">شعار الموقع (ارفع صورة)</label>
                <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleLogoUpload(e.target.files[0])} disabled={uploadingLogo} className="w-full px-3 py-2 border rounded" />
                {uploadingLogo && <p className="text-sm text-blue-600">جاري رفع الشعار...</p>}
                {editingSettings.logo && (
                  <div className="mt-2">
                    <img src={editingSettings.logo} alt="شعار" className="h-16 w-auto object-contain border p-1 rounded" />
                    <p className="text-xs text-gray-500 break-all mt-1">{editingSettings.logo}</p>
                  </div>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-1">عنوان "قصتنا"</label>
                <input type="text" value={editingSettings.storyTitle} onChange={(e) => setEditingSettings({...editingSettings, storyTitle: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">وصف "قصتنا"</label>
                <textarea value={editingSettings.storyDescription} onChange={(e) => setEditingSettings({...editingSettings, storyDescription: e.target.value})} className="w-full px-3 py-2 border rounded h-24" />
              </div>
              <div>
                <label className="block font-semibold mb-1">عنوان "عن الشركة"</label>
                <input type="text" value={editingSettings.aboutTitle} onChange={(e) => setEditingSettings({...editingSettings, aboutTitle: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">وصف "عن الشركة"</label>
                <textarea value={editingSettings.aboutDescription} onChange={(e) => setEditingSettings({...editingSettings, aboutDescription: e.target.value})} className="w-full px-3 py-2 border rounded h-24" />
              </div>
              <div>
                <label className="block font-semibold mb-1">رقم الهاتف</label>
                <input type="text" value={editingSettings.contactPhone} onChange={(e) => setEditingSettings({...editingSettings, contactPhone: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">البريد الإلكتروني</label>
                <input type="email" value={editingSettings.contactEmail} onChange={(e) => setEditingSettings({...editingSettings, contactEmail: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">العنوان</label>
                <input type="text" value={editingSettings.contactAddress} onChange={(e) => setEditingSettings({...editingSettings, contactAddress: e.target.value})} className="w-full px-3 py-2 border rounded" />
              </div>
              <button onClick={handleSaveSettings} disabled={loading} className="w-full bg-primary text-primary-foreground py-2 rounded font-bold">حفظ الإعدادات</button>
            </div>
          )}

          {/* ========== إدارة المنتجات ========== */}
          {activeTab === "products" && (
            <div className="space-y-4">
              {/* زر إضافة منتج */}
              <button onClick={() => setEditingProduct({
                id: "",
                name: "",
                description: "",
                image: "",
                category: "interior",
                subcategory: "",
                sizes: [{ size: "قطعة", price: 0, unit: "" }],
                colors: [],
                inStock: true,
                featured: false,
                rating: 0,
                reviews: 0,
              })} className="bg-primary text-primary-foreground px-4 py-2 rounded">+ إضافة منتج جديد</button>

              {/* نموذج تحرير المنتج */}
              {editingProduct && (
                <div className="border p-4 space-y-4 rounded shadow">
                  <h3 className="font-bold text-lg">تحرير المنتج</h3>
                  <input type="text" placeholder="اسم المنتج" value={editingProduct.name} onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} className="w-full px-3 py-2 border rounded" />
                  <textarea placeholder="وصف المنتج" value={editingProduct.description} onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})} className="w-full px-3 py-2 border rounded h-20" />
                  
                  {/* رفع صورة المنتج */}
                  <div>
                    <label className="block font-semibold mb-1">صورة المنتج</label>
                    <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} disabled={uploadingImage} className="w-full px-3 py-2 border rounded" />
                    {uploadingImage && <p className="text-sm text-blue-600">جاري الرفع...</p>}
                    {editingProduct.image && <img src={editingProduct.image} alt="product preview" className="w-32 h-32 object-cover mt-2 border" />}
                  </div>

                  {/* التصنيف */}
                  <div>
                    <label className="block font-semibold mb-1">التصنيف</label>
                    <select value={editingProduct.category} onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value as any})} className="w-full px-3 py-2 border rounded">
                      <option value="interior">داخلي</option>
                      <option value="exterior">خارجي</option>
                      <option value="materials">مواد بناء</option>
                    </select>
                  </div>

                  {/* السعر الأساسي */}
                  <div>
                    <label className="block font-semibold text-red-600 mb-1">السعر الأساسي (ريال عماني)</label>
                    <input type="number" step="0.1" value={editingProduct.sizes[0]?.price || 0} onChange={(e) => {
                      const newPrice = parseFloat(e.target.value);
                      const newSizes = [...editingProduct.sizes];
                      if (newSizes.length === 0) newSizes.push({ size: "قطعة", price: newPrice, unit: "" });
                      else newSizes[0] = { ...newSizes[0], price: newPrice };
                      setEditingProduct({ ...editingProduct, sizes: newSizes });
                    }} className="w-full px-3 py-2 border rounded" />
                  </div>

                  {/* مقاسات إضافية */}
                  <div>
                    <label className="block font-semibold mb-1">مقاسات إضافية (اختياري)</label>
                    {editingProduct.sizes.map((size, idx) => (
                      idx === 0 ? null : (
                        <div key={idx} className="flex gap-2 mt-2">
                          <input type="text" placeholder="المقاس (مثل 5 لتر)" value={size.size} onChange={(e) => updateSize(idx, "size", e.target.value)} className="flex-1 px-2 py-1 border rounded" />
                          <input type="number" placeholder="السعر" value={size.price} onChange={(e) => updateSize(idx, "price", parseFloat(e.target.value))} className="w-24 px-2 py-1 border rounded" />
                          <button onClick={() => removeSize(idx)} className="text-red-600"><Trash2 size={16} /></button>
                        </div>
                      )
                    ))}
                    <button onClick={addSize} className="text-sm text-blue-600 mt-2">+ إضافة مقاس</button>
                  </div>

                  {/* الألوان */}
                  <div>
                    <label className="block font-semibold mb-1">ألوان (اختياري)</label>
                    {editingProduct.colors.map((color, idx) => (
                      <div key={idx} className="flex gap-2 mt-2">
                        <input type="text" placeholder="اللون" value={color.name} onChange={(e) => updateColor(idx, "name", e.target.value)} className="flex-1 px-2 py-1 border rounded" />
                        <input type="number" placeholder="سعر إضافي" value={color.price} onChange={(e) => updateColor(idx, "price", parseFloat(e.target.value))} className="w-24 px-2 py-1 border rounded" />
                        <button onClick={() => removeColor(idx)} className="text-red-600"><Trash2 size={16} /></button>
                      </div>
                    ))}
                    <button onClick={addColor} className="text-sm text-blue-600 mt-2">+ إضافة لون</button>
                  </div>

                  {/* خيارات إضافية */}
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="checkbox" checked={editingProduct.inStock} onChange={(e) => setEditingProduct({...editingProduct, inStock: e.target.checked})} /> متوفر</label>
                    <label className="flex items-center gap-2"><input type="checkbox" checked={editingProduct.featured} onChange={(e) => setEditingProduct({...editingProduct, featured: e.target.checked})} /> مميز</label>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={handleSaveProduct} disabled={loading} className="flex-1 bg-green-600 text-white py-2 rounded font-bold">حفظ المنتج</button>
                    <button onClick={() => setEditingProduct(null)} className="flex-1 bg-gray-300 py-2 rounded">إلغاء</button>
                  </div>
                </div>
              )}

              {/* قائمة المنتجات الحالية */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {localProducts.length === 0 && <p className="text-center text-gray-500">لا توجد منتجات. أضف منتجاً جديداً.</p>}
                {localProducts.map((product) => (
                  <div key={product.id} className="flex justify-between items-center p-3 border rounded">
                    <div className="flex items-center gap-3">
                      {product.image && <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />}
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.category === "interior" ? "داخلي" : product.category === "exterior" ? "خارجي" : "مواد بناء"}</p>
                        <p className="text-sm font-bold text-green-600">{product.sizes[0]?.price || 0} ر.ع</p>
                      </div>
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
