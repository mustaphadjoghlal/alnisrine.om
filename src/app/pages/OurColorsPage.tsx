import { useEffect } from "react";

interface ColorSwatch {
  name: string;
  hex: string;
  family: string;
}

const COLOR_FAMILIES: { label: string; colors: ColorSwatch[] }[] = [
  {
    label: "الأبيض والبيج",
    colors: [
      { name: "أبيض ناصع", hex: "#FFFFFF", family: "white" },
      { name: "أبيض الثلج", hex: "#F5F5F0", family: "white" },
      { name: "أبيض مكسر", hex: "#FAF6EE", family: "white" },
      { name: "بيج فاتح", hex: "#F5EDD6", family: "white" },
      { name: "قشدي دافئ", hex: "#EDE0C4", family: "white" },
    ],
  },
  {
    label: "الأزرق والفيروزي",
    colors: [
      { name: "أزرق سماوي", hex: "#5B9BD5", family: "blue" },
      { name: "أزرق هادئ", hex: "#3A7FC1", family: "blue" },
      { name: "أزرق بحري", hex: "#1B4F8A", family: "blue" },
      { name: "فيروزي فاتح", hex: "#5EC8C8", family: "blue" },
      { name: "أزرق رمادي", hex: "#7BA7BC", family: "blue" },
    ],
  },
  {
    label: "الأخضر",
    colors: [
      { name: "أخضر نعناعي", hex: "#9DC08B", family: "green" },
      { name: "أخضر زيتوني", hex: "#7D9B76", family: "green" },
      { name: "أخضر سيج", hex: "#B2C9AD", family: "green" },
      { name: "أخضر غابي", hex: "#4A7C59", family: "green" },
      { name: "أخضر فاتح", hex: "#C5DDB0", family: "green" },
    ],
  },
  {
    label: "الرمادي والأسود",
    colors: [
      { name: "رمادي فاتح", hex: "#D5D8DC", family: "gray" },
      { name: "رمادي متوسط", hex: "#A9B1BA", family: "gray" },
      { name: "رمادي دافئ", hex: "#BEB5A8", family: "gray" },
      { name: "رمادي غامق", hex: "#717D7E", family: "gray" },
      { name: "أسود ناعم", hex: "#2C3E50", family: "gray" },
    ],
  },
  {
    label: "الوردي والأرجواني",
    colors: [
      { name: "وردي ناعم", hex: "#F4C2C2", family: "pink" },
      { name: "وردي دافئ", hex: "#E8A0A0", family: "pink" },
      { name: "خوخي فاتح", hex: "#FDDCBB", family: "pink" },
      { name: "أرجواني فاتح", hex: "#C4A9C9", family: "pink" },
      { name: "ليلكي هادئ", hex: "#D7BDE2", family: "pink" },
    ],
  },
  {
    label: "البني والأرضي",
    colors: [
      { name: "بني دافئ", hex: "#A0785A", family: "brown" },
      { name: "طيني فاتح", hex: "#C8A882", family: "brown" },
      { name: "رملي ذهبي", hex: "#D4AC6E", family: "brown" },
      { name: "خشبي داكن", hex: "#7B5E3A", family: "brown" },
      { name: "قرفة هادئ", hex: "#B8704A", family: "brown" },
    ],
  },
];

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export function OurColorsPage() {
  useEffect(() => {
    document.title = "من ألواننا — النسرين";
  }, []);

  return (
    <div className="min-h-screen" dir="rtl">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">من ألواننا</h1>
          <p className="text-xl text-blue-100">
            استوحِ ألوان منزلك من مجموعة ألوان جوتن المميزة
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          نقدم لكم مجموعة مختارة من ألوان جوتن الأكثر طلباً في سلطنة عُمان. تواصل معنا لمزيد من الألوان وخدمة تطابق الألوان.
        </p>

        <div className="space-y-12">
          {COLOR_FAMILIES.map((family) => (
            <div key={family.label}>
              <h2 className="text-2xl font-black text-foreground mb-6 border-b border-border pb-3">
                {family.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {family.colors.map((color) => {
                  const light = isLight(color.hex);
                  return (
                    <div
                      key={color.hex}
                      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div
                        className="h-28 w-full flex items-end justify-end p-2"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded-full opacity-70"
                          style={{
                            backgroundColor: light ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.2)",
                            color: light ? "#000" : "#fff",
                          }}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <div className="bg-white px-3 py-2.5">
                        <p className="text-sm font-bold text-foreground truncate">{color.name}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{color.hex}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-foreground mb-3">هل تحتاج لون مخصص؟</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            نوفر خدمة تطابق الألوان — أحضر عيّنة أو كود اللون وسنطابقه لك بدقة
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=96890000000&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%B7%D8%A7%D8%A8%D9%82%20%D8%A7%D9%84%D8%A3%D9%84%D9%88%D8%A7%D9%86"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors shadow-lg"
          >
            تواصل معنا عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
