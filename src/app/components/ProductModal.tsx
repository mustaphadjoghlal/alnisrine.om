import { useState } from "react";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";
import type { Product } from "../types";
import { CAT_LABELS, WHATSAPP_NUMBER } from "../constants";
import { StarRating } from "./StarRating";
import { WhatsAppSvg } from "./WhatsAppSvg";

export function ProductModal({
  product,
  onClose,
  onAdd,
}: {
  product: Product;
  onClose: () => void;
  onAdd: (p: Product) => void;
}) {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">
                  نفد المخزون
                </span>
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {CAT_LABELS[product.category]}
                </span>
                <h2 className="text-2xl font-black text-foreground mt-2">
                  {product.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground p-1"
              >
                <X size={20} />
              </button>
            </div>
            <StarRating rating={product.rating} reviews={product.reviews} />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <div className="flex gap-4 text-sm">
              <div className="bg-secondary rounded-lg px-3 py-2 text-center">
                <div className="font-bold text-foreground">{product.size}</div>
                <div className="text-xs text-muted-foreground">الحجم</div>
              </div>
              <div className="bg-secondary rounded-lg px-3 py-2 text-center">
                <div className="font-bold text-foreground">{product.unit}</div>
                <div className="text-xs text-muted-foreground">الوحدة</div>
              </div>
              <div
                className={`rounded-lg px-3 py-2 text-center ${product.inStock ? "bg-green-50" : "bg-red-50"}`}
              >
                <div
                  className={`font-bold text-sm ${product.inStock ? "text-green-700" : "text-red-600"}`}
                >
                  {product.inStock ? "متوفر" : "غير متوفر"}
                </div>
                <div className="text-xs text-muted-foreground">المخزون</div>
              </div>
            </div>
            {product.colors.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  الألوان المتاحة
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${selectedColor === c ? "border-primary scale-125" : "border-border hover:scale-110"}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 font-bold text-sm">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-primary">
                  {(product.price * qty).toFixed(3)}
                </span>
                <span className="text-sm text-muted-foreground">ر.ع</span>
              </div>
            </div>
            <button
              onClick={() => {
                for (let i = 0; i < qty; i++) onAdd(product);
                onClose();
              }}
              disabled={!product.inStock}
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              أضف إلى السلة
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مرحباً، أرغب في الاستفسار عن: ${product.name} - ${product.size}`)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppSvg className="w-5 h-5" />
              استفسار عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
