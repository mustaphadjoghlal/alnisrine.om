import type { Category, Product, SiteInfo } from "../types";

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


export const ADMIN_PASS = "nasreen2024";
export const WHATSAPP_NUMBER = "96891234567";

export const SITE_INFO_KEY = "siteInfo";

export const INIT_SITE_INFO: SiteInfo = {
  storeName: "محل النسرين للأصباغ ومواد البناء",
  mission:
    "رؤيتنا هي أن نكون المرجع الأول في سلطنة عُمان لكل ما يتعلق بالأصباغ ومواد البناء، من خلال تقديم جودة عالمية وخدمة عملاء استثنائية.",
  about:
    "منذ تأسيسنا في سلطنة عُمان، أصبحنا الوجهة المفضلة لآلاف العملاء الباحثين عن أفضل أصباغ جوتن ومواد البناء عالية الجودة. نؤمن بأن منزلك يستحق الأفضل، لذلك نوفر لك منتجات أصلية 100% بأسعار تنافسية.",
  whatsappNumber: "96891234567",
  phone: "+968 9123 4567",
  email: "info@nasreen.om",
  address: "مسقط، سلطنة عُمان",
  workingHours: "السبت - الخميس: 8:00 ص - 8:00 م",
  categoryImages: {
    interior: "",
    exterior: "",
    materials: "",
  },
};

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
    sizes: [
      { label: "1 لتر", price: 6.5 },
      { label: "4 لتر", price: 18.0 },
      { label: "18 لتر", price: 45.5 },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 187,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 28.0 },
      { label: "18 لتر", price: 95.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 143,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 22.0 },
      { label: "18 لتر", price: 75.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89,
    unit: "علبة",
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
    sizes: [
      { label: "1 لتر", price: 12.5 },
      { label: "4 لتر", price: 38.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 62,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 55.0 },
      { label: "18 لتر", price: 185.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 234,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 42.0 },
      { label: "18 لتر", price: 155.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 178,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 32.0 },
      { label: "18 لتر", price: 115.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 95,
    unit: "علبة",
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
    sizes: [
      { label: "5 لتر", price: 28.0 },
      { label: "18 لتر", price: 85.0 },
    ],
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 67,
    unit: "علبة",
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
    sizes: [
      { label: "5 كغ", price: 8.5 },
      { label: "20 كغ", price: 28.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 112,
    unit: "علبة",
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
    sizes: [
      { label: "4 لتر", price: 18.0 },
      { label: "18 لتر", price: 65.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 88,
    unit: "علبة",
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
    sizes: [{ label: "23 سم", price: 4.5 }],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 156,
    unit: "قطعة",
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
    sizes: [{ label: "4 بوصة", price: 2.5 }],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 203,
    unit: "قطعة",
  },
];
