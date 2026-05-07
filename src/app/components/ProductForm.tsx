import { useState } from "react";
import { X, Check } from "lucide-react";
import type { Product, Category } from "../types";

const EMPTY_FORM: Omit<Product, "id"> = {
  name: "",
  description: "",
  price: 0,
  image: "",
  category: "interior",
  subcategory: "",
  colors: [],
  inStock: true,
  featured: false,
  rating: 4.5,
  reviews: 0,
  unit: "علبة",
  size: "",
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
  const [colorInput, setColorInput] = useState("");

  const set = (key: keyof Omit<Product, "id">, val: unknown) =>
    setForm((f) => ({ ...f, [key]: val }));

  const addColor = () => {
    if (colorInput && /^#[0-9A-Fa-f]{6}$/.test(colorInput)) {
      set("colors", [...form.colors, colorInput]);
      setColorInput("");
    }
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.image.trim()) return;
    onSave({ ...form, id: initial?.id || Date.now().toString() });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-foreground">
            {initial ? "تعديل المنتج" : "إضافة منتج جديد"}
          </h2>
          <button
            onClick={onCancel}
            className="p-1.5 hover:bg-secondary rounded-lg"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">
              اسم المنتج *
            </label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              placeholder="مثال: جوتن ماجستيك"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">
              وصف المنتج
            </label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                السعر (ر.ع) *
              </label>
              <input
                type="number"
                step="0.001"
                value={form.price}
                onChange={(e) => set("price", parseFloat(e.target.value) || 0)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                الفئة
              </label>
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
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                الفئة الفرعية
              </label>
              <input
                value={form.subcategory}
                onChange={(e) => set("subcategory", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="دهان فاخر"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                الحجم
              </label>
              <input
                value={form.size}
                onChange={(e) => set("size", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="18 لتر"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                الوحدة
              </label>
              <input
                value={form.unit}
                onChange={(e) => set("unit", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="علبة"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                التقييم
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                value={form.rating}
                onChange={(e) =>
                  set("rating", parseFloat(e.target.value) || 4.5)
                }
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">
              رابط الصورة *
            </label>
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
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">
              ألوان المنتج
            </label>
            <div className="flex gap-2">
              <input
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="#FFFFFF"
                dir="ltr"
              />
              <button
                onClick={addColor}
                className="bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                إضافة
              </button>
            </div>
            {form.colors.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-2">
                {form.colors.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-secondary rounded-full px-2 py-1"
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: c }}
                    />
                    <span className="text-xs" dir="ltr">
                      {c}
                    </span>
                    <button
                      onClick={() =>
                        set(
                          "colors",
                          form.colors.filter((_, j) => j !== i)
                        )
                      }
                      className="text-red-400 hover:text-red-600 ml-1"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set("inStock", !form.inStock)}
                className={`w-10 h-5 rounded-full transition-colors relative ${form.inStock ? "bg-blue-700" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.inStock ? "right-0.5" : "left-0.5"}`}
                />
              </div>
              <span className="text-sm font-semibold">
                {form.inStock ? "متوفر" : "غير متوفر"}
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set("featured", !form.featured)}
                className={`w-10 h-5 rounded-full transition-colors relative ${form.featured ? "bg-amber-500" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.featured ? "right-0.5" : "left-0.5"}`}
                />
              </div>
              <span className="text-sm font-semibold">
                {form.featured ? "مميز" : "عادي"}
              </span>
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
