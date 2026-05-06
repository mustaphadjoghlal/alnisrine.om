import { useState, useEffect, useMemo } from "react";
import {
  ShoppingCart, X, Plus, Minus, Trash2, Edit2,
  Search, Menu, Phone, MapPin, Mail, Package,
  LogOut, Lock, Star, ChevronRight, PlusCircle,
  BarChart2, MessageCircle, Eye, Layers, Settings,
  Check, Tag, Home, Shield, Users, TrendingUp, Filter
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "interior" | "exterior" | "materials";
type View = "home" | Category | "about" | "contact" | "dashboard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  subcategory: string;
  colors: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  unit: string;
  size: string;
}

interface CartItem { product: Product; quantity: number; }

// ─── Constants ────────────────────────────────────────────────────────────────
const CAT_LABELS: Record<Category, string> = {
  interior: "أصباغ داخلية",
  exterior: "أصباغ خارجية",
  materials: "مواد بناء",
};

const CAT_DESC: Record<Category, string> = {
  interior: "طلاء داخلي فاخر لكل غرفة",
  exterior: "حماية متكاملة للواجهات",
  materials: "أدوات ومواد بناء متنوعة",
};

const CAT_IMAGES: Record<Category, string> = {
  interior:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
  exterior:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format",
  materials:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format",
};

const ADMIN_PASS = "nasreen2024";

// ─── Initial Products ─────────────────────────────────────────────────────────
const INIT_PRODUCTS: Product[] = [
  {
    id: "1", name: "جوتن ماجستيك",
    description: "طلاء داخلي فائق الجودة عالي النعومة، مقاوم للبقع وقابل للغسيل. يمنح جدرانك مظهراً ناعماً ومميزاً يدوم لسنوات. مناسب للمناطق عالية الاستخدام كالمطابخ والحمامات وغرف المعيشة.",
    price: 45.500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "interior", subcategory: "دهان فاخر",
    colors: ["#FFFFFF", "#FFF8E7", "#E8D5C4", "#B8C4D4", "#C4D4B8"],
    inStock: true, featured: true, rating: 4.9, reviews: 187, unit: "علبة", size: "18 لتر",
  },
  {
    id: "2", name: "جوتن اسينس",
    description: "طلاء داخلي قابل للغسيل بتقنية متطورة توفر غطاءً ممتازاً وألواناً نابضة بالحياة. سهل التطبيق ويجف بسرعة مع مقاومة عالية للرطوبة.",
    price: 28.000,
    image: "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "interior", subcategory: "قابل للغسيل",
    colors: ["#FFFFFF", "#F5F5F5", "#E0E8F0", "#F0E8E0", "#E8F0E0"],
    inStock: true, featured: true, rating: 4.7, reviews: 143, unit: "علبة", size: "4 لتر",
  },
  {
    id: "3", name: "جوتابلاست الداخلي",
    description: "طلاء داخلي اقتصادي عالي الجودة مناسب للمنازل والمكاتب والمدارس. يوفر تغطية ممتازة بطبقة واحدة مع سطح أملس ومتجانس.",
    price: 22.000,
    image: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=600&fit=crop&auto=format",
    category: "interior", subcategory: "اقتصادي",
    colors: ["#FFFFFF", "#FFFAF0", "#F5F0E8"],
    inStock: true, featured: false, rating: 4.5, reviews: 89, unit: "علبة", size: "18 لتر",
  },
  {
    id: "4", name: "جوتن ليفينغ",
    description: "طلاء زخرفي داخلي يمنح جدرانك تأثيرات جمالية فريدة. متوفر بمئات الألوان لتعكس ذوقك وأسلوبك المميز في الديكور.",
    price: 12.500,
    image: "https://images.unsplash.com/photo-1562184552-997c461abbe8?w=600&h=600&fit=crop&auto=format",
    category: "interior", subcategory: "زخرفي",
    colors: ["#D4A5A5", "#A5C4D4", "#A5D4B8", "#D4C4A5", "#C4A5D4"],
    inStock: true, featured: false, rating: 4.6, reviews: 62, unit: "علبة", size: "1 لتر",
  },
  {
    id: "5", name: "جوتاشيلد الخارجي",
    description: "طلاء خارجي فائق المقاومة ضد العوامل الجوية القاسية. يحمي واجهات منزلك من الأشعة فوق البنفسجية والرطوبة لمدة تصل إلى 10 سنوات.",
    price: 55.000,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=600&fit=crop&auto=format",
    category: "exterior", subcategory: "دهان فاخر",
    colors: ["#FFFFFF", "#F5F5F0", "#E8E0D8", "#D8E0E8"],
    inStock: true, featured: true, rating: 4.9, reviews: 234, unit: "علبة", size: "18 لتر",
  },
  {
    id: "6", name: "فينوماستيك الخارجي",
    description: "طلاء خارجي قابل للغسيل بتقنية متطورة لمقاومة الطحالب والفطريات. مثالي للمناخ الرطب في سلطنة عُمان.",
    price: 42.000,
    image: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=600&h=600&fit=crop&auto=format",
    category: "exterior", subcategory: "مقاوم للطحالب",
    colors: ["#FFFFFF", "#E8E8E0", "#D4DCE4"],
    inStock: true, featured: true, rating: 4.8, reviews: 178, unit: "علبة", size: "18 لتر",
  },
  {
    id: "7", name: "هيدروشيلد للأسطح",
    description: "طلاء عازل للماء عالي الكفاءة مخصص للأسطح والشرفات. يمنع تسرب المياه ويحمي الهيكل الإنشائي من الرطوبة والتآكل.",
    price: 32.000,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "exterior", subcategory: "عازل مائي",
    colors: ["#FFFFFF", "#E0E8E0"],
    inStock: true, featured: false, rating: 4.7, reviews: 95, unit: "علبة", size: "4 لتر",
  },
  {
    id: "8", name: "روف كوت الأسطح",
    description: "طلاء خاص للأسطح المسطحة يوفر حماية قصوى من الحرارة الشديدة. يعكس الحرارة ويوفر الطاقة ويمنع التشقق في الصيف الحار.",
    price: 28.000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "exterior", subcategory: "دهان الأسطح",
    colors: ["#FFFFFF", "#C8C8C0"],
    inStock: false, featured: false, rating: 4.5, reviews: 67, unit: "علبة", size: "5 لتر",
  },
  {
    id: "9", name: "معجون البولي فيلر",
    description: "معجون تسوية عالي الجودة لملء الشقوق والتشققات وتسوية الأسطح قبل الدهان. يلتصق بقوة على الخرسانة والجبس والطوب.",
    price: 8.500,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "materials", subcategory: "معاجين",
    colors: [], inStock: true, featured: false, rating: 4.6, reviews: 112, unit: "علبة", size: "5 كغ",
  },
  {
    id: "10", name: "مادة التأسيس البيضاء",
    description: "مادة تأسيس أولية عالية الجودة تعزز التصاق الطلاء وتوفر تغطية ممتازة. مناسبة للأسطح الجديدة والمطلية قديماً.",
    price: 18.000,
    image: "https://images.unsplash.com/photo-1601598765-c7d0e51f68e0?w=600&h=600&fit=crop&auto=format",
    category: "materials", subcategory: "مواد تأسيس",
    colors: [], inStock: true, featured: false, rating: 4.7, reviews: 88, unit: "علبة", size: "18 لتر",
  },
  {
    id: "11", name: "بكرة دهان احترافية",
    description: "بكرة دهان احترافية مع مقبض طويل قابل للتمديد. تضمن توزيعاً متساوياً للطلاء على الأسطح الكبيرة بأقل مجهود.",
    price: 4.500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "materials", subcategory: "أدوات الدهان",
    colors: [], inStock: true, featured: false, rating: 4.4, reviews: 156, unit: "قطعة", size: "23 سم",
  },
  {
    id: "12", name: "فرشاة دهان احترافية",
    description: "فرشاة دهان احترافية بشعر طبيعي عالي الجودة مناسبة لجميع أنواع الطلاء. لمسة نهائية ناعمة للتفاصيل والزوايا.",
    price: 2.500,
    image: "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "materials", subcategory: "أدوات الدهان",
    colors: [], inStock: true, featured: false, rating: 4.3, reviews: 203, unit: "قطعة", size: "4 بوصة",
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={11}
            className={i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">({reviews})</span>
    </div>
  );
}

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppSvg({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  onAdd,
  onView,
}: {
  product: Product;
  onAdd: (p: Product) => void;
  onView: (p: Product) => void;
}) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-2 end-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
            الأكثر مبيعاً
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              نفد المخزون
            </span>
          </div>
        )}
        <button
          onClick={() => onView(product)}
          className="absolute bottom-2 start-2 bg-white/95 text-foreground p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white"
        >
          <Eye size={14} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {product.subcategory}
          </span>
          <span className="text-[10px] text-muted-foreground">{product.size}</span>
        </div>
        <h3 className="font-bold text-foreground text-sm mb-1">{product.name}</h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        {product.colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.colors.slice(0, 6).map((c, i) => (
              <div
                key={i}
                title={c}
                className="w-4 h-4 rounded-full border border-border cursor-pointer hover:scale-125 transition-transform"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-primary">{product.price.toFixed(3)}</span>
            <span className="text-xs text-muted-foreground">ر.ع</span>
          </div>
          <button
            onClick={() => onAdd(product)}
            disabled={!product.inStock}
            className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Plus size={12} />
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Product Modal ────────────────────────────────────────────────────────────
function ProductModal({
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">نفد المخزون</span>
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {CAT_LABELS[product.category]}
                </span>
                <h2 className="text-2xl font-black text-foreground mt-2">{product.name}</h2>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
                <X size={20} />
              </button>
            </div>
            <StarRating rating={product.rating} reviews={product.reviews} />
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="flex gap-4 text-sm">
              <div className="bg-secondary rounded-lg px-3 py-2 text-center">
                <div className="font-bold text-foreground">{product.size}</div>
                <div className="text-xs text-muted-foreground">الحجم</div>
              </div>
              <div className="bg-secondary rounded-lg px-3 py-2 text-center">
                <div className="font-bold text-foreground">{product.unit}</div>
                <div className="text-xs text-muted-foreground">الوحدة</div>
              </div>
              <div className={`rounded-lg px-3 py-2 text-center ${product.inStock ? "bg-green-50" : "bg-red-50"}`}>
                <div className={`font-bold text-sm ${product.inStock ? "text-green-700" : "text-red-600"}`}>
                  {product.inStock ? "متوفر" : "غير متوفر"}
                </div>
                <div className="text-xs text-muted-foreground">المخزون</div>
              </div>
            </div>
            {product.colors.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">الألوان المتاحة</p>
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
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-secondary transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 font-bold text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 hover:bg-secondary transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-primary">{(product.price * qty).toFixed(3)}</span>
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
              href={`https://wa.me/96891234567?text=${encodeURIComponent(`مرحباً، أرغب في الاستفسار عن: ${product.name} - ${product.size}`)}`}
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

// ─── Cart Drawer ──────────────────────────────────────────────────────────────
function CartDrawer({
  cart,
  onClose,
  onUpdate,
  onRemove,
  onCheckout,
}: {
  cart: CartItem[];
  onClose: () => void;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
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
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors">
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
                <div key={item.product.id} className="flex gap-3 bg-secondary rounded-xl p-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground truncate">{item.product.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.product.size}</p>
                    <p className="text-sm font-black text-primary mt-1">
                      {(item.product.price * item.quantity).toFixed(3)} ر.ع
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdate(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdate(item.product.id, item.quantity + 1)}
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
                <span className="text-xl font-black text-primary">{total.toFixed(3)} ر.ع</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppSvg className="w-5 h-5" />
                إتمام الطلب عبر واتساب
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Product Form (Dashboard) ─────────────────────────────────────────────────
const EMPTY_FORM: Omit<Product, "id"> = {
  name: "", description: "", price: 0, image: "", category: "interior",
  subcategory: "", colors: [], inStock: true, featured: false,
  rating: 4.5, reviews: 0, unit: "علبة", size: "",
};

function ProductForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Product | null;
  onSave: (p: Product) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Product, "id">>(initial ? { ...initial } : { ...EMPTY_FORM });
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onCancel}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-foreground">
            {initial ? "تعديل المنتج" : "إضافة منتج جديد"}
          </h2>
          <button onClick={onCancel} className="p-1.5 hover:bg-secondary rounded-lg">
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">اسم المنتج *</label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="مثال: جوتن ماجستيك"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">وصف المنتج</label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">السعر (ر.ع) *</label>
              <input
                type="number"
                step="0.001"
                value={form.price}
                onChange={(e) => set("price", parseFloat(e.target.value) || 0)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الفئة</label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value as Category)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="interior">أصباغ داخلية</option>
                <option value="exterior">أصباغ خارجية</option>
                <option value="materials">مواد بناء</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الفئة الفرعية</label>
              <input
                value={form.subcategory}
                onChange={(e) => set("subcategory", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="دهان فاخر"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الحجم</label>
              <input
                value={form.size}
                onChange={(e) => set("size", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="18 لتر"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">الوحدة</label>
              <input
                value={form.unit}
                onChange={(e) => set("unit", e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">رابط الصورة *</label>
            <input
              value={form.image}
              onChange={(e) => set("image", e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="https://..."
              dir="ltr"
            />
            {form.image && (
              <img src={form.image} alt="معاينة" className="mt-2 h-20 w-20 object-cover rounded-lg border border-border" />
            )}
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1 block">ألوان المنتج</label>
            <div className="flex gap-2">
              <input
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="#FFFFFF"
                dir="ltr"
              />
              <button
                onClick={addColor}
                className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                إضافة
              </button>
            </div>
            {form.colors.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-2">
                {form.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-1 bg-secondary rounded-full px-2 py-1">
                    <div className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: c }} />
                    <span className="text-xs" dir="ltr">{c}</span>
                    <button
                      onClick={() => set("colors", form.colors.filter((_, j) => j !== i))}
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
                className={`w-10 h-5 rounded-full transition-colors relative ${form.inStock ? "bg-primary" : "bg-gray-300"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.inStock ? "right-0.5" : "left-0.5"}`} />
              </div>
              <span className="text-sm font-semibold">{form.inStock ? "متوفر" : "غير متوفر"}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set("featured", !form.featured)}
                className={`w-10 h-5 rounded-full transition-colors relative ${form.featured ? "bg-accent" : "bg-gray-300"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${form.featured ? "right-0.5" : "left-0.5"}`} />
              </div>
              <span className="text-sm font-semibold">{form.featured ? "مميز" : "عادي"}</span>
            </label>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
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

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const s = localStorage.getItem("nasreen_products");
      return s ? JSON.parse(s) : INIT_PRODUCTS;
    } catch { return INIT_PRODUCTS; }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const s = localStorage.getItem("nasreen_cart");
      return s ? JSON.parse(s) : [];
    } catch { return []; }
  });

  const [view, setView] = useState<View>("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminErr, setAdminErr] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState<"" | Category>("");
  const [contactForm, setContactForm] = useState({ name: "", phone: "", msg: "" });
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    localStorage.setItem("nasreen_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("nasreen_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.body.style.overflow = cartOpen || modalProduct || showForm ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen, modalProduct, showForm]);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.product.id === p.id);
      return ex ? prev.map((i) => i.product.id === p.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { product: p, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCart((p) => p.filter((i) => i.product.id !== id));
  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) removeFromCart(id);
    else setCart((p) => p.map((i) => i.product.id === id ? { ...i, quantity: qty } : i));
  };

  const whatsappCheckout = () => {
    const lines = cart.map((i) => `• ${i.product.name} (${i.quantity} ${i.product.unit}) = ${(i.product.price * i.quantity).toFixed(3)} ر.ع`).join("\n");
    const msg = `مرحباً محل النسرين 👋\nأرغب في طلب:\n\n${lines}\n\nالإجمالي: ${cartTotal.toFixed(3)} ر.ع`;
    window.open(`https://wa.me/96891234567?text=${encodeURIComponent(msg)}`);
  };

  const saveProduct = (p: Product) => {
    setProducts((prev) =>
      editingProduct ? prev.map((x) => x.id === p.id ? p : x) : [...prev, { ...p, id: Date.now().toString() }]
    );
    setShowForm(false);
    setEditingProduct(null);
  };

  const deleteProduct = (id: string) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      setProducts((p) => p.filter((x) => x.id !== id));
    }
  };

  const navTo = (v: View) => { setView(v); setMenuOpen(false); setSearch(""); window.scrollTo(0, 0); };

  const catProducts = useMemo(() => {
    let r = products;
    if (view === "interior" || view === "exterior" || view === "materials") {
      r = r.filter((p) => p.category === view);
    }
    if (search) r = r.filter((p) => p.name.includes(search) || p.description.includes(search));
    if (filterCategory) r = r.filter((p) => p.category === filterCategory);
    return r;
  }, [products, view, search, filterCategory]);

  const featured = useMemo(() => products.filter((p) => p.featured).slice(0, 8), [products]);
  const statsData = useMemo(() => ({
    total: products.length,
    inStock: products.filter((p) => p.inStock).length,
    outOfStock: products.filter((p) => !p.inStock).length,
    cats: Object.keys(CAT_LABELS).length,
  }), [products]);

  // ── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
  if (view === "dashboard") {
    if (!adminLoggedIn) {
      return (
        <div dir="rtl" className="min-h-screen bg-secondary flex items-center justify-center p-4 font-arabic">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl border border-border">
            <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mx-auto mb-5">
              <Lock size={24} className="text-primary" />
            </div>
            <h1 className="text-2xl font-black text-center text-foreground mb-1">لوحة التحكم</h1>
            <p className="text-sm text-center text-muted-foreground mb-6">محل النسرين - جوتن عُمان</p>
            <div className="space-y-3">
              <input
                type="password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (adminPass === ADMIN_PASS ? (setAdminLoggedIn(true), setAdminErr("")) : setAdminErr("كلمة المرور غير صحيحة"))}
                placeholder="كلمة المرور"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {adminErr && <p className="text-red-500 text-xs">{adminErr}</p>}
              <button
                onClick={() => adminPass === ADMIN_PASS ? (setAdminLoggedIn(true), setAdminErr("")) : setAdminErr("كلمة المرور غير صحيحة")}
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                دخول
              </button>
              <button
                onClick={() => navTo("home")}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                العودة إلى الموقع
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div dir="rtl" className="min-h-screen bg-secondary flex font-arabic">
        {/* Sidebar */}
        <aside className="w-60 bg-sidebar text-sidebar-foreground flex flex-col flex-shrink-0 min-h-screen">
          <div className="p-5 border-b border-sidebar-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">ن</span>
              </div>
              <div>
                <div className="font-black text-sm text-sidebar-foreground">النسرين</div>
                <div className="text-xs text-sidebar-foreground/60">لوحة التحكم</div>
              </div>
            </div>
          </div>
          <nav className="p-4 space-y-1 flex-1">
            {[
              { icon: BarChart2, label: "نظرة عامة" },
              { icon: Package, label: "المنتجات" },
              { icon: Settings, label: "الإعدادات" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors text-sm font-medium"
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-sidebar-border space-y-2">
            <button
              onClick={() => navTo("home")}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground text-xs transition-colors"
            >
              <Home size={14} />
              عرض الموقع
            </button>
            <button
              onClick={() => { setAdminLoggedIn(false); navTo("home"); }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:text-red-300 text-xs transition-colors"
            >
              <LogOut size={14} />
              تسجيل الخروج
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-5xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "إجمالي المنتجات", value: statsData.total, icon: Package, color: "bg-primary/10 text-primary" },
                { label: "متوفر", value: statsData.inStock, icon: Check, color: "bg-green-100 text-green-700" },
                { label: "غير متوفر", value: statsData.outOfStock, icon: TrendingUp, color: "bg-red-100 text-red-600" },
                { label: "الفئات", value: statsData.cats, icon: Layers, color: "bg-accent/10 text-accent" },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-border shadow-sm">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-2xl font-black text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-border shadow-sm">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-black text-foreground">إدارة المنتجات</h2>
                <button
                  onClick={() => { setEditingProduct(null); setShowForm(true); }}
                  className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-xl text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <PlusCircle size={16} />
                  إضافة منتج
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary text-xs text-muted-foreground">
                      <th className="text-right px-4 py-3 font-semibold">المنتج</th>
                      <th className="text-right px-4 py-3 font-semibold">الفئة</th>
                      <th className="text-right px-4 py-3 font-semibold">الحجم</th>
                      <th className="text-right px-4 py-3 font-semibold">السعر</th>
                      <th className="text-right px-4 py-3 font-semibold">المخزون</th>
                      <th className="text-right px-4 py-3 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg border border-border flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sm text-foreground">{p.name}</div>
                              <div className="text-xs text-muted-foreground">{p.subcategory}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                            {CAT_LABELS[p.category]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{p.size}</td>
                        <td className="px-4 py-3 font-black text-primary text-sm">{p.price.toFixed(3)} ر.ع</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                            {p.inStock ? "متوفر" : "نفد"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => { setEditingProduct(p); setShowForm(true); }}
                              className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                              title="تعديل"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => deleteProduct(p.id)}
                              className="p-1.5 text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="حذف"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {showForm && (
          <ProductForm
            initial={editingProduct}
            onSave={saveProduct}
            onCancel={() => { setShowForm(false); setEditingProduct(null); }}
          />
        )}
      </div>
    );
  }

  // ── PUBLIC SITE ──────────────────────────────────────────────────────────────
  const isCategory = view === "interior" || view === "exterior" || view === "materials";

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground font-arabic">

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          {/* Logo */}
          <button onClick={() => navTo("home")} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-base">ن</span>
            </div>
            <div className="text-right">
              <div className="font-black text-primary text-sm leading-none">النسرين</div>
              <div className="text-[10px] text-accent font-semibold leading-none">جوتن - عُمان</div>
            </div>
          </button>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {([
              { label: "الرئيسية", v: "home" as View },
              { label: "أصباغ داخلية", v: "interior" as View },
              { label: "أصباغ خارجية", v: "exterior" as View },
              { label: "مواد بناء", v: "materials" as View },
              { label: "عن المحل", v: "about" as View },
              { label: "تواصل معنا", v: "contact" as View },
            ]).map(({ label, v }) => (
              <button
                key={v}
                onClick={() => navTo(v)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 mr-auto md:mr-0">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-1.5">
                <Search size={14} className="text-muted-foreground" />
                <input
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث عن منتج..."
                  className="bg-transparent text-sm outline-none w-40 text-right"
                />
                <button onClick={() => { setSearchOpen(false); setSearch(""); }}><X size={14} /></button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-secondary rounded-xl transition-colors text-muted-foreground hover:text-foreground">
                <Search size={18} />
              </button>
            )}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-secondary rounded-xl transition-colors text-muted-foreground hover:text-foreground"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-accent text-white text-[10px] font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-secondary rounded-xl transition-colors">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-3 space-y-1">
            {([
              { label: "الرئيسية", v: "home" as View },
              { label: "أصباغ داخلية", v: "interior" as View },
              { label: "أصباغ خارجية", v: "exterior" as View },
              { label: "مواد بناء", v: "materials" as View },
              { label: "عن المحل", v: "about" as View },
              { label: "تواصل معنا", v: "contact" as View },
            ]).map(({ label, v }) => (
              <button
                key={v}
                onClick={() => navTo(v)}
                className={`w-full text-right px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${view === v ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Home View ── */}
      {view === "home" && (
        <>
          {/* Hero */}
          <section className="relative h-[85vh] min-h-[520px] flex items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop&auto=format"
              alt="غرفة مصممة بأصباغ جوتن"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/30" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-5 backdrop-blur-sm" style={{ color: "#f0c97a" }}>
                  <span>الوكيل الرسمي لجوتن في سلطنة عُمان</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                  جودة جوتن<br />
                  <span style={{ color: "#f0c97a" }}>خبرة النسرين</span>
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  نوفر لكم أفضل أصباغ جوتن العالمية للمنازل والمشاريع في سلطنة عُمان. خبرة تتجاوز 20 عاماً في خدمة عملائنا الكرام.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navTo("interior")}
                    className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 active:scale-100"
                  >
                    تسوق الآن
                  </button>
                  <button
                    onClick={() => navTo("contact")}
                    className="bg-white/15 text-white border border-white/30 font-bold px-6 py-3 rounded-xl hover:bg-white/25 transition-all backdrop-blur-sm"
                  >
                    تواصل معنا
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <div className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { val: "٢٠+", label: "سنة خبرة" },
                { val: "٥٠٠+", label: "لون متوفر" },
                { val: "٣٠٠٠+", label: "عميل راضٍ" },
                { val: "٢٤/٧", label: "دعم مستمر" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center py-2 border-l border-primary-foreground/10 last:border-0 first:border-0">
                  <div className="text-2xl font-black" style={{ color: "#f0c97a" }}>{val}</div>
                  <div className="text-xs text-primary-foreground/70">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-foreground mb-2">تصفح الفئات</h2>
              <p className="text-muted-foreground">اكتشف مجموعتنا الواسعة من المنتجات</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["interior", "exterior", "materials"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => navTo(cat)}
                  className="group relative h-64 rounded-2xl overflow-hidden text-white text-right shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={CAT_IMAGES[cat]}
                    alt={CAT_LABELS[cat]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-xs font-semibold text-white/70 mb-1">
                      {products.filter((p) => p.category === cat).length} منتج
                    </div>
                    <h3 className="text-xl font-black">{CAT_LABELS[cat]}</h3>
                    <p className="text-sm text-white/80 mt-0.5">{CAT_DESC[cat]}</p>
                    <div className="flex items-center gap-1 mt-3 text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" style={{ color: "#f0c97a" }}>
                      <span className="text-sm font-bold">تصفح الآن</span>
                      <ChevronRight size={14} className="rotate-180" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section className="bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black text-foreground">الأكثر مبيعاً</h2>
                  <p className="text-muted-foreground mt-1">المنتجات الأعلى تقييماً لدى عملائنا</p>
                </div>
                <button onClick={() => navTo("interior")} className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
                  عرض الكل
                  <ChevronRight size={14} className="rotate-180" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featured.map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setModalProduct} />
                ))}
              </div>
            </div>
          </section>

          {/* About Snippet */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560185893-a55b89a28cb7?w=700&h=500&fit=crop&auto=format"
                  alt="محل النسرين"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -start-4 bg-accent text-accent-foreground rounded-xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-black">٢٠+</div>
                  <div className="text-xs font-semibold opacity-90">سنة في الخدمة</div>
                </div>
              </div>
              <div>
                <span className="text-xs font-black text-accent tracking-widest uppercase mb-3 block">قصتنا</span>
                <h2 className="text-3xl font-black text-foreground mb-4">الوكيل الموثوق لجوتن في عُمان</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  منذ عام ٢٠٠٥، يخدم محل النسرين عملاءه الكرام في سلطنة عُمان بتوزيع أصباغ جوتن العالمية الشهيرة بجودتها الفائقة. نفخر بثقة آلاف الأسر والمقاولين الذين اختاروا منتجاتنا لإضفاء اللمسة المثالية على مشاريعهم.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    "أصباغ داخلية فاخرة",
                    "أصباغ خارجية متينة",
                    "مواد بناء متنوعة",
                    "خدمة عملاء مميزة",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => navTo("about")} className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                  اعرف أكثر عنا
                </button>
              </div>
            </div>
          </section>

          {/* Brands / Trust Section */}
          <div className="bg-primary/5 border-y border-border py-8">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-xs font-bold text-muted-foreground tracking-widest mb-5 uppercase">شركاؤنا الموثوقون</p>
              <div className="flex items-center justify-center gap-12 flex-wrap">
                {["JOTUN", "JOTASHIELD", "FENOMASTIC", "MAJESTIC", "ESSENCE"].map((b) => (
                  <span key={b} className="text-lg font-black text-muted-foreground/50 tracking-widest" dir="ltr">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Category View ── */}
      {isCategory && (
        <>
          {/* Banner */}
          <div className="relative h-40 overflow-hidden">
            <img src={CAT_IMAGES[view as Category]} alt={CAT_LABELS[view as Category]} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/75" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
              <h1 className="text-3xl font-black">{CAT_LABELS[view as Category]}</h1>
              <p className="text-white/70 text-sm mt-1">{CAT_DESC[view as Category]}</p>
            </div>
          </div>
          {/* Filter + Grid */}
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <p className="text-muted-foreground text-sm">{catProducts.length} منتج</p>
            </div>
            {catProducts.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Package size={48} strokeWidth={1} className="mx-auto mb-3" />
                <p>لا توجد منتجات</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {catProducts.map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setModalProduct} />
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* ── About View ── */}
      {view === "about" && (
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-14">
            <span className="text-xs font-black text-accent tracking-widest uppercase mb-3 block">من نحن</span>
            <h1 className="text-4xl font-black text-foreground mb-3">محل النسرين</h1>
            <p className="text-muted-foreground text-lg">الوكيل الموثوق لأصباغ جوتن في سلطنة عُمان منذ ٢٠٠٥</p>
          </div>
          <div className="relative mb-16">
            <img
              src="https://images.unsplash.com/photo-1560185893-a55b89a28cb7?w=1200&h=500&fit=crop&auto=format"
              alt="محل النسرين"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-2xl font-black text-foreground mb-4">قصتنا</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                تأسس محل النسرين عام ٢٠٠٥ على يد مجموعة من المختصين في مجال الأصباغ والدهانات، بهدف توفير أفضل المنتجات العالمية للمستهلك العُماني بأسعار تنافسية.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                اليوم، ونحن نفخر بثقة آلاف الأسر والشركات التي تعاملت معنا على مدار السنوات الماضية. نحن لا نبيع أصباغاً فحسب، بل نقدم حلولاً متكاملة للدهان والبناء.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-foreground mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                أن نكون المرجع الأول والموثوق لمنتجات جوتن في سلطنة عُمان، وأن نساهم في تجميل كل منزل ومبنى في ربوع وطننا الحبيب.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                نسعى دائماً لتقديم أعلى مستويات الخدمة وضمان رضا عملائنا من خلال منتجات أصيلة ومعتمدة مباشرةً من جوتن العالمية.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Shield, label: "منتجات أصيلة مضمونة" },
              { icon: Users, label: "فريق متخصص ومدرب" },
              { icon: Package, label: "مخزون ضخم متاح دائماً" },
              { icon: MessageCircle, label: "خدمة عملاء مميزة" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-secondary rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Contact View ── */}
      {view === "contact" && (
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-accent tracking-widest uppercase mb-3 block">اتصل بنا</span>
            <h1 className="text-4xl font-black text-foreground mb-3">تواصل معنا</h1>
            <p className="text-muted-foreground">نحن هنا لخدمتك. لا تتردد في التواصل معنا</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h2 className="text-xl font-black text-foreground">معلومات التواصل</h2>
              {[
                { icon: Phone, label: "الهاتف", value: "+٩٦٨ ٩١٢٣٤٥٦٧" },
                { icon: Mail, label: "البريد الإلكتروني", value: "info@nasreen-oman.com" },
                { icon: MapPin, label: "العنوان", value: "مسقط، سلطنة عُمان" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 bg-secondary rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="font-bold text-foreground">{value}</div>
                  </div>
                </div>
              ))}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppSvg className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-green-700">واتساب</div>
                  <a
                    href="https://wa.me/96891234567"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-green-700 hover:underline"
                  >
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
              <div className="bg-secondary rounded-xl p-4">
                <h3 className="font-bold text-foreground mb-2 text-sm">أوقات العمل</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>السبت - الخميس</span><span className="font-semibold text-foreground">٨ص - ١٠م</span></div>
                  <div className="flex justify-between"><span>الجمعة</span><span className="font-semibold text-foreground">٤م - ١٠م</span></div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
              {contactSent ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-black text-foreground">تم الإرسال بنجاح!</h3>
                  <p className="text-muted-foreground text-sm">سيتواصل معك فريقنا في أقرب وقت ممكن</p>
                  <button onClick={() => setContactSent(false)} className="text-primary font-semibold text-sm hover:underline">
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-black text-foreground mb-5">أرسل رسالة</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">الاسم</label>
                      <input
                        value={contactForm.name}
                        onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border border-border bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="اسمك الكريم"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">رقم الهاتف</label>
                      <input
                        value={contactForm.phone}
                        onChange={(e) => setContactForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full border border-border bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="+٩٦٨ ..."
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">الرسالة</label>
                      <textarea
                        rows={4}
                        value={contactForm.msg}
                        onChange={(e) => setContactForm((f) => ({ ...f, msg: e.target.value }))}
                        className="w-full border border-border bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        placeholder="اكتب استفسارك هنا..."
                      />
                    </div>
                    <button
                      onClick={() => {
                        const msg = `مرحباً محل النسرين 👋\nالاسم: ${contactForm.name}\nالهاتف: ${contactForm.phone}\nالرسالة: ${contactForm.msg}`;
                        window.open(`https://wa.me/96891234567?text=${encodeURIComponent(msg)}`);
                        setContactSent(true);
                        setContactForm({ name: "", phone: "", msg: "" });
                      }}
                      className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      إرسال الرسالة
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Search Results ── */}
      {search && view === "home" && (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-xl font-black text-foreground mb-6">نتائج البحث عن: "{search}"</h2>
          {catProducts.length === 0 ? (
            <p className="text-muted-foreground">لا توجد نتائج</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {catProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setModalProduct} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="bg-foreground text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-base">ن</span>
              </div>
              <div>
                <div className="font-black text-white text-sm">النسرين</div>
                <div className="text-[10px] text-white/60">جوتن - عُمان</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              الوكيل الرسمي لأصباغ جوتن العالمية في سلطنة عُمان منذ عام ٢٠٠٥
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { href: "#", label: "إنستقرام" },
                { href: "#", label: "فيسبوك" },
                { href: "#", label: "تويتر" },
              ].map(({ href, label }) => (
                <a key={label} href={href} className="w-8 h-8 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors text-xs font-bold">
                  {label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black text-sm mb-4">الصفحات</h3>
            <div className="space-y-2">
              {([
                { label: "الرئيسية", v: "home" as View },
                { label: "أصباغ داخلية", v: "interior" as View },
                { label: "أصباغ خارجية", v: "exterior" as View },
                { label: "مواد بناء", v: "materials" as View },
              ]).map(({ label, v }) => (
                <button key={v} onClick={() => navTo(v)} className="block text-white/60 hover:text-white text-sm transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black text-sm mb-4">الشركة</h3>
            <div className="space-y-2">
              {([
                { label: "عن المحل", v: "about" as View },
                { label: "تواصل معنا", v: "contact" as View },
              ]).map(({ label, v }) => (
                <button key={v} onClick={() => navTo(v)} className="block text-white/60 hover:text-white text-sm transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black text-sm mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2"><Phone size={14} /><span>+٩٦٨ ٩١٢٣٤٥٦٧</span></div>
              <div className="flex items-center gap-2"><Mail size={14} /><span>info@nasreen-oman.com</span></div>
              <div className="flex items-center gap-2"><MapPin size={14} /><span>مسقط، سلطنة عُمان</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-white/40">
            <span>© ٢٠٢٦ محل النسرين. جميع الحقوق محفوظة.</span>
            <button
              onClick={() => navTo("dashboard")}
              className="hover:text-white/60 transition-colors"
            >
              لوحة التحكم
            </button>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href="https://wa.me/96891234567"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 hover:scale-110 active:scale-95 transition-all"
        title="تواصل عبر واتساب"
      >
        <WhatsAppSvg className="w-7 h-7" />
      </a>

      {/* ── Overlays ── */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={whatsappCheckout}
        />
      )}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onAdd={addToCart}
        />
      )}
    </div>
  );
}
