import { useEffect, useState } from "react";
import { ExternalLink, Palette } from "lucide-react";

const JOTUN_COLOR_URL = "https://www.jotun.com/oman/en/colours/colour-ideas/colour-selector.html";

export function OurColorsPage() {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    document.title = "من ألواننا — النسرين";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Palette size={32} />
          <h1 className="text-3xl font-black">من ألواننا</h1>
        </div>
        <p className="text-blue-100 text-sm max-w-xl mx-auto">
          استكشف أكثر من ألف لون من مجموعة جوتن الكاملة — اختر لونك وشاهده على الجدران قبل الشراء
        </p>
        <a
          href={JOTUN_COLOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
        >
          <ExternalLink size={16} />
          فتح في نافذة جديدة
        </a>
      </div>

      {!iframeError ? (
        <iframe
          src={JOTUN_COLOR_URL}
          title="Jotun Colour Selector"
          className="w-full border-0"
          style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
          onError={() => setIframeError(true)}
          allow="fullscreen"
        />
      ) : (
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
          <Palette size={64} className="text-blue-200 mb-6" />
          <h2 className="text-2xl font-black text-gray-800 mb-3">اختر لونك من جوتن</h2>
          <p className="text-gray-500 max-w-md mb-8">
            تصفّح أكثر من ألف لون وشاهد كيف تبدو على جدران منزلك مباشرةً عبر موقع جوتن الرسمي
          </p>
          <a
            href={JOTUN_COLOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors"
          >
            <ExternalLink size={18} />
            استعرض ألوان جوتن الكاملة
          </a>
        </div>
      )}
    </div>
  );
}
