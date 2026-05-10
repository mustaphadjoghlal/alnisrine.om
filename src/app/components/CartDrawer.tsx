import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import type { CartItem } from "../types";
import { WhatsAppSvg } from "./WhatsAppSvg";

export function CartDrawer({
  cart,
  onClose,
  onUpdate,
  onRemove,
  checkoutUrl,
}: {
  cart: CartItem[];
  onClose: () => void;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  checkoutUrl: string;
}) {
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1" />
      <div
        className="w-full max-w-sm bg-white shadow-2xl flex flex-col h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-black text-lg text-foreground">سلة المشتريات</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-secondary rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingCart size={48} strokeWidth={1} />
            <p className="text-sm">السلة فارغة</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-secondary rounded-xl p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.product.sizes[0]?.label ?? ""}
                    </p>
                    <p className="text-sm font-black text-primary mt-1">
                      {(item.product.price * item.quantity).toFixed(3)} ر.ع
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          onUpdate(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm font-bold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdate(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="mr-auto text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">الإجمالي</span>
                <span className="text-xl font-black text-primary">
                  {total.toFixed(3)} ر.ع
                </span>
              </div>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppSvg className="w-5 h-5" />
                إتمام الطلب عبر واتساب
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
