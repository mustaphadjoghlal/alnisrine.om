import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "../components/CartDrawer";
import type { CartItem, Product, SizeOption } from "../types";
import { INIT_SITE_INFO } from "../constants";
import { subscribeToSiteInfo } from "../../lib/firestore";

export function Layout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState(INIT_SITE_INFO.whatsappNumber);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const unsub = subscribeToSiteInfo((info) => {
      if (info.whatsappNumber) setWhatsapp(info.whatsappNumber);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size?: SizeOption) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1, selectedSize: size ?? i.selectedSize }
            : i
        );
      }
      return [...prev, { product, quantity: 1, selectedSize: size }];
    });
    setToast(product.name);
    setTimeout(() => setToast(""), 2000);
  };

  const updateCart = (id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => i.product.id !== id)
        : prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== id));
  };

  const checkoutUrl = (() => {
    const items = cart
      .map((i) => {
        const size = i.selectedSize ?? i.product.sizes[0];
        const price = i.selectedSize?.price ?? i.product.price;
        return `• ${i.product.name}${size?.label ? ` (${size.label})` : ""} — الكمية: ${i.quantity} — ${(price * i.quantity).toFixed(3)} ر.ع`;
      })
      .join("\n");
    const total = cart.reduce((s, i) => s + (i.selectedSize?.price ?? i.product.price) * i.quantity, 0);
    const msg = `مرحباً، أرغب في إتمام الطلب التالي:\n\n${items}\n\n*الإجمالي:* ${total.toFixed(3)} ر.ع`;
    return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(msg)}`;
  })();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet context={{ addToCart, cart, updateCart } as { addToCart: (p: Product, size?: SizeOption) => void; cart: CartItem[]; updateCart: (id: string, qty: number) => void }} />
      </main>
      <Footer />
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateCart}
          onRemove={removeFromCart}
          checkoutUrl={checkoutUrl}
        />
      )}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl z-50 animate-bounce">
          أُضيف للسلة: {toast}
        </div>
      )}
    </div>
  );
}
