import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "../components/CartDrawer";
import type { CartItem, Product } from "../types";
import { WHATSAPP_NUMBER } from "../constants";

export function Layout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
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

  const handleCheckout = () => {
    const items = cart
      .map(
        (i) =>
          `• ${i.product.name} (${i.product.size}) - الكمية: ${i.quantity} - ${(i.product.price * i.quantity).toFixed(3)} ر.ع`
      )
      .join("\n");
    const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const msg = `مرحباً، أرغب في إتمام الطلب التالي:\n\n${items}\n\n*الإجمالي:* ${total.toFixed(3)} ر.ع`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet context={{ addToCart }} />
      </main>
      <Footer />
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateCart}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}
