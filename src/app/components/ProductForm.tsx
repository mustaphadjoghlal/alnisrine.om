import { useState } from "react";
import { X, Check, Plus, Trash2 } from "lucide-react";
import type { Product, Category, SizeOption } from "../types";

const EMPTY_FORM: Omit<Product, "id"> = {
  name: "",
  description: "",
  price: 0,
  image: "",
  category: "interior",
  subcategory: "",
  sizes: [],
  inStock: true,
  featured: false,
  rating: 4.5,
  reviews: 0,
  unit: "علبة",
};

export function ProductForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Product | null;
  onSave: (p: Product) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Product, "id">>(
    initial ? { ...initial } : { ...EMPTY_FORM }
  );

  const [sizeLabel, setSizeLabel] = useState("");
  const [sizePrice, setSizePrice] = useState("");

  const set = (key: keyof Omit<Product, "id">, val: unknown) =>
    setForm((f) => ({ ...f, [key]: val }));

  const addSize = () => {
    const label = sizeLabel.trim();
    const price = parseFloat(sizePrice);
    if (!label || isNaN(price) || price < 0) return;
    const newSize: SizeOption = { label, price };
    const updatedSizes = [...form.sizes, newSize];
    set("sizes", updatedSizes);
    set("price", updatedSizes[0].price);
    setSizeLabel("");
    setSizePrice("");
  };

  const removeSize = (i: number) => {
    const updated = form.sizes.filter((_, j) => j !== i);
    set("sizes", updated);
    if (updated.length > 0) set("price", updated[0].price);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.image.trim()) return;
    const price = form.sizes.length > 0 ? form.sizes[0].price : form.price;
    onSave({ ...form, price, id: initial?.id || Date.now().toString() });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-foreground">
            {initial ? "تعديل المنتج" : "إضافة منتج جديد"}
          </h2>
          <button onClick={onCancel} className="p-1.5 hover:bg-secondary rounded-lg">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">اسم المنتج *</label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              placeholder="مثال: جوتن ماجستيك"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">وصف / مواصفات المنتج</label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
              placeholder="اكتب وصفاً ومواصفات المنتج هنا..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الفئة</label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value as Category)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              >
                <option value="interior">أصباغ داخلية</option>
                <option value="exterior">أصباغ خارجية</option>
                <option value="materials">مواد بناء</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الفئة الفرعية</label>
              <input
                value={form.subcategory}
                onChange={(e) => set("subcategory", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="دهان فاخر"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الوحدة</label>
              <input
                value={form.unit}
                onChange={(e) => set("unit", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="علبة"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">التقييم</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                value={form.rating}
                onChange={(e) => set("rating", parseFloat(e.target.value) || 4.5)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>
          </div>

          <div className="border border-border rounded-xl p-4">
            <label className="text-sm font-bold text-foreground mb-3 block">الأحجام والأسعار</label>
            <div className="flex gap-2 mb-3">
              <input
                value={sizeLabel}
                onChange={(e) => setSizeLabel(e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="الحجم (مثال: 18 لتر)"
              />
              <input
                type="number"
                step="0.001"
                min="0"
                value={sizePrice}
                onChange={(e) => setSizePrice(e.target.value)}
                className="w-28 border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="السعر ر.ع"
              />
              <button
                onClick={addSize}
                className="bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center gap-1"
              >
                <Plus size={14} />
                إضافة
              </button>
            </div>
            {form.sizes.length > 0 ? (
              <div className="space-y-2">
                {form.sizes.map((s, i) => (
                  <div key={i} className="flex items-center justify-between bg-secondary rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold">{s.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-blue-700">{s.price.toFixed(3)} ر.ع</span>
                      <button onClick={() => removeSize(i)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">لم يتم إضافة أي حجم بعد</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">رابط الصورة *</label>
            <input
              value={form.image}
              onChange={(e) => set("image", e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              placeholder="https://..."
              dir="ltr"
            />
            {form.image && (
              <img
                src={form.image}
                alt="معاينة"
                className="mt-2 h-20 w-20 object-cover rounded-lg border border-border"
              />
            )}
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set("inStock", !form.inStock)}
                className={`w-10 h-5 rounded-full transition-colors relative ${form.inStock ? "bg-blue-700" : "bg-gray-300"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.inStock ? "right-0.5" : "left-0.5"}`} />
              </div>
              <span className="text-sm font-semibold">{form.inStock ? "متوفر" : "غير متوفر"}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set("featured", !form.featured)}
                className={`w-10 h-5 rounded-full transition-colors relative ${form.featured ? "bg-amber-500" : "bg-gray-300"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.featured ? "right-0.5" : "left-0.5"}`} />
              </div>
              <span className="text-sm font-semibold">{form.featured ? "منتج مميز" : "عادي"}</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
          >
            <Check size={16} />
            {initial ? "حفظ التعديلات" : "إضافة المنتج"}
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 border border-border rounded-xl text-foreground font-semibold hover:bg-secondary transition-colors text-sm"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
