import { useState } from "react";
import { Plus, Trash2, Calculator } from "lucide-react";

interface Opening {
  id: number;
  width: string;
  height: string;
}

function newOpening(id: number, w: string, h: string): Opening {
  return { id, width: w, height: h };
}

let nextId = 1;

export function PaintCalculator() {
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("2.8");
  const [doors, setDoors] = useState<Opening[]>([newOpening(nextId++, "0.9", "2.1")]);
  const [windows, setWindows] = useState<Opening[]>([newOpening(nextId++, "1.2", "1.2")]);
  const [coverage, setCoverage] = useState("10");
  const [coats, setCoats] = useState("2");

  const addDoor = () => setDoors((d) => [...d, newOpening(nextId++, "0.9", "2.1")]);
  const removeDoor = (id: number) => setDoors((d) => d.filter((x) => x.id !== id));
  const updateDoor = (id: number, field: keyof Omit<Opening, "id">, val: string) =>
    setDoors((d) => d.map((x) => (x.id === id ? { ...x, [field]: val } : x)));

  const addWindow = () => setWindows((w) => [...w, newOpening(nextId++, "1.2", "1.2")]);
  const removeWindow = (id: number) => setWindows((w) => w.filter((x) => x.id !== id));
  const updateWindow = (id: number, field: keyof Omit<Opening, "id">, val: string) =>
    setWindows((w) => w.map((x) => (x.id === id ? { ...x, [field]: val } : x)));

  const n = (s: string) => parseFloat(s) || 0;

  const wallArea = 2 * (n(roomLength) + n(roomWidth)) * n(roomHeight);
  const doorsArea = doors.reduce((s, d) => s + n(d.width) * n(d.height), 0);
  const windowsArea = windows.reduce((s, w) => s + n(w.width) * n(w.height), 0);
  const netArea = Math.max(0, wallArea - doorsArea - windowsArea);
  const litersNeeded = coverage && coats ? (netArea * n(coats)) / n(coverage) : 0;

  const cans = (size: number) => Math.ceil(litersNeeded / size);

  const ready = n(roomLength) > 0 && n(roomWidth) > 0 && n(roomHeight) > 0;

  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl mb-4">
            <Calculator size={28} />
          </div>
          <h2 className="text-3xl font-black text-foreground mb-2">حاسبة الطلاء</h2>
          <p className="text-muted-foreground">احسب كمية الصبغ التي تحتاجها بدقة</p>
        </div>

        <div className="bg-secondary/40 rounded-2xl p-6 space-y-6">

          {/* Room */}
          <div>
            <h3 className="font-bold text-sm text-muted-foreground uppercase mb-3">أبعاد الغرفة (متر)</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "الطول", value: roomLength, set: setRoomLength },
                { label: "العرض", value: roomWidth, set: setRoomWidth },
                { label: "الارتفاع", value: roomHeight, set: setRoomHeight },
              ].map(({ label, value, set }) => (
                <div key={label}>
                  <label className="block text-xs text-muted-foreground mb-1">{label}</label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={value}
                    onChange={(e) => set(e.target.value)}
                    placeholder="0.0"
                    className="w-full border border-border rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/30 text-center font-semibold"
                  />
                </div>
              ))}
            </div>
            {wallArea > 0 && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                إجمالي مساحة الجدران: <span className="font-bold text-blue-700">{wallArea.toFixed(2)} م²</span>
              </p>
            )}
          </div>

          {/* Doors */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-muted-foreground uppercase">الأبواب</h3>
              <button
                onClick={addDoor}
                className="flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus size={14} /> إضافة باب
              </button>
            </div>
            <div className="space-y-2">
              {doors.map((d, i) => (
                <div key={d.id} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-border">
                  <span className="text-xs text-muted-foreground w-16">باب {i + 1}</span>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">ع</span>
                      <input
                        type="number" min="0" step="0.1" value={d.width}
                        onChange={(e) => updateDoor(d.id, "width", e.target.value)}
                        className="w-full border border-border rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">ط</span>
                      <input
                        type="number" min="0" step="0.1" value={d.height}
                        onChange={(e) => updateDoor(d.id, "height", e.target.value)}
                        className="w-full border border-border rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-red-500 w-14 text-center">
                    {(n(d.width) * n(d.height)).toFixed(2)} م²
                  </span>
                  {doors.length > 1 && (
                    <button onClick={() => removeDoor(d.id)} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Windows */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-muted-foreground uppercase">النوافذ</h3>
              <button
                onClick={addWindow}
                className="flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus size={14} /> إضافة نافذة
              </button>
            </div>
            <div className="space-y-2">
              {windows.map((w, i) => (
                <div key={w.id} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-border">
                  <span className="text-xs text-muted-foreground w-16">نافذة {i + 1}</span>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">ع</span>
                      <input
                        type="number" min="0" step="0.1" value={w.width}
                        onChange={(e) => updateWindow(w.id, "width", e.target.value)}
                        className="w-full border border-border rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">ط</span>
                      <input
                        type="number" min="0" step="0.1" value={w.height}
                        onChange={(e) => updateWindow(w.id, "height", e.target.value)}
                        className="w-full border border-border rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-red-500 w-14 text-center">
                    {(n(w.width) * n(w.height)).toFixed(2)} م²
                  </span>
                  {windows.length > 1 && (
                    <button onClick={() => removeWindow(w.id)} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Paint settings */}
          <div>
            <h3 className="font-bold text-sm text-muted-foreground uppercase mb-3">إعدادات الصبغ</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">تغطية الصبغ (م² / لتر)</label>
                <input
                  type="number" min="1" step="1" value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/30 text-center font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">عدد الطبقات</label>
                <div className="flex border border-border rounded-xl overflow-hidden bg-white">
                  {[1, 2, 3].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCoats(String(c))}
                      className={`flex-1 py-2.5 text-sm font-bold transition-colors ${coats === String(c) ? "bg-blue-700 text-white" : "hover:bg-secondary"}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          {ready && (
            <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-blue-200 text-sm mb-4">نتيجة الحساب</h3>
              <div className="grid grid-cols-3 gap-3 mb-5 text-center">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-xl font-black">{wallArea.toFixed(1)}</div>
                  <div className="text-xs text-blue-200 mt-0.5">مساحة الجدران</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-xl font-black text-red-300">{(doorsArea + windowsArea).toFixed(1)}</div>
                  <div className="text-xs text-blue-200 mt-0.5">أبواب + نوافذ</div>
                </div>
                <div className="bg-white/20 rounded-xl p-3 ring-2 ring-white/30">
                  <div className="text-xl font-black text-yellow-300">{netArea.toFixed(1)}</div>
                  <div className="text-xs text-blue-200 mt-0.5">صافي للطلاء</div>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="text-4xl font-black text-yellow-300">
                  {litersNeeded.toFixed(1)}
                  <span className="text-lg text-blue-200 font-normal mr-1">لتر</span>
                </div>
                <div className="text-sm text-blue-200 mt-1">
                  {coats} طبقة × {netArea.toFixed(1)} م² ÷ {coverage} م²/لتر
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                {[1, 4, 18].map((size) => (
                  <div key={size} className="bg-white/10 rounded-xl p-2">
                    <div className="font-black text-lg">{cans(size)}</div>
                    <div className="text-xs text-blue-200">علبة {size} لتر</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!ready && (
            <div className="text-center text-sm text-muted-foreground bg-white rounded-xl py-4 border border-dashed border-border">
              أدخل أبعاد الغرفة لرؤية النتيجة
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
