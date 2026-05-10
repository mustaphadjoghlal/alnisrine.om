import { useState, useEffect } from "react";
import {
  LogOut, Lock, Mail, Plus, Trash2, Loader2,
  ShoppingCart, Package, Warehouse, ClipboardList, Bell,
  ChevronDown, ChevronUp, Globe,
} from "lucide-react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  subscribeToSales, addSale, deleteSale,
  subscribeToPurchases, addPurchase, deletePurchase,
  subscribeToBranchStocks, saveBranchStock,
  subscribeToAuditLog, addAuditEntry,
  subscribeToServiceRequests, updateServiceRequestStatus,
  nowISO,
} from "../../lib/firestore";
import { BRANCHES } from "../constants";
import type {
  SaleRecord, SaleItem,
  PurchaseRecord,
  BranchStock, InventoryItem,
  AuditEntry,
  ServiceRequest,
} from "../types";
import logo from "../../imports/photo-1700901555562-952f0008a11f.jpeg_-_Copy.png";

type Tab = "sales" | "purchases" | "inventory" | "requests" | "auditlog";
type Lang = "ar" | "en";

const T = {
  ar: {
    dashboard: "لوحة المحاسب",
    subtitle: "محل النسرين للأصباغ ومواد البناء",
    login: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    logout: "تسجيل الخروج",
    sales: "المبيعات",
    purchases: "المشتريات",
    inventory: "المخزون",
    requests: "طلبات الخدمة",
    auditlog: "سجل التعديلات",
    addSale: "تسجيل بيع جديد",
    addPurchase: "تسجيل شراء جديد",
    date: "التاريخ",
    customer: "العميل",
    phone: "الهاتف",
    branch: "الفرع",
    salesperson: "المسؤول",
    items: "المنتجات",
    total: "الإجمالي",
    notes: "ملاحظات",
    supplier: "المورد",
    cost: "التكلفة",
    qty: "الكمية",
    unit: "الوحدة",
    productName: "اسم المنتج",
    addItem: "+ إضافة صنف",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    confirm: "تأكيد الحذف؟",
    by: "بواسطة",
    action: "الإجراء",
    entity: "النوع",
    details: "التفاصيل",
    role: "الدور",
    timestamp: "الوقت",
    name: "الاسم",
    service: "الخدمة",
    location: "الموقع",
    status: "الحالة",
    pending: "جديد",
    contacted: "تم التواصل",
    done: "منتهي",
    updateStatus: "تحديث الحالة",
    stock: "المخزون",
    editStock: "تعديل المخزون",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    noData: "لا توجد بيانات بعد",
    omr: "ر.ع",
    manager: "مدير",
    accountant: "محاسب",
  },
  en: {
    dashboard: "Accountant Dashboard",
    subtitle: "Al Nisrine Paints & Building Materials",
    login: "Sign In",
    email: "Email",
    password: "Password",
    logout: "Sign Out",
    sales: "Sales",
    purchases: "Purchases",
    inventory: "Inventory",
    requests: "Service Requests",
    auditlog: "Audit Log",
    addSale: "Record New Sale",
    addPurchase: "Record New Purchase",
    date: "Date",
    customer: "Customer",
    phone: "Phone",
    branch: "Branch",
    salesperson: "Salesperson",
    items: "Items",
    total: "Total",
    notes: "Notes",
    supplier: "Supplier",
    cost: "Cost",
    qty: "Qty",
    unit: "Unit",
    productName: "Product Name",
    addItem: "+ Add Item",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    confirm: "Confirm delete?",
    by: "By",
    action: "Action",
    entity: "Type",
    details: "Details",
    role: "Role",
    timestamp: "Time",
    name: "Name",
    service: "Service",
    location: "Location",
    status: "Status",
    pending: "New",
    contacted: "Contacted",
    done: "Done",
    updateStatus: "Update Status",
    stock: "Stock",
    editStock: "Edit Stock",
    loginError: "Invalid email or password",
    noData: "No data yet",
    omr: "OMR",
    manager: "Manager",
    accountant: "Accountant",
  },
};

function branchLabel(id: string, lang: Lang) {
  const b = BRANCHES.find((x) => x.id === id);
  if (!b) return id;
  return lang === "ar" ? b.ar : b.en;
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("ar-EG", {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

const EMPTY_SALE_ITEM: SaleItem = { name: "", qty: 1, unit: "علبة", price: 0 };

export function AccountantPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = T[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  const [loggedIn, setLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [tab, setTab] = useState<Tab>("sales");
  const [userEmail, setUserEmail] = useState("");

  const [sales, setSales] = useState<SaleRecord[]>([]);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [stocks, setStocks] = useState<BranchStock[]>([]);
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([]);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);

  const [showSaleForm, setShowSaleForm] = useState(false);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [editingStock, setEditingStock] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
      setUserEmail(user?.email || "");
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    const u1 = subscribeToSales(setSales);
    const u2 = subscribeToPurchases(setPurchases);
    const u3 = subscribeToBranchStocks(setStocks);
    const u4 = subscribeToAuditLog(setAuditLog);
    const u5 = subscribeToServiceRequests(setRequests);
    return () => { u1(); u2(); u3(); u4(); u5(); };
  }, [loggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError(t.loginError);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => signOut(auth);

  const logAudit = (action: string, entity: string, details: string) =>
    addAuditEntry({ timestamp: nowISO(), action, entity, details, byEmail: userEmail, byRole: "accountant" });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900">
        <Loader2 className="w-10 h-10 text-white animate-spin" />
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-end mb-4">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded-lg px-2 py-1">
              <Globe size={12} /> {lang === "ar" ? "English" : "عربي"}
            </button>
          </div>
          <div className="text-center mb-8">
            <img src={logo} alt="النسرين" className="w-20 h-20 object-contain mx-auto mb-4" />
            <h1 className="text-2xl font-black">{t.dashboard}</h1>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4" dir={dir}>
            <div>
              <label className="block text-sm font-semibold mb-1">{t.email}</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="w-full pr-9 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600" dir="ltr" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">{t.password}</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                  className="w-full pr-9 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              {loginError && <p className="text-sm text-red-600 mt-1">{loginError}</p>}
            </div>
            <button type="submit" disabled={loginLoading}
              className="w-full bg-emerald-700 text-white font-bold py-3 rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
              {loginLoading && <Loader2 size={16} className="animate-spin" />}
              {t.login}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalSales = sales.reduce((s, r) => s + r.total, 0);
  const totalPurchases = purchases.reduce((s, r) => s + r.total, 0);
  const pendingReqs = requests.filter((r) => r.status === "pending").length;

  return (
    <div className="min-h-screen bg-secondary/30" dir={dir}>
      <header className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="w-10 h-10 object-contain bg-white rounded-full p-1" />
              <div>
                <h1 className="text-xl font-black">{t.dashboard}</h1>
                <p className="text-xs text-emerald-100">{userEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors">
                <Globe size={12} /> {lang === "ar" ? "EN" : "ع"}
              </button>
              <button onClick={handleLogout}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors text-sm">
                <LogOut size={15} /> {t.logout}
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {([
              { key: "sales", icon: <ShoppingCart size={14} />, label: t.sales },
              { key: "purchases", icon: <Package size={14} />, label: t.purchases },
              { key: "inventory", icon: <Warehouse size={14} />, label: t.inventory },
              { key: "requests", icon: <Bell size={14} />, label: `${t.requests}${pendingReqs > 0 ? ` (${pendingReqs})` : ""}` },
              { key: "auditlog", icon: <ClipboardList size={14} />, label: t.auditlog },
            ] as { key: Tab; icon: React.ReactNode; label: string }[]).map(({ key, icon, label }) => (
              <button key={key} onClick={() => setTab(key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${tab === key ? "bg-white text-emerald-700" : "bg-white/10 hover:bg-white/20"}`}>
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: `${t.sales} (${t.total})`, value: `${totalSales.toFixed(3)} ${t.omr}`, color: "blue", icon: <ShoppingCart size={20} /> },
            { label: `${t.purchases} (${t.total})`, value: `${totalPurchases.toFixed(3)} ${t.omr}`, color: "orange", icon: <Package size={20} /> },
            { label: t.requests, value: `${pendingReqs} ${lang === "ar" ? "جديد" : "new"}`, color: "amber", icon: <Bell size={20} /> },
          ].map(({ label, value, color, icon }) => (
            <div key={label} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-${color}-100 text-${color}-600 flex items-center justify-center shrink-0`}>{icon}</div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className={`text-xl font-black text-${color}-600`}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Sales Tab ── */}
        {tab === "sales" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-black">{t.sales}</h2>
              <button onClick={() => setShowSaleForm(true)}
                className="bg-blue-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 text-sm">
                <Plus size={16} /> {t.addSale}
              </button>
            </div>

            {showSaleForm && (
              <SaleForm lang={lang} t={t} dir={dir}
                onSave={async (sale) => {
                  await addSale({ ...sale, createdBy: "accountant", createdByEmail: userEmail, createdAt: nowISO() });
                  await logAudit("add", "sale", `${sale.customerName} — ${sale.total.toFixed(3)} OMR`);
                  setShowSaleForm(false);
                }}
                onCancel={() => setShowSaleForm(false)} />
            )}

            {sales.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">{t.noData}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-xs">
                      {[t.date, t.customer, t.phone, t.branch, t.salesperson, t.total, t.notes, ""].map((h) => (
                        <th key={h} className="text-right p-2 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((s) => (
                      <tr key={s.id} className="border-b border-border hover:bg-secondary/40">
                        <td className="p-2 whitespace-nowrap text-xs">{fmtDate(s.date)}</td>
                        <td className="p-2 font-semibold">{s.customerName}</td>
                        <td className="p-2 text-xs" dir="ltr">{s.customerPhone}</td>
                        <td className="p-2 text-xs">{branchLabel(s.branch, lang)}</td>
                        <td className="p-2 text-xs">{s.salesperson}</td>
                        <td className="p-2 font-bold text-blue-700">{s.total.toFixed(3)}</td>
                        <td className="p-2 text-xs text-muted-foreground">{s.notes}</td>
                        <td className="p-2">
                          <button onClick={async () => {
                            if (!window.confirm(t.confirm)) return;
                            await deleteSale(s.id);
                            await logAudit("delete", "sale", s.customerName);
                          }} className="text-red-500 hover:text-red-700 p-1">
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── Purchases Tab ── */}
        {tab === "purchases" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-black">{t.purchases}</h2>
              <button onClick={() => setShowPurchaseForm(true)}
                className="bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 text-sm">
                <Plus size={16} /> {t.addPurchase}
              </button>
            </div>

            {showPurchaseForm && (
              <PurchaseForm lang={lang} t={t} dir={dir}
                onSave={async (purchase) => {
                  await addPurchase({ ...purchase, createdBy: "accountant", createdByEmail: userEmail, createdAt: nowISO() });
                  await logAudit("add", "purchase", `${purchase.supplier} — ${purchase.total.toFixed(3)} OMR`);
                  setShowPurchaseForm(false);
                }}
                onCancel={() => setShowPurchaseForm(false)} />
            )}

            {purchases.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">{t.noData}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-xs">
                      {[t.date, t.supplier, t.branch, t.total, t.notes, ""].map((h) => (
                        <th key={h} className="text-right p-2 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {purchases.map((p) => (
                      <tr key={p.id} className="border-b border-border hover:bg-secondary/40">
                        <td className="p-2 whitespace-nowrap text-xs">{fmtDate(p.date)}</td>
                        <td className="p-2 font-semibold">{p.supplier}</td>
                        <td className="p-2 text-xs">{branchLabel(p.branch, lang)}</td>
                        <td className="p-2 font-bold text-orange-600">{p.total.toFixed(3)}</td>
                        <td className="p-2 text-xs text-muted-foreground">{p.notes}</td>
                        <td className="p-2">
                          <button onClick={async () => {
                            if (!window.confirm(t.confirm)) return;
                            await deletePurchase(p.id);
                            await logAudit("delete", "purchase", p.supplier);
                          }} className="text-red-500 hover:text-red-700 p-1">
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── Inventory Tab ── */}
        {tab === "inventory" && (
          <div className="space-y-4">
            {BRANCHES.map((branch) => {
              const stock = stocks.find((s) => s.branchId === branch.id);
              const isEditing = editingStock === branch.id;
              return (
                <BranchStockCard
                  key={branch.id}
                  branch={branch}
                  lang={lang}
                  t={t}
                  stock={stock}
                  isEditing={isEditing}
                  onEdit={() => setEditingStock(isEditing ? null : branch.id)}
                  onSave={async (items) => {
                    await saveBranchStock({ branchId: branch.id, items, updatedAt: nowISO(), updatedBy: userEmail });
                    await logAudit("update", "inventory", `${lang === "ar" ? branch.ar : branch.en}`);
                    setEditingStock(null);
                  }}
                />
              );
            })}
          </div>
        )}

        {/* ── Service Requests Tab ── */}
        {tab === "requests" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-xl font-black mb-5">{t.requests}</h2>
            {requests.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">{t.noData}</p>
            ) : (
              <div className="space-y-3">
                {requests.map((r) => (
                  <div key={r.id} className={`rounded-xl border p-4 ${r.status === "pending" ? "border-amber-300 bg-amber-50" : r.status === "contacted" ? "border-blue-200 bg-blue-50" : "border-green-200 bg-green-50"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <p className="font-black">{r.name} — <span dir="ltr" className="font-mono text-sm">{r.phone}</span></p>
                        <p className="text-sm text-muted-foreground">
                          {r.serviceType === "painter" ? (lang === "ar" ? "صباغ" : "Painter") : r.serviceDesc} • {r.location}
                        </p>
                        {r.notes && <p className="text-xs text-muted-foreground">{r.notes}</p>}
                        <p className="text-xs text-muted-foreground">{fmtDate(r.createdAt)}</p>
                      </div>
                      <div className="shrink-0">
                        <select
                          value={r.status}
                          onChange={(e) => updateServiceRequestStatus(r.id, e.target.value as ServiceRequest["status"])}
                          className="border border-border rounded-lg px-2 py-1.5 text-xs font-semibold focus:outline-none"
                        >
                          <option value="pending">{t.pending}</option>
                          <option value="contacted">{t.contacted}</option>
                          <option value="done">{t.done}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Audit Log Tab ── */}
        {tab === "auditlog" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-xl font-black mb-5">{t.auditlog}</h2>
            {auditLog.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">{t.noData}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-xs">
                      {[t.timestamp, t.action, t.entity, t.details, t.by, t.role].map((h) => (
                        <th key={h} className="text-right p-2 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {auditLog.map((e) => (
                      <tr key={e.id} className="border-b border-border hover:bg-secondary/40 text-xs">
                        <td className="p-2 whitespace-nowrap">{fmtDate(e.timestamp)}</td>
                        <td className="p-2">{e.action}</td>
                        <td className="p-2">{e.entity}</td>
                        <td className="p-2 text-muted-foreground">{e.details}</td>
                        <td className="p-2 font-mono text-xs">{e.byEmail}</td>
                        <td className="p-2">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-xs ${e.byRole === "manager" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>
                            {e.byRole === "manager" ? t.manager : t.accountant}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sale Form ────────────────────────────────────────────────────────────────
function SaleForm({ lang, t, dir, onSave, onCancel }: {
  lang: Lang; t: typeof T["ar"]; dir: string;
  onSave: (s: Omit<SaleRecord, "id" | "createdBy" | "createdByEmail" | "createdAt">) => void;
  onCancel: () => void;
}) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [branch, setBranch] = useState(BRANCHES[0].id);
  const [salesperson, setSalesperson] = useState("");
  const [items, setItems] = useState<SaleItem[]>([{ ...EMPTY_SALE_ITEM }]);
  const [notes, setNotes] = useState("");

  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  const updateItem = (idx: number, field: keyof SaleItem, val: string | number) =>
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));

  return (
    <div className="mb-6 border border-blue-200 rounded-2xl p-5 bg-blue-50/50" dir={dir}>
      <h3 className="font-black mb-4 text-blue-700">{t.addSale}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <Field label={t.date}><input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} /></Field>
        <Field label={t.customer}><input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className={inputCls} /></Field>
        <Field label={t.phone}><input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} dir="ltr" className={inputCls} /></Field>
        <Field label={t.branch}>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls}>
            {BRANCHES.map((b) => <option key={b.id} value={b.id}>{lang === "ar" ? b.ar : b.en}</option>)}
          </select>
        </Field>
        <Field label={t.salesperson}><input value={salesperson} onChange={(e) => setSalesperson(e.target.value)} className={inputCls} /></Field>
        <Field label={t.notes}><input value={notes} onChange={(e) => setNotes(e.target.value)} className={inputCls} /></Field>
      </div>

      <p className="text-xs font-bold text-muted-foreground mb-2">{t.items}</p>
      <div className="space-y-2 mb-3">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-5 gap-2">
            <input placeholder={t.productName} value={item.name} onChange={(e) => updateItem(idx, "name", e.target.value)} className={`${inputCls} col-span-2`} />
            <input type="number" min="0" placeholder={t.qty} value={item.qty} onChange={(e) => updateItem(idx, "qty", +e.target.value)} className={inputCls} />
            <input placeholder={t.unit} value={item.unit} onChange={(e) => updateItem(idx, "unit", e.target.value)} className={inputCls} />
            <input type="number" min="0" step="0.001" placeholder={t.total} value={item.price} onChange={(e) => updateItem(idx, "price", +e.target.value)} className={inputCls} />
          </div>
        ))}
      </div>
      <button onClick={() => setItems((p) => [...p, { ...EMPTY_SALE_ITEM }])} className="text-sm text-blue-700 font-semibold mb-3">{t.addItem}</button>

      <div className="flex items-center justify-between">
        <p className="font-black text-lg text-blue-700">{t.total}: {total.toFixed(3)} {t.omr}</p>
        <div className="flex gap-2">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-secondary transition-colors">{t.cancel}</button>
          <button onClick={() => onSave({ date, customerName, customerPhone, branch, salesperson, items, total, notes })}
            className="px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-bold hover:bg-blue-800 transition-colors">{t.save}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Purchase Form ────────────────────────────────────────────────────────────
function PurchaseForm({ lang, t, dir, onSave, onCancel }: {
  lang: Lang; t: typeof T["ar"]; dir: string;
  onSave: (p: Omit<PurchaseRecord, "id" | "createdBy" | "createdByEmail" | "createdAt">) => void;
  onCancel: () => void;
}) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const [supplier, setSupplier] = useState("");
  const [branch, setBranch] = useState(BRANCHES[0].id);
  const [items, setItems] = useState([{ name: "", qty: 1, unit: "علبة", cost: 0 }]);
  const [notes, setNotes] = useState("");

  const total = items.reduce((s, i) => s + i.qty * i.cost, 0);

  const updateItem = (idx: number, field: string, val: string | number) =>
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));

  return (
    <div className="mb-6 border border-orange-200 rounded-2xl p-5 bg-orange-50/50" dir={dir}>
      <h3 className="font-black mb-4 text-orange-700">{t.addPurchase}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <Field label={t.date}><input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} /></Field>
        <Field label={t.supplier}><input value={supplier} onChange={(e) => setSupplier(e.target.value)} className={inputCls} /></Field>
        <Field label={t.branch}>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls}>
            {BRANCHES.map((b) => <option key={b.id} value={b.id}>{lang === "ar" ? b.ar : b.en}</option>)}
          </select>
        </Field>
        <Field label={t.notes}><input value={notes} onChange={(e) => setNotes(e.target.value)} className={inputCls} /></Field>
      </div>

      <p className="text-xs font-bold text-muted-foreground mb-2">{t.items}</p>
      <div className="space-y-2 mb-3">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-5 gap-2">
            <input placeholder={t.productName} value={item.name} onChange={(e) => updateItem(idx, "name", e.target.value)} className={`${inputCls} col-span-2`} />
            <input type="number" min="0" placeholder={t.qty} value={item.qty} onChange={(e) => updateItem(idx, "qty", +e.target.value)} className={inputCls} />
            <input placeholder={t.unit} value={item.unit} onChange={(e) => updateItem(idx, "unit", e.target.value)} className={inputCls} />
            <input type="number" min="0" step="0.001" placeholder={t.cost} value={item.cost} onChange={(e) => updateItem(idx, "cost", +e.target.value)} className={inputCls} />
          </div>
        ))}
      </div>
      <button onClick={() => setItems((p) => [...p, { name: "", qty: 1, unit: "علبة", cost: 0 }])} className="text-sm text-orange-700 font-semibold mb-3">{t.addItem}</button>

      <div className="flex items-center justify-between">
        <p className="font-black text-lg text-orange-700">{t.total}: {total.toFixed(3)} {t.omr}</p>
        <div className="flex gap-2">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-secondary transition-colors">{t.cancel}</button>
          <button onClick={() => onSave({ date, supplier, branch, items, total, notes })}
            className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition-colors">{t.save}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Branch Stock Card ────────────────────────────────────────────────────────
function BranchStockCard({ branch, lang, t, stock, isEditing, onEdit, onSave }: {
  branch: typeof BRANCHES[number]; lang: Lang; t: typeof T["ar"];
  stock?: BranchStock; isEditing: boolean;
  onEdit: () => void; onSave: (items: InventoryItem[]) => void;
}) {
  const [items, setItems] = useState<InventoryItem[]>(stock?.items || []);

  useEffect(() => { setItems(stock?.items || []); }, [stock]);

  const updateItem = (idx: number, field: keyof InventoryItem, val: string | number) =>
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-black text-lg">{lang === "ar" ? branch.ar : branch.en}</h3>
          {lang === "ar" && <p className="text-xs text-muted-foreground">{branch.en}</p>}
          {stock?.updatedAt && <p className="text-xs text-muted-foreground mt-0.5">{lang === "ar" ? "آخر تحديث" : "Last updated"}: {fmtDate(stock.updatedAt)} — {stock.updatedBy}</p>}
        </div>
        <button onClick={onEdit} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${isEditing ? "bg-emerald-700 text-white" : "border border-border hover:bg-secondary"}`}>
          {isEditing ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {isEditing ? (lang === "ar" ? "إغلاق" : "Close") : t.editStock}
        </button>
      </div>

      {!isEditing && items.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {items.map((item, i) => (
            <div key={i} className="bg-secondary/50 rounded-lg p-2 text-center">
              <p className="text-xs text-muted-foreground truncate">{item.name}</p>
              <p className="font-black text-lg text-emerald-700">{item.quantity}</p>
              <p className="text-xs text-muted-foreground">{item.unit}</p>
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2">
              <input placeholder={t.productName} value={item.name} onChange={(e) => updateItem(idx, "name", e.target.value)} className={`${inputCls} col-span-2`} />
              <input type="number" min="0" placeholder={t.qty} value={item.quantity} onChange={(e) => updateItem(idx, "quantity", +e.target.value)} className={inputCls} />
              <input placeholder={t.unit} value={item.unit} onChange={(e) => updateItem(idx, "unit", e.target.value)} className={inputCls} />
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <button onClick={() => setItems((p) => [...p, { name: "", quantity: 0, unit: "علبة" }])} className="text-sm text-emerald-700 font-semibold">{t.addItem}</button>
            <button onClick={() => setItems((p) => p.slice(0, -1))} className="text-sm text-red-500 font-semibold mr-auto">{lang === "ar" ? "حذف آخر صنف" : "Remove last"}</button>
            <button onClick={() => onSave(items)} className="bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-emerald-800 transition-colors">{t.save}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted-foreground mb-1">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-white";
