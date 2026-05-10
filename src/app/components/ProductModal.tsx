import { useState, useEffect } from "react";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";
import type { Product } from "../types";
import { CAT_LABELS, INIT_SITE_INFO } from "../constants";
import { StarRating } from "./StarRating";
import { WhatsAppSvg } from "./WhatsAppSvg";
import { subscribeToSiteInfo } from "../../lib/firestore";

export function ProductModal({
  product,
  onClose,
  onAdd,
}: {
  product: Product;
  onClose: () => void;
  onAdd: (p: Product) => void;
}) {
  const [whatsapp, setWhatsapp] = useState(INIT_SITE_INFO.whatsappNumber);

  useEffect(() => {
    const unsub = subscribeToSiteInfo((info) => {
      setWhatsapp(info.whatsappNumber || INIT_SITE_INFO.whatsappNumber);
    });
    return unsub;
  }, []);

  const [qty, setQty] = useState(1);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);

  const hasSizes = product.sizes.length > 0;
  const selectedSize = hasSizes ? product.sizes[selectedSizeIdx] : null;
  const displayPrice = selectedSize ? selectedSize.price : product.price;

  const waText = encodeURIComponent(
    `مرحباً، أرغب في الاستفسار عن: ${product.name}` +
    (selectedSize ? ` - ${selectedSize.label}` : "")
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
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
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
                <X size={20} />
              </button>
            </div>

            <StarRating rating={product.rating} reviews={product.reviews} />

            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {hasSizes && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">الحجم</p>
                <select
                  value={selectedSizeIdx}
                  onChange={(e) => setSelectedSizeIdx(Number(e.target.value))}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {product.sizes.map((s, i) => (
                    <option key={i} value={i}>
                      {s.label} — {s.price.toFixed(3)} ر.ع
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-secondary transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 font-bold text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 hover:bg-secondary transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-primary">
                  {(displayPrice * qty).toFixed(3)}
                </span>
                <span className="text-sm text-muted-foreground">ر.ع</span>
              </div>
            </div>

            <button
              onClick={() => { for (let i = 0; i < qty; i++) onAdd(product); onClose(); }}
              disabled={!product.inStock}
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              أضف إلى السلة
            </button>

            <a
              href={`https://wa.me/${whatsapp}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppSvg className="w-5 h-5" />
              استفسار عبر واتساب
            </a>
            <p className="text-xs text-muted-foreground text-center">
              * السعر قابل للتغيير بعد تحديد اللون عند التواصل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
