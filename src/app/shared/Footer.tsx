import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";

export function Footer() {
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
              <Link
                to="/"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                to="/interior"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                أصباغ داخلية
              </Link>
              <Link
                to="/exterior"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                أصباغ خارجية
              </Link>
              <Link
                to="/materials"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                مواد بناء
              </Link>
              <Link
                to="/about"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-blue-100 hover:text-white transition-colors"
              >
                اتصل بنا
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+96891234567"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>+968 9123 4567</span>
              </a>
              <a
                href="mailto:info@nasreen.om"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>info@nasreen.om</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>مسقط، سلطنة عُمان</span>
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
