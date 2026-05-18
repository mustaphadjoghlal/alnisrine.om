// ============================================================
// سكريبت إضافة جميع منتجات المحل — قائمة الأسعار 2026
// الاستخدام: افتح /admin وسجّل دخولك، ثم افتح Console والصق هذا الكود
// الأسعار: شاملة ضريبة القيمة المضافة 5%
// ============================================================

(async () => {
  const PROJECT = "alnisrineom";
  const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

  async function getAuthToken() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open("firebaseLocalStorageDb");
      req.onerror = () => reject("فشل فتح IndexedDB");
      req.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction("firebaseLocalStorage", "readonly");
        const store = tx.objectStore("firebaseLocalStorage");
        const all = store.getAll();
        all.onsuccess = () => {
          const entry = all.result.find(r =>
            r.fbase_key && r.fbase_key.includes("firebase:authUser")
          );
          if (!entry) return reject("❌ غير مسجّل الدخول. افتح /admin وسجّل دخولك أولاً.");
          const token = entry.value?.stsTokenManager?.accessToken;
          if (!token) return reject("❌ لم يُعثر على رمز المصادقة.");
          resolve(token);
        };
      };
    });
  }

  async function addProduct(p, token) {
    const id = `p_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const fields = {
      id:          { stringValue: id },
      name:        { stringValue: p.name },
      description: { stringValue: p.description },
      price:       { doubleValue: p.price },
      image:       { stringValue: p.image },
      category:    { stringValue: p.category },
      subcategory: { stringValue: p.subcategory },
      sizes:       { arrayValue: { values: p.sizes.map(s => ({
        mapValue: { fields: {
          label: { stringValue: s.label },
          price: { doubleValue: s.price }
        }}
      }))}},
      inStock:  { booleanValue: p.inStock },
      featured: { booleanValue: p.featured },
      rating:   { doubleValue: p.rating },
      reviews:  { integerValue: p.reviews },
      unit:     { stringValue: p.unit },
    };
    const res = await fetch(`${BASE}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ fields }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return id;
  }

  // ── صورة افتراضية مشتركة لكل منتج ──
  const IMG = {
    ext: "https://images.unsplash.com/photo-1562184552-997c461abbe8?w=600&h=600&fit=crop&auto=format",
    int: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
    mat: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&auto=format",
  };

  const products = [

    // ══════════════════════════════════════════════════════════
    //  خارجية — جوتاشيلد CL (Colour Long)
    // ══════════════════════════════════════════════════════════
    {
      name: "جوتاشيلد إيترنا A بيس 16.2 لتر",
      description: "دهان خارجي فائق الجودة — يحافظ على شدة اللون ويبقى نظيفاً وناصعاً لسنوات طويلة. أقصى درجة تحمل في فئته مع قابلية ممتازة للغسل وتكنولوجيا مضادة للغبار.",
      price: 51.4, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 51.4 }],
      image: IMG.ext, inStock: true, featured: true, rating: 4.9, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد CL مطفي A 16.2 لتر",
      description: "دهان خارجي بتشطيب مطفي أنيق — أداء متقدم للون مع حماية مضمونة للأسمنت وقلة الحاجة للصيانة. مثالي للواجهات الحديثة.",
      price: 44.3, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 44.3 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد CL مطفي B 16.2 لتر",
      description: "دهان خارجي بتشطيب مطفي — ألوان تدوم طويلاً مع مقاومة عالية للغبار والأتربة والعوامل الجوية القاسية.",
      price: 39.8, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 39.8 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد CL حرير A 16.2 لتر",
      description: "دهان خارجي حريري الملمس — تشطيب ناعم أنيق مع ألوان تدوم طويلاً وحماية قوية من العوامل المناخية.",
      price: 45.9, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 45.9 }],
      image: IMG.ext, inStock: true, featured: true, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد CL حرير B 16.2 لتر",
      description: "دهان خارجي بتشطيب حريري — ألوان زاهية تدوم طويلاً مع مقاومة للغبار والرطوبة وعوامل الطقس.",
      price: 42.9, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 42.9 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد لامع A 16.2 لتر",
      description: "دهان خارجي لامع فائق الجودة — تشطيب براق مميز مع حماية قوية للواجهات وألوان تدوم لسنوات.",
      price: 50.8, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 50.8 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد لامع B 16.2 لتر",
      description: "دهان خارجي لامع — تشطيب براق جميل بألوان مقاومة للأشعة فوق البنفسجية والعوامل الجوية القاسية.",
      price: 46.2, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "16.2 لتر", price: 46.2 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد لامع أبيض 18 لتر",
      description: "دهان خارجي لامع أبيض فائق الإضاءة — تشطيب براق ناصع مع أعلى درجة مقاومة للغسيل والعوامل الجوية.",
      price: 54.0, category: "exterior", subcategory: "دهانات",
      sizes: [{ label: "18 لتر", price: 54.0 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.8, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  خارجية — تيكس وديكور
    // ══════════════════════════════════════════════════════════
    {
      name: "جوتاشيلد تيكس فاين B 16.2 لتر",
      description: "دهان خارجي ناعم الملمس ذو جودة عالية — أعلى أداء للون مع حماية تدوم طويلاً وتغطية فعالة من التشققات. الألوان متوفرة عند الطلب.",
      price: 42.8, category: "exterior", subcategory: "تيكس",
      sizes: [{ label: "16.2 لتر", price: 42.8 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد تيكس ميديم B 16.2 لتر",
      description: "دهان خارجي عالي الجودة يعطي مظهراً عصرياً متوسط الخشونة — أعلى أداء للون مع تغطية متقدمة لتشققات الأسطح. الألوان متوفرة عند الطلب.",
      price: 42.7, category: "exterior", subcategory: "تيكس",
      sizes: [{ label: "16.2 لتر", price: 42.7 }],
      image: IMG.ext, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتاشيلد ديكور ترافرتين B 16.2 لتر",
      description: "دهان خارجي مميز بمظهره الحجري العريق — يحاكي جمال حجر الترافرتين الطبيعي مع أعلى أداء للون وحماية تدوم طويلاً. يغطي التموجات البسيطة والألوان متوفرة عند الطلب.",
      price: 31.5, category: "exterior", subcategory: "ديكور",
      sizes: [{ label: "16.2 لتر", price: 31.5 }],
      image: IMG.ext, inStock: true, featured: true, rating: 4.8, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  خارجية — تأسيس وبادئ
    // ══════════════════════════════════════════════════════════
    {
      name: "بادئ جوتن مضاد للقلوية 18 لتر",
      description: "طلاء تأسيسي خارجي عالي المقاومة للقلوية — يساعد في تقوية الخرسانة ويوفر تماسكاً أفضل للطلاء الخارجي وحماية مثلى أمام تأثير القلويات.",
      price: 19.3, category: "exterior", subcategory: "تأسيس",
      sizes: [{ label: "18 لتر", price: 19.3 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "بادئ جوتن نافذ 18 لتر",
      description: "بادئ نافذ عالي الجودة — يتغلغل عمقاً في الأسطح المسامية لتعزيز التماسك وتقليل امتصاص الطلاء وضمان تغطية مثالية.",
      price: 41.5, category: "exterior", subcategory: "تأسيس",
      sizes: [{ label: "18 لتر", price: 41.5 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "بادئ أكريليك EM جوتن 18 لتر",
      description: "بادئ أكريليك متعدد الأغراض — يوفر تأسيساً قوياً للأسطح قبل الدهان الخارجي ويحسن التصاق الطلاء على الأسطح الجديدة والقديمة.",
      price: 13.7, category: "exterior", subcategory: "تأسيس",
      sizes: [{ label: "18 لتر", price: 13.7 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "حشو الطوب جوتن 18 لتر",
      description: "مادة حشو عالية الجودة للأسطح الخارجية — يملأ المسام ويوفر سطحاً أملساً مثالياً لاستقبال الدهانات الخارجية مع تقليل الاستهلاك.",
      price: 20.9, category: "exterior", subcategory: "تأسيس",
      sizes: [{ label: "18 لتر", price: 20.9 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "طلاء الأسطح جوتن 18 لتر",
      description: "طلاء أسطح مرن عالي الجودة — يحمي الأسطح من التسرب والتشقق مع مقاومة ممتازة للأشعة فوق البنفسجية وتقلبات درجات الحرارة.",
      price: 21.0, category: "exterior", subcategory: "أسطح",
      sizes: [{ label: "18 لتر", price: 21.0 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — جوتن نووفو
    // ══════════════════════════════════════════════════════════
    {
      name: "جوتن نووفو B وC بيس 14.4 لتر",
      description: "دهان داخلي زخرفي فاخر — تشطيبات مميزة مع ألوان حية تدوم طويلاً ومقاومة للغسيل المتكرر. يمنح الجدران لمسة راقية فريدة.",
      price: 27.3, category: "interior", subcategory: "جوتن",
      sizes: [{ label: "14.4 لتر", price: 27.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "جوتن نووفو أبيض 18 لتر",
      description: "دهان داخلي زخرفي فاخر أبيض ناصع — ألوان حية تدوم طويلاً مع مقاومة ممتازة للغسيل وتغطية فائقة للجدران الداخلية.",
      price: 27.3, category: "interior", subcategory: "جوتن",
      sizes: [{ label: "18 لتر", price: 27.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — فينوماستيك (F Series)
    // ══════════════════════════════════════════════════════════
    {
      name: "فينوماستيك مات 01 18 لتر",
      description: "دهان داخلي مطفي اقتصادي — تغطية ممتازة لأسطح الجدران الداخلية بتشطيب مطفي أنيق ومقاوم للغسيل.",
      price: 26.7, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "18 لتر", price: 26.7 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك مات A 16.2 لتر",
      description: "دهان داخلي مطفي فاخر — ألوان تدوم طويلاً مع تغطية عالية وتشطيب مطفي ناعم مقاوم للغسيل. الألوان متوفرة عند الطلب.",
      price: 32.0, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "16.2 لتر", price: 32.0 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك مات B 16.2 لتر",
      description: "دهان داخلي مطفي — تشطيب ناعم مطفي مع ألوان ثابتة وتغطية ممتازة للجدران الداخلية.",
      price: 31.3, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "16.2 لتر", price: 31.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك ماي هوم حرير A 16.2 لتر",
      description: "دهان داخلي حريري فاخر — تشطيب حريري ناعم ومقاوم للبقع مع ألوان زاهية تدوم لسنوات. مثالي لغرف المعيشة والنوم.",
      price: 36.8, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "16.2 لتر", price: 36.8 }],
      image: IMG.int, inStock: true, featured: true, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك ماي هوم حرير أبيض 18 لتر",
      description: "دهان داخلي حريري فاخر أبيض — تشطيب حريري ناعم ومقاوم للبقع لجميع أسطح الجدران الداخلية.",
      price: 38.7, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "18 لتر", price: 38.7 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك ريتش مات A بيس 16.2 لتر",
      description: "دهان داخلي مطفي فاخر ذو تغطية غنية — ألوان عميقة تدوم طويلاً مع تشطيب مطفي راقٍ لأجمل ديكورات الجدران.",
      price: 39.6, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "16.2 لتر", price: 39.6 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك وندر وول لايف ولوكس A 16.2 لتر",
      description: "دهان داخلي متميز بأعلى درجة من الأناقة — يمنع نمو البكتيريا والعفن مع تشطيب فاخر مقاوم للبقع. الخيار الأمثل للمطابخ والحمامات.",
      price: 48.4, category: "interior", subcategory: "فينوماستيك",
      sizes: [{ label: "16.2 لتر", price: 48.4 }],
      image: IMG.int, inStock: true, featured: true, rating: 4.9, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — مينا فينوماستيك (F Enamel)
    // ══════════════════════════════════════════════════════════
    {
      name: "فينوماستيك مينا لامع A 16.2 لتر",
      description: "مينا داخلية عالية اللمعان — تشطيب براق فائق المقاومة مثالي للأبواب والنوافذ والأسطح الخشبية والمعدنية الداخلية.",
      price: 66.4, category: "interior", subcategory: "مينا",
      sizes: [{ label: "16.2 لتر", price: 66.4 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.8, reviews: 0, unit: "علبة",
    },
    {
      name: "فينوماستيك مينا مطفي A 16.2 لتر",
      description: "مينا داخلية مطفية — تشطيب مطفي أنيق لأعلى درجة من المقاومة على الأبواب والأسطح الخشبية والمعدنية.",
      price: 68.3, category: "interior", subcategory: "مينا",
      sizes: [{ label: "16.2 لتر", price: 68.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — دوروسان
    // ══════════════════════════════════════════════════════════
    {
      name: "دوروسان آكشن A وAA 16.2 لتر",
      description: "دهان داخلي عالي الجودة — تشطيب ناعم مع ألوان تدوم طويلاً ومقاومة ممتازة للغسيل المتكرر. الألوان متوفرة عند الطلب.",
      price: 20.0, category: "interior", subcategory: "دوروسان",
      sizes: [{ label: "16.2 لتر", price: 20.0 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "دوروسان آكشن أبيض 18 لتر",
      description: "دهان داخلي أبيض عالي الجودة — تغطية ممتازة بتشطيب ناعم ومقاوم للغسيل بسعر مناسب.",
      price: 20.3, category: "interior", subcategory: "دوروسان",
      sizes: [{ label: "18 لتر", price: 20.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "دوروسان بيض الغراب حرير A 16.2 لتر",
      description: "دهان داخلي بتشطيب بيض الغراب الحريري — لمسة فاخرة مع مقاومة ممتازة للغسيل والبقع. مناسب للمطابخ والمناطق ذات الاستخدام المكثف.",
      price: 23.2, category: "interior", subcategory: "دوروسان",
      sizes: [{ label: "16.2 لتر", price: 23.2 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.7, reviews: 0, unit: "علبة",
    },
    {
      name: "دوروسان مات A 16.2 لتر",
      description: "دهان داخلي مطفي — تغطية ممتازة بتشطيب مطفي ناعم مناسب لجميع أسطح الجدران الداخلية. الألوان متوفرة عند الطلب.",
      price: 17.0, category: "interior", subcategory: "دوروسان",
      sizes: [{ label: "16.2 لتر", price: 17.0 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "دوروسان مات أبيض 18 لتر",
      description: "دهان داخلي مطفي أبيض اقتصادي — تغطية جيدة بتشطيب مطفي مناسب لجميع المساحات الداخلية.",
      price: 16.0, category: "interior", subcategory: "دوروسان",
      sizes: [{ label: "18 لتر", price: 16.0 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — إيزي كوت
    // ══════════════════════════════════════════════════════════
    {
      name: "إيزي كوت مات A وAA 16.2 لتر",
      description: "دهان داخلي مطفي عالي الجودة — تغطية فائقة بطبقة واحدة مع ألوان ثابتة ومقاومة للغسيل. الألوان متوفرة عند الطلب.",
      price: 25.3, category: "interior", subcategory: "إيزي كوت",
      sizes: [{ label: "16.2 لتر", price: 25.3 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "إيزي كوت مات أبيض 18 لتر",
      description: "دهان داخلي مطفي أبيض — تغطية فائقة بطبقة واحدة مع تشطيب ناعم اقتصادي لجميع الأسطح الداخلية.",
      price: 26.9, category: "interior", subcategory: "إيزي كوت",
      sizes: [{ label: "18 لتر", price: 26.9 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "إيزي كوت حرير A 16.2 لتر",
      description: "دهان داخلي حريري — تشطيب حريري أنيق مع تغطية عالية ومقاومة ممتازة للغسيل. الألوان متوفرة عند الطلب.",
      price: 30.5, category: "interior", subcategory: "إيزي كوت",
      sizes: [{ label: "16.2 لتر", price: 30.5 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  داخلية — بنغالاك
    // ══════════════════════════════════════════════════════════
    {
      name: "بنغالاك لامع A 16.2 لتر",
      description: "دهان لامع فائق الجودة — تشطيب براق مقاوم للبقع مناسب للجدران الداخلية والأسطح التي تحتاج إلى تنظيف متكرر.",
      price: 36.7, category: "interior", subcategory: "بنغالاك",
      sizes: [{ label: "16.2 لتر", price: 36.7 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "بنغالاك لامع أبيض 18 لتر",
      description: "دهان لامع أبيض فائق الجودة — تشطيب براق ناصع مقاوم للبقع والغسيل المتكرر. مثالي للمطابخ والحمامات.",
      price: 34.4, category: "interior", subcategory: "بنغالاك",
      sizes: [{ label: "18 لتر", price: 34.4 }],
      image: IMG.int, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  مواد بناء — بادئ
    // ══════════════════════════════════════════════════════════
    {
      name: "بادئ فينوماستيك 18 لتر",
      description: "بادئ داخلي عالي الجودة — يوفر تأسيساً مثالياً للأسطح الجديدة ويحسن التصاق الدهانات الداخلية ويقلل من الاستهلاك.",
      price: 16.8, category: "materials", subcategory: "بادئ",
      sizes: [{ label: "18 لتر", price: 16.8 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "بادئ PVA أساسي 18 لتر",
      description: "بادئ PVA متعدد الاستخدامات — يُستخدم لتأسيس وتقوية الأسطح قبل التشطيب مع تحسين التصاق المواد.",
      price: 7.9, category: "materials", subcategory: "بادئ",
      sizes: [{ label: "18 لتر", price: 7.9 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "بادئ PVA 18 لتر",
      description: "بادئ PVA عالي الجودة — يُستخدم لتأسيس الأسطح وتحسين التصاق مواد التشطيب المختلفة من دهانات وملاط.",
      price: 11.2, category: "materials", subcategory: "بادئ",
      sizes: [{ label: "18 لتر", price: 11.2 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "بادئ تيكس 18 لتر",
      description: "بادئ خاص بمواد التيكس الخارجية — يوفر تأسيساً مثالياً للأسطح قبل تطبيق مواد التيكس ويضمن تماسكاً أفضل.",
      price: 20.6, category: "materials", subcategory: "بادئ",
      sizes: [{ label: "18 لتر", price: 20.6 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },

    // ══════════════════════════════════════════════════════════
    //  مواد بناء — ملاط وحشو
    // ══════════════════════════════════════════════════════════
    {
      name: "ستوكو أساسي 17 لتر",
      description: "ملاط تشطيب أساسي اقتصادي — يستخدم لتسوية وتأسيس الأسطح قبل الدهان مع قوة تماسك عالية وسهولة التطبيق.",
      price: 6.1, category: "materials", subcategory: "ملاط",
      sizes: [{ label: "17 لتر", price: 6.1 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "ستوكو بوتي 17 لتر",
      description: "بوتي تشطيب عالي الجودة — يوفر سطحاً أملساً ومتجانساً مثالياً لاستقبال الدهانات وإخفاء التشققات الدقيقة.",
      price: 7.7, category: "materials", subcategory: "ملاط",
      sizes: [{ label: "17 لتر", price: 7.7 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "ستوكو أنتيكا 8.5 لتر",
      description: "ملاط ديكوري زخرفي فاخر — يعطي الأسطح مظهراً تراثياً أصيلاً مع قوة تماسك عالية ومقاومة للرطوبة.",
      price: 23.0, category: "materials", subcategory: "ملاط",
      sizes: [{ label: "8.5 لتر", price: 23.0 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.6, reviews: 0, unit: "علبة",
    },
    {
      name: "جولي فيكس أبيض 18 لتر",
      description: "مادة حشو وتسوية متعددة الاستخدامات — تُستخدم لإصلاح التشققات وتسوية الأسطح قبل الدهان الداخلي والخارجي.",
      price: 9.3, category: "materials", subcategory: "حشو",
      sizes: [{ label: "18 لتر", price: 9.3 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },
    {
      name: "تيكسو كومباوند 17 لتر",
      description: "مركب تشطيب متعدد الاستخدامات — يستخدم لتسوية وتنعيم الأسطح وإصلاح التشققات البسيطة تمهيداً للدهان.",
      price: 11.6, category: "materials", subcategory: "حشو",
      sizes: [{ label: "17 لتر", price: 11.6 }],
      image: IMG.mat, inStock: true, featured: false, rating: 4.5, reviews: 0, unit: "علبة",
    },

  ];

  // ── تشغيل السكريبت ──
  console.log("🔐 جاري استخراج رمز المصادقة...");
  let token;
  try {
    token = await getAuthToken();
    console.log("✅ تم الحصول على رمز المصادقة");
  } catch (err) {
    console.error(err);
    return;
  }

  console.log(`\n🚀 بدء إضافة ${products.length} منتج...\n`);
  let added = 0, failed = 0;

  for (const product of products) {
    try {
      await addProduct(product, token);
      added++;
      console.log(`✅ (${added + failed}/${products.length}) ${product.name}`);
    } catch (err) {
      failed++;
      console.error(`❌ فشل: ${product.name} — ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\n🎉 اكتمل! تمت إضافة ${added} منتجاً بنجاح${failed > 0 ? ` (فشل ${failed})` : ""}`);
})();
