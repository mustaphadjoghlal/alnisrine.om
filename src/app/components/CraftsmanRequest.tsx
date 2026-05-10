import { useState, useEffect } from "react";
import { Wrench, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { addServiceRequest, subscribeToSiteInfo } from "../../lib/firestore";
import { INIT_SITE_INFO } from "../constants";
import type { ServiceType } from "../types";
import { WhatsAppSvg } from "./WhatsAppSvg";

export function CraftsmanRequest() {
  const [whatsapp, setWhatsapp] = useState(INIT_SITE_INFO.whatsappNumber);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState<ServiceType>("painter");
  const [serviceDesc, setServiceDesc] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const unsub = subscribeToSiteInfo((info) => {
      setWhatsapp(info.whatsappNumber || INIT_SITE_INFO.whatsappNumber);
    });
    return unsub;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await addServiceRequest({
        name,
        phone,
        serviceType,
        serviceDesc,
        location,
        notes,
        createdAt: new Date().toISOString(),
        status: "pending",
      });

      const waText = encodeURIComponent(
        `مرحباً، طلب ${serviceType === "painter" ? "صباغ" : "حرفي"} جديد:\n` +
        `الاسم: ${name}\n` +
        `الهاتف: ${phone}\n` +
        `الخدمة: ${serviceDesc || (serviceType === "painter" ? "صباغ" : "حرفي")}\n` +
        `الموقع: ${location}\n` +
        (notes ? `ملاحظات: ${notes}` : "")
      );
      window.open(`https://api.whatsapp.com/send?phone=${whatsapp}&text=${waText}`, "_blank");

      setDone(true);
      setName(""); setPhone(""); setServiceDesc(""); setLocation(""); setNotes("");
      setTimeout(() => setDone(false), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl mb-4">
            <Wrench size={28} />
          </div>
          <h2 className="text-3xl font-black text-foreground mb-2">اطلب صباغاً أو حرفياً</h2>
          <p className="text-muted-foreground">أرسل طلبك وسنتواصل معك في أقرب وقت</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            {done ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <CheckCircle size={48} className="text-green-500" />
                <h3 className="text-xl font-black text-green-700">تم إرسال طلبك بنجاح!</h3>
                <p className="text-muted-foreground text-sm">سنتواصل معك على رقم الهاتف المدخل في أقرب وقت.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType("painter")}
                    className={`py-2.5 rounded-xl font-bold text-sm border-2 transition-all ${serviceType === "painter" ? "bg-amber-500 text-white border-amber-500" : "border-border text-muted-foreground hover:border-amber-300"}`}
                  >
                    🖌️ صباغ
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType("other")}
                    className={`py-2.5 rounded-xl font-bold text-sm border-2 transition-all ${serviceType === "other" ? "bg-amber-500 text-white border-amber-500" : "border-border text-muted-foreground hover:border-amber-300"}`}
                  >
                    🔧 حرفي آخر
                  </button>
                </div>

                {serviceType === "other" && (
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">نوع الخدمة المطلوبة</label>
                    <input
                      value={serviceDesc}
                      onChange={(e) => setServiceDesc(e.target.value)}
                      placeholder="مثال: سباك، كهربائي، نجار..."
                      className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">الاسم الكريم</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل اسمك"
                    className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">رقم الهاتف</label>
                  <div className="relative">
                    <Phone size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9XXXXXXXX"
                      dir="ltr"
                      className="w-full pr-9 border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">الموقع / المنطقة</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="مثال: العامرات، المعبيلة..."
                      className="w-full pr-9 border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">ملاحظات إضافية (اختياري)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="أي تفاصيل إضافية..."
                    rows={2}
                    className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-amber-500 text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send size={16} />
                  {sending ? "جارٍ الإرسال..." : "أرسل الطلب عبر واتساب"}
                  <WhatsAppSvg className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <h3 className="font-black text-lg mb-3">لماذا تختارنا؟</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "✅ حرفيون موثوقون ومُعتمدون",
                  "⏱️ استجابة سريعة خلال ساعات",
                  "💰 أسعار تنافسية وشفافة",
                  "🛡️ ضمان جودة العمل",
                  "📍 تغطية جميع مناطق مسقط",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">{item}</li>
                ))}
              </ul>
            </div>

            <a
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-5 rounded-2xl hover:bg-green-600 transition-colors shadow-md"
            >
              <WhatsAppSvg className="w-6 h-6" />
              <div>
                <div className="text-sm">تفضل تواصل مباشرة</div>
                <div className="text-xs font-normal opacity-90">واتساب متاح 8 ص — 8 م</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
