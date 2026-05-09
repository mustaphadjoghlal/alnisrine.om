import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";
import { subscribeToSiteInfo } from "../../lib/firestore";
import { INIT_SITE_INFO } from "../constants";

export function Footer() {
  const [siteInfo, setSiteInfo] = useState(INIT_SITE_INFO);

  useEffect(() => {
    const unsub = subscribeToSiteInfo(setSiteInfo);
    return unsub;
  }, []);

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="النسرين"
                className="h-14 w-14 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="font-black text-xl">النسرين</h3>
                <p className="text-xs text-blue-200">للأصباغ ومواد البناء</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              نقدم أفضل أصباغ جوتن ومواد البناء في سلطنة عُمان. جودة عالمية وخدمة
              مميزة لتحقيق أحلامك.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "الرئيسية" },
                { to: "/interior", label: "أصباغ داخلية" },
                { to: "/exterior", label: "أصباغ خارجية" },
                { to: "/materials", label: "مواد بناء" },
                { to: "/about", label: "من نحن" },
                { to: "/contact", label: "اتصل بنا" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-blue-100 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span dir="ltr">{siteInfo.phone}</span>
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>{siteInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{siteInfo.address}</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-blue-200">
            © 2026 النسرين - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
