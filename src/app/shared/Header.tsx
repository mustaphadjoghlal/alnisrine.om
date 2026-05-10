import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X, Phone, MapPin, Mail } from "lucide-react";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";
import { subscribeToSiteInfo } from "../../lib/firestore";
import { INIT_SITE_INFO } from "../constants";

export function Header({
  cartCount,
  onCartOpen,
}: {
  cartCount: number;
  onCartOpen: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [siteInfo, setSiteInfo] = useState(INIT_SITE_INFO);

  useEffect(() => {
    const unsub = subscribeToSiteInfo(setSiteInfo);
    return unsub;
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/interior", label: "أصباغ داخلية" },
    { path: "/exterior", label: "أصباغ خارجية" },
    { path: "/materials", label: "مواد بناء" },
    { path: "/our-colors", label: "من ألواننا" },
    { path: "/about", label: "من نحن" },
    { path: "/contact", label: "اتصل بنا" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <Phone size={12} />
              <span dir="ltr">{siteInfo.phone}</span>
            </a>
            <a
              href={`mailto:${siteInfo.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <Mail size={12} />
              <span>{siteInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{siteInfo.address}</span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="النسرين" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="font-black text-xl text-blue-700">النسرين</h1>
                <p className="text-xs text-muted-foreground">
                  للأصباغ ومواد البناء
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative pb-1 ${
                    isActive(link.path)
                      ? "text-blue-700"
                      : "text-foreground hover:text-blue-600"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={onCartOpen}
                className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ShoppingCart size={20} className="text-foreground" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -end-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="lg:hidden mt-4 pt-4 border-t border-border space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
