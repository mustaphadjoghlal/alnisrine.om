/**
 * سكريبت إضافة منتجات الدهان الخارجي من جوتن
 * لتشغيله: استدعِ seedExteriorProducts() من لوحة تحكم المتصفح أو من AdminPage
 */

import { saveProduct } from "./firestore";
import type { Product } from "../app/types";

const EXTERIOR_PRODUCTS: Omit<Product, "id">[] = [
  {
    name: "جوتاشيلد إيترنا",
    description:
      "دهان خارجي فائق الجودة — يحافظ على شدة اللون ويبقى نظيفاً وناصعاً لسنوات طويلة. أقصى درجة تحمل في فئته مع قابلية ممتازة للغسل وتكنولوجيا مضادة للغبار.",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1562184552-997c461abbe8?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 25.0 },
      { label: "15 لتر", price: 65.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 210,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد كانڤا",
    description:
      "دهان خارجي بقوام بارز مميز — ألوان تدوم طويلاً مع مقاومة عالية للغبار والأتربة. يُطبَّق بطبقة واحدة ويمنح الواجهات مظهراً فنياً راقياً.",
    price: 58.0,
    image:
      "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 22.0 },
      { label: "15 لتر", price: 58.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 154,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد نووڤو",
    description:
      "دهان زخرفي خارجي ينبض بالحياة — تشطيبات زخرفية مميزة مع ألوان تدوم طويلاً ومقاومة فائقة للظروف المناخية. تطبيق سريع وسهل في طبقة واحدة.",
    price: 60.0,
    image:
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 23.0 },
      { label: "15 لتر", price: 60.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 98,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ألوان تدوم مطفي",
    description:
      "دهان خارجي عالي الجودة بتشطيب مطفي أنيق — أداء متقدم للون مع حماية مضمونة للأسمنت وقلة الحاجة للصيانة. مثالي للواجهات الحديثة.",
    price: 52.0,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 20.0 },
      { label: "18 لتر", price: 52.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 87,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ألوان تدوم حرير",
    description:
      "دهان خارجي عالي الجودة بتشطيب حريري ناعم — أداء متقدم للون مع حماية مضمونة للأسمنت وقلة الحاجة للصيانة. يمنح الواجهات بريقاً خفيفاً جذاباً.",
    price: 54.0,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 21.0 },
      { label: "18 لتر", price: 54.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 112,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد سوبردورابل الحريري",
    description:
      "تصميم سلس وقوة تحمل خارقة — حماية استثنائية لمدة 20 عاماً بتقنية أكريليك السيلكون المتقدمة. ملمس حريري جميل وألوان تدوم طويلاً حتى في أقسى الظروف المناخية.",
    price: 85.0,
    image:
      "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "دهانات",
    sizes: [
      { label: "4 لتر", price: 32.0 },
      { label: "15 لتر", price: 85.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 267,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ديكور ترافرتين",
    description:
      "دهان خارجي مميز بمظهره الحجري العريق — يحاكي جمال حجر الترافرتين الطبيعي مع أعلى أداء للون وحماية تدوم طويلاً. يغطي التموجات البسيطة والألوان متوفرة عند الطلب.",
    price: 72.0,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "ديكور",
    sizes: [
      { label: "4 لتر", price: 28.0 },
      { label: "15 لتر", price: 72.0 },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 143,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ديكور أنتيك تيكس",
    description:
      "يمنح المباني مظهراً عتيقاً مميزاً وفريداً — أعلى أداء للون مع تغطية لتشققات الأسطح وحماية تدوم طويلاً. الاختيار المثالي للمباني التي تريد طابعاً كلاسيكياً راقياً.",
    price: 68.0,
    image:
      "https://images.unsplash.com/photo-1601598765-c7d0e51f68e0?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "ديكور",
    sizes: [
      { label: "4 لتر", price: 26.0 },
      { label: "15 لتر", price: 68.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 89,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ديكور هاي بيلد",
    description:
      "دهان خارجي يمنح المباني مظهراً تراثياً أصيلاً — أعلى أداء للون وحماية تدوم طويلاً مع قدرة على تغطية تشققات وتموجات الأسطح بفعالية عالية.",
    price: 70.0,
    image:
      "https://images.unsplash.com/photo-1562184552-997c461abbe8?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "ديكور",
    sizes: [
      { label: "4 لتر", price: 27.0 },
      { label: "15 لتر", price: 70.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 76,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ديكور هاي بيلد فاين",
    description:
      "دهان خارجي يمنح المباني مظهراً تراثياً عصرياً — أعلى أداء للون وحماية تدوم طويلاً. يغطي تشققات وتموجات الأسطح بملمس ناعم ومتطور.",
    price: 70.0,
    image:
      "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "ديكور",
    sizes: [
      { label: "4 لتر", price: 27.0 },
      { label: "15 لتر", price: 70.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 64,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ديكور تراديشنال تيكس",
    description:
      "دهان خارجي يعطي الواجهات لمسة راقية بطابع تقليدي أصيل — أعلى أداء للون وحماية تدوم طويلاً مع قدرة على إخفاء تشققات وتموجات الأسطح.",
    price: 68.0,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "ديكور",
    sizes: [
      { label: "4 لتر", price: 26.0 },
      { label: "15 لتر", price: 68.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 58,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد تيكس فاين",
    description:
      "دهان خارجي ناعم الملمس ذو جودة عالية — أعلى أداء للون مع حماية تدوم طويلاً وحماية فعالة من التشققات. يعطي الواجهات ملمساً دقيقاً متناسقاً والألوان متوفرة عند الطلب.",
    price: 62.0,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "تيكس",
    sizes: [
      { label: "4 لتر", price: 24.0 },
      { label: "15 لتر", price: 62.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 93,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد تيكس ميديم",
    description:
      "دهان خارجي عالي الجودة يعطي مظهراً عصرياً متوسط الخشونة — أعلى أداء للون مع حماية تدوم طويلاً وتغطية متقدمة لتشققات الأسطح. الألوان متوفرة عند الطلب.",
    price: 62.0,
    image:
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "تيكس",
    sizes: [
      { label: "4 لتر", price: 24.0 },
      { label: "15 لتر", price: 62.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 71,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد تيكس ألترا",
    description:
      "دهان خارجي متين للغاية يمنح مظهر قشر البرتقال المميز — أعلى أداء للون وأعلى حماية ضد التصدعات مع قدرة على تغطية التشققات الكبيرة. حماية تدوم طويلاً والألوان متوفرة عند الطلب.",
    price: 68.0,
    image:
      "https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "تيكس",
    sizes: [
      { label: "4 لتر", price: 26.0 },
      { label: "15 لتر", price: 68.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 115,
    unit: "علبة",
  },
  {
    name: "جوتاشيلد ألكالي رزيستنت برايمر",
    description:
      "طلاء تأسيس خارجي عالي المقاومة للقلوية — يساعد في تقوية الخرسانة ويوفر نفاذية أمثل إلى الطبقة السفلية مما يحقق تماسكاً أفضل للطلاء الخارجي ويوفر حماية مثلى أمام تأثير القلويات.",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
    category: "exterior",
    subcategory: "تأسيس",
    sizes: [
      { label: "4 لتر", price: 14.0 },
      { label: "18 لتر", price: 35.0 },
    ],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 178,
    unit: "علبة",
  },
];

export async function seedExteriorProducts(): Promise<void> {
  console.log(`بدء إضافة ${EXTERIOR_PRODUCTS.length} منتج خارجي...`);
  let added = 0;
  for (const product of EXTERIOR_PRODUCTS) {
    const id = `ext_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    await saveProduct({ ...product, id });
    added++;
    console.log(`✅ (${added}/${EXTERIOR_PRODUCTS.length}) تمت إضافة: ${product.name}`);
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log("🎉 تمت إضافة جميع المنتجات الخارجية بنجاح!");
}
