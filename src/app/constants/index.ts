import type { Category, Product } from "../types";

// ─── Category Constants ───────────────────────────────────────────────────────
export const CAT_LABELS: Record<Category, string> = {
  interior: "أصباغ داخلية",
  exterior: "أصباغ خارجية",
  materials: "مواد بناء",
};

export const CAT_DESC: Record<Category, string> = {
  interior: "طلاء داخلي فاخر لكل غرفة",
  exterior: "حماية متكاملة للواجهات",
  materials: "أدوات ومواد بناء متنوعة",
};

export const CAT_IMAGES: Record<Category, string> = {
  interior:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
  exterior:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format",
  materials:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format",
};

export const ADMIN_PASS = "nasreen2024";
export const WHATSAPP_NUMBER = "96891234567";

// ─── Initial Products ─────────────────────────────────────────────────────────
export const INIT_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "جوتن ماجستيك",
    description:
      "طلاء داخلي فائق الجودة عالي النعومة، مقاوم للبقع وقابل للغسيل. يمنح جدرانك مظهراً ناعماً ومميزاً يدوم لسنوات. مناسب للمناطق عالية الاستخدام كالمطابخ والحمامات وغرف المعيشة.",
    price: 45.5,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "interior",
    subcategory: "دهان فاخر",
    colors: ["#FFFFFF", "#FFF8E7", "#E8D5C4", "#B8C4D4", "#C4D4B8"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 187,
    unit: "علبة",
    size: "18 لتر",
  },
  {
    id: "2",
    name: "جوتن اسينس",
    description:
      "طلاء داخلي قابل للغسيل بتقنية متطورة توفر غطاءً ممتازاً وألواناً نابضة بالحياة. سهل التطبيق ويجف بسرعة مع مقاومة عالية للرطوبة.",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "interior",
    subcategory: "قابل للغسيل",
    colors: ["#FFFFFF", "#F5F5F5", "#E0E8F0", "#F0E8E0", "#E8F0E0"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 143,
    unit: "علبة",
    size: "4 لتر",
  },
  {
    id: "3",
    name: "جوتابلاست الداخلي",
    description:
      "طلاء داخلي اقتصادي عالي الجودة مناسب للمنازل والمكاتب والمدارس. يوفر تغطية ممتازة بطبقة واحدة مع سطح أملس ومتجانس.",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=600&fit=crop&auto=format",
    category: "interior",
    subcategory: "اقتصادي",
    colors: ["#FFFFFF", "#FFFAF0", "#F5F0E8"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89,
    unit: "علبة",
    size: "18 لتر",
  },
  {
    id: "4",
    name: "جوتن ليفينغ",
    description:
      "طلاء زخرفي داخلي يمنح جدرانك تأثيرات جمالية فريدة. متوفر بمئات الألوان لتعكس ذوقك وأسلوبك المميز في الديكور.",
    price: 12.5,
    image:
      "https://images.unsplash.com/photo-1562184552-997c461abbe8?w=600&h=600&fit=crop&auto=format",
    category: "interior",
    subcategory: "زخرفي",
    colors: ["#D4A5A5", "#A5C4D4", "#A5D4B8", "#D4C4A5", "#C4A5D4"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 62,
    unit: "علبة",
    size: "1 لتر",
  },
  {
    id: "5",
    name: "جوتاشيلد الخارجي",
    description:
      "طلاء خارجي فائق المقاومة ضد العوامل الجوية القاسية. يحمي واجهات منزلك من الأشعة فوق البنفسجية والرطوبة لمدة تصل إلى 10 سنوات.",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهان فاخر",
    colors: ["#FFFFFF", "#F5F5F0", "#E8E0D8", "#D8E0E8"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 234,
    unit: "علبة",
    size: "18 لتر",
  },
  {
    id: "6",
    name: "فينوماستيك الخارجي",
    description:
      "طلاء خارجي قابل للغسيل بتقنية متطورة لمقاومة الطحالب والفطريات. مثالي للمناخ الرطب في سلطنة عُمان.",
    price: 42.0,
    image:
      "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "مقاوم للطحالب",
    colors: ["#FFFFFF", "#E8E8E0", "#D4DCE4"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 178,
    unit: "علبة",
    size: "18 لتر",
  },
  {
    id: "7",
    name: "هيدروشيلد للأسطح",
    description:
      "طلاء عازل للماء عالي الكفاءة مخصص للأسطح والشرفات. يمنع تسرب المياه ويحمي الهيكل الإنشائي من الرطوبة والتآكل.",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "عازل مائي",
    colors: ["#FFFFFF", "#E0E8E0"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 95,
    unit: "علبة",
    size: "4 لتر",
  },
  {
    id: "8",
    name: "روف كوت الأسطح",
    description:
      "طلاء خاص للأسطح المسطحة يوفر حماية قصوى من الحرارة الشديدة. يعكس الحرارة ويوفر الطاقة ويمنع التشقق في الصيف الحار.",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهان الأسطح",
    colors: ["#FFFFFF", "#C8C8C0"],
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 67,
    unit: "علبة",
    size: "5 لتر",
  },
  {
    id: "9",
    name: "معجون البولي فيلر",
    description:
      "معجون تسوية عالي الجودة لملء الشقوق والتشققات وتسوية الأسطح قبل الدهان. يلتصق بقوة على الخرسانة والجبس والطوب.",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "materials",
    subcategory: "معاجين",
    colors: [],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 112,
    unit: "علبة",
    size: "5 كغ",
  },
  {
    id: "10",
    name: "مادة التأسيس البيضاء",
    description:
      "مادة تأسيس أولية عالية الجودة تعزز التصاق الطلاء وتوفر تغطية ممتازة. مناسبة للأسطح الجديدة والمطلية قديماً.",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1601598765-c7d0e51f68e0?w=600&h=600&fit=crop&auto=format",
    category: "materials",
    subcategory: "مواد تأسيس",
    colors: [],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 88,
    unit: "علبة",
    size: "18 لتر",
  },
  {
    id: "11",
    name: "بكرة دهان احترافية",
    description:
      "بكرة دهان احترافية مع مقبض طويل قابل للتمديد. تضمن توزيعاً متساوياً للطلاء على الأسطح الكبيرة بأقل مجهود.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "materials",
    subcategory: "أدوات الدهان",
    colors: [],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 156,
    unit: "قطعة",
    size: "23 سم",
  },
  {
    id: "12",
    name: "فرشاة دهان احترافية",
    description:
      "فرشاة دهان احترافية بشعر طبيعي عالي الجودة مناسبة لجميع أنواع الطلاء. لمسة نهائية ناعمة للتفاصيل والزوايا.",
    price: 2.5,
    image:
      "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "materials",
    subcategory: "أدوات الدهان",
    colors: [],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 203,
    unit: "قطعة",
    size: "4 بوصة",
  },
];
