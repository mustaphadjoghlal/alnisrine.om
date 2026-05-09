import { Star, Package, Shield, Users, TrendingUp, Award } from "lucide-react";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";
import { INIT_SITE_INFO, SITE_INFO_KEY } from "../constants";
import type { SiteInfo } from "../types";

function getSiteInfo(): SiteInfo {
  try {
    const saved = localStorage.getItem(SITE_INFO_KEY);
    return saved ? JSON.parse(saved) : INIT_SITE_INFO;
  } catch {
    return INIT_SITE_INFO;
  }
}

export function AboutPage() {
  const info = getSiteInfo();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">من نحن</h1>
          <p className="text-xl text-blue-100">
            تعرف على قصة نجاحنا ورؤيتنا لخدمتكم
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={logo}
              alt="النسرين"
              className="w-64 h-64 object-contain mx-auto bg-white rounded-3xl shadow-2xl p-8"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black text-foreground mb-6">
              {info.storeName}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {info.about.split("\n").filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3">منتجات أصلية</h3>
            <p className="text-sm text-muted-foreground">
              جميع منتجاتنا أصلية 100% من شركة جوتن العالمية
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3">فريق محترف</h3>
            <p className="text-sm text-muted-foreground">
              خبراء متخصصون لمساعدتك في اختيار المنتج المناسب
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3">خبرة طويلة</h3>
            <p className="text-sm text-muted-foreground">
              سنوات من الخبرة في خدمة عملائنا الكرام
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center mb-12">
          <h2 className="text-3xl font-black mb-4">رسالتنا</h2>
          <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {info.mission}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black mb-6">لماذا تختار النسرين؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <Star className="w-12 h-12 mx-auto mb-3 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">جودة مضمونة</h3>
              <p className="text-sm text-blue-100">
                منتجات عالمية بأعلى معايير الجودة
              </p>
            </div>
            <div>
              <Package className="w-12 h-12 mx-auto mb-3 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">توصيل سريع</h3>
              <p className="text-sm text-blue-100">
                خدمة توصيل سريعة لجميع المناطق
              </p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">ضمان الشركة</h3>
              <p className="text-sm text-blue-100">
                جميع المنتجات بضمان الشركة المصنعة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
