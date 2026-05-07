import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-blue-700 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors"
        >
          <Home size={20} />
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
