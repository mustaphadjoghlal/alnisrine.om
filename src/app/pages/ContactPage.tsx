import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { WhatsAppSvg } from "../components/WhatsAppSvg";
import { INIT_SITE_INFO } from "../constants";
import type { SiteInfo } from "../types";
import { subscribeToSiteInfo } from "../../lib/firestore";

export function ContactPage() {
  const [info, setInfo] = useState<SiteInfo>(INIT_SITE_INFO);

  useEffect(() => {
    const unsub = subscribeToSiteInfo(setInfo);
    return unsub;
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">اتصل بنا</h1>
          <p className="text-xl text-blue-100">نحن هنا للإجابة على جميع استفساراتكم</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black text-foreground mb-6">معلومات الاتصال</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              تواصل معنا عبر أي من الطرق التالية، ونحن سنكون سعداء بخدمتك ومساعدتك في اختيار المنتجات المناسبة لمشروعك.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                  <a href={`tel:${info.phone}`} className="text-blue-600 hover:underline">{info.phone}</a>
                  <p className="text-sm text-muted-foreground mt-1">{info.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0"><Mail size={24} /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                  <a href={`mailto:${info.email}`} className="text-blue-600 hover:underline">{info.email}</a>
                  <p className="text-sm text-muted-foreground mt-1">سنرد على رسالتك في أقرب وقت ممكن</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0"><MapPin size={24} /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">العنوان</h3>
                  <p className="text-foreground">{info.address}</p>
                  <p className="text-sm text-muted-foreground mt-1">متاح التوصيل لجميع مناطق السلطنة</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0"><Clock size={24} /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                  <p className="text-foreground">{info.workingHours}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://api.whatsapp.com/send?phone=${info.whatsappNumber}&text=${encodeURIComponent("مرحباً، أرغب في الاستفسار عن منتجاتكم")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <WhatsAppSvg className="w-6 h-6" />
              تواصل عبر واتساب
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-black text-foreground mb-6">أرسل لنا رسالة</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">الاسم الكامل</label>
                <input type="text" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="أدخل اسمك" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">رقم الهاتف</label>
                <input type="tel" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="+968 XXXX XXXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
                <input type="email" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">الرسالة</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" placeholder="اكتب رسالتك هنا..." />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
