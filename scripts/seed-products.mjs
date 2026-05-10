import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { randomUUID } from "crypto";
import { createInterface } from "readline";

function prompt(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (ans) => { rl.close(); resolve(ans); }));
}

const firebaseConfig = {
  apiKey: "AIzaSyB8gqNqLz_cXnzMVt5D37bYEkjmOw9PEL8",
  authDomain: "alnisrineom.firebaseapp.com",
  projectId: "alnisrineom",
  storageBucket: "alnisrineom.firebasestorage.app",
  messagingSenderId: "637963326343",
  appId: "1:637963326343:web:d1a0eb60d8572a303bb922",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// المنتجات المستوردة من ملف Excel
// category: "interior" | "exterior" | "materials"
// image وprice فارغة — تُضاف لاحقاً من لوحة الإدارة
const products = [
  {
    name: "جوتاشيلد إكستريم",
    description: "دهان أكريليك خارجي فائق الجودة يوفر حماية متطورة للواجهات ضد الظروف المناخية القاسية، مع تقنية الحماية الفائقة من الشمس والحرارة",
    category: "exterior",
    subcategory: "الواجهات الخارجية",
    features: "مقاومة عالية للعوامل الجوية، حماية من الأشعة فوق البنفسجية، مقاوم للتشقق",
  },
  {
    name: "جوتاشيلد كولرز",
    description: "دهان خارجي بألوان عصرية متنوعة يحافظ على رونقه وبريقه لفترات طويلة مع مقاومة ممتازة للعوامل الجوية",
    category: "exterior",
    subcategory: "الواجهات والجدران الخارجية",
    features: "ألوان زاهية، ثبات عالي للألوان، مقاومة للبهتان",
  },
  {
    name: "جوتاشيلد ألترا ريبل",
    description: "دهان خارجي بتقنية الطلاء الذاتي التنظيف يمنع التصاق الأوساخ والغبار، مما يحافظ على نظافة الواجهات لفترة أطول",
    category: "exterior",
    subcategory: "الواجهات الخارجية",
    features: "طارد للماء والأوساخ، سهل التنظيف، تقنية اللوتس",
  },
  {
    name: "ماكسي",
    description: "دهان داخلي إيمالشن اقتصادي يوفر تغطية جيدة وملمس ناعم للجدران والأسقف الداخلية بجودة عالية",
    category: "interior",
    subcategory: "الجدران والأسقف الداخلية",
    features: "سهل التطبيق، تغطية ممتازة، اقتصادي",
  },
  {
    name: "ليدي بيور كولر",
    description: "دهان داخلي صديق للبيئة بمكونات طبيعية وألوان عصرية، مثالي للمنازل الصحية وغرف الأطفال",
    category: "interior",
    subcategory: "الجدران الداخلية",
    features: "صديق للبيئة، خالي من المواد الضارة، ألوان نقية",
  },
  {
    name: "جوتن سينس",
    description: "دهان داخلي متطور بتقنية مضادة للبكتيريا والفطريات، مثالي للمطابخ والحمامات والمستشفيات",
    category: "interior",
    subcategory: "الجدران والأسقف الداخلية",
    features: "مضاد للبكتيريا، قابل للغسيل، روائح منخفضة",
  },
  {
    name: "جوتاشيلد كولر إكستريم",
    description: "دهان خارجي بألوان داكنة مبتكرة مع تقنية عكس الحرارة، يحافظ على برودة السطح ويمنع التشقق الناتج عن الحرارة",
    category: "exterior",
    subcategory: "الواجهات الخارجية",
    features: "ألوان داكنة مقاومة للحرارة، تقنية Cool Paint، ثبات استثنائي",
  },
  {
    name: "فينوماستيك إيمالشن",
    description: "دهان داخلي كلاسيكي بجودة موثوقة يوفر تغطية ممتازة وملمس ناعم للجدران الداخلية",
    category: "interior",
    subcategory: "الجدران والأسقف الداخلية",
    features: "تغطية عالية، سهل التطبيق، قابل للغسيل",
  },
  {
    name: "ليدي سوبريم فينيش",
    description: "دهان داخلي فائق الجودة بلمسة نهائية حريرية فاخرة، مثالي للصالات وغرف الاستقبال الراقية",
    category: "interior",
    subcategory: "الجدران الداخلية الراقية",
    features: "لمسة نهائية فاخرة، مقاومة عالية للبقع، سهل التنظيف",
  },
  {
    name: "جوتاشيلد أنتي مولد",
    description: "دهان متخصص بتركيبة مضادة للعفن والفطريات، مثالي للمناطق عالية الرطوبة والحمامات والمطابخ",
    category: "materials",
    subcategory: "المناطق الرطبة والحمامات",
    features: "مضاد للعفن والفطريات، مقاوم للرطوبة، حماية طويلة الأمد",
  },
  {
    name: "جوتاشيلد تيكس",
    description: "دهان خارجي بملمس محبب ديكوري يخفي عيوب الأسطح ويعطي مظهراً جمالياً مميزاً للواجهات",
    category: "exterior",
    subcategory: "الواجهات الخارجية",
    features: "ملمس محبب، إخفاء العيوب، مظهر جمالي",
  },
  {
    name: "جوتاشيلد كولر لاست",
    description: "دهان خارجي بتقنية حماية اللون المتقدمة يضمن ثبات الألوان لمدة 15 سنة دون بهتان",
    category: "exterior",
    subcategory: "الواجهات الخارجية",
    features: "ضمان 15 سنة على الألوان، ثبات فائق، مقاومة للبهتان",
  },
  {
    name: "جوتن مالتي برايمر",
    description: "طلاء أساس متعدد الاستخدامات يصلح لمختلف الأسطح كالخشب والمعدن والجبس، يوفر التصاقاً قوياً للطبقة النهائية",
    category: "materials",
    subcategory: "أساس للأسطح المختلفة",
    features: "متعدد الاستخدامات، التصاق ممتاز، مقاوم للصدأ",
  },
  {
    name: "ليدي ديزاينر تشويس",
    description: "مجموعة دهانات داخلية فاخرة بألوان مختارة من قبل مصممي الديكور، توفر أناقة استثنائية للمساحات الداخلية",
    category: "interior",
    subcategory: "التصاميم الداخلية الراقية",
    features: "ألوان مصممة بعناية، لمسة نهائية حريرية، جودة فائقة",
  },
  {
    name: "بينجوين إنامل",
    description: "دهان زيتي لامع عالي الجودة للأخشاب والمعادن، يوفر حماية متينة ومظهراً أنيقاً للأبواب والنوافذ",
    category: "materials",
    subcategory: "الأبواب والنوافذ والحديد",
    features: "لمعة عالية، مقاومة للخدش، متانة فائقة",
  },
  {
    name: "جوتاشيلد برايمر",
    description: "طلاء أساس خارجي متخصص يحمي الجدران من القلويات ويضمن التصاقاً مثالياً لطبقة الدهان النهائية",
    category: "materials",
    subcategory: "أساس للواجهات الخارجية",
    features: "مقاومة القلويات، التصاق ممتاز، حماية إضافية",
  },
  {
    name: "ليدي بالانس",
    description: "دهان داخلي ذكي ينظم رطوبة الغرفة ويمنع نمو البكتيريا، مثالي لخلق بيئة داخلية صحية ومريحة",
    category: "interior",
    subcategory: "الجدران الداخلية",
    features: "تنظيم الرطوبة، مضاد للبكتيريا، صحي",
  },
  {
    name: "جوتاشيلد سيلر",
    description: "مادة عازلة تحضيرية تعالج مسامية الأسطح وتوحد الامتصاص، مما يوفر استهلاك الدهان ويحسن النتيجة النهائية",
    category: "materials",
    subcategory: "معالجة الأسطح قبل الدهان",
    features: "معالجة التشققات، توحيد الامتصاص، توفير الدهان",
  },
];

async function seed() {
  const email = await prompt("البريد الإلكتروني (المدير): ");
  const password = await prompt("كلمة المرور: ");

  console.log("جاري تسجيل الدخول...");
  await signInWithEmailAndPassword(auth, email, password);
  console.log("تم تسجيل الدخول بنجاح!\n");

  console.log(`جاري إضافة ${products.length} منتج إلى Firestore...`);

  for (const p of products) {
    const id = randomUUID();
    const product = {
      id,
      name: p.name,
      description: p.description,
      category: p.category,
      subcategory: p.subcategory,
      // --- تُضاف لاحقاً من لوحة الإدارة ---
      price: 0,
      image: "",
      // ------------------------------------
      sizes: [],
      basicColorPrice: 0,
      colors: [],
      showContactForOtherColors: false,
      inStock: true,
      featured: false,
      rating: 0,
      reviews: 0,
      unit: "لتر",
    };

    await setDoc(doc(db, "products", id), product);
    console.log(`✓ ${p.name}`);
  }

  console.log("\nتم إضافة جميع المنتجات بنجاح!");
  console.log("يمكنك الآن الدخول على لوحة الإدارة /admin لإضافة الصورة والسعر لكل منتج.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("خطأ:", err);
  process.exit(1);
});
