import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { navigate } from '@/router';
import { WHATSAPP_NUMBER } from '@/data/products';
import FurnitureIllustration from '@/components/FurnitureIllustration';

export default function CartPage() {
  const { items, setQty, remove, clear, total, count } = useCart();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' });

  const updateQty = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    setQty(id, item.qty + delta);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items
      .map((i) => `• ${i.name} ×${i.qty} = ${(i.qty * i.price).toLocaleString()} ر.س`)
      .join('%0a');
    const msg =
      `طلب جديد من ${form.name}%0a` +
      `الجوال: ${form.phone}%0a` +
      `العنوان: ${form.address}%0a` +
      (form.note ? `ملاحظة: ${form.note}%0a` : '') +
      `%0a${lines}%0a%0a` +
      `الإجمالي: ${total.toLocaleString()} ر.س`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSent(true);
    clear();
  };

  if (sent) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 className="h-20 w-20 text-green-600 animate-fade-in" />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-brand-900">تم إرسال طلبك!</h1>
        <p className="mt-3 max-w-md text-brand-600">
          فتحنا لك محادثة واتساب لتأكيد الطلب. راح يتواصل معك فريقنا قريباً. شكراً لثقتك بـ My home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate('/products')} className="btn-primary">
            متابعة التسوّق <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => { setSent(false); navigate('/'); }} className="btn-outline">
            الصفحة الرئيسية
          </button>
        </div>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-brand-500">
          <ShoppingBag className="h-12 w-12" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-brand-900">سلتك فاضية</h1>
        <p className="mt-3 text-brand-600">ابدأ التسوّق وأضف القطع اللي عجبتك.</p>
        <button onClick={() => navigate('/products')} className="btn-primary mt-7">
          تصفّح القائمة <ArrowLeft className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-grain">
      <section className="container-x py-12 sm:py-16">
        <h1 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">سلة المشتريات</h1>
        <p className="mt-2 text-brand-900/70">عندك {count} قطعة في السلة. راجعها وأكمل الطلب.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card flex gap-4 p-4">
                <FurnitureIllustration
                  kind={item.kind}
                  label={item.name}
                  className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-brand-50 sm:h-28 sm:w-28"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-900 sm:text-lg">{item.name}</h3>
                      <p className="text-xs text-sage-dark">{item.category}</p>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-brand-400 transition-colors hover:bg-red-50 hover:text-red-600"
                      aria-label="إزالة"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                    <div className="flex items-center gap-1 rounded-full border border-brand-200 p-1">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-brand-700 transition-colors hover:bg-brand-100"
                        aria-label="إنقاص"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-display text-sm font-bold text-brand-900">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-brand-700 transition-colors hover:bg-brand-100"
                        aria-label="زيادة"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-display text-lg font-extrabold text-brand-700">
                      {(item.qty * item.price).toLocaleString()} ر.س
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clear}
              className="text-sm font-medium text-brand-500 transition-colors hover:text-red-600"
            >
              تفريغ السلة
            </button>
          </div>

          {/* Checkout */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <form onSubmit={handleOrder} className="card space-y-5 p-6">
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">تفاصيل التوصيل</h2>
                <p className="mt-1 text-sm text-brand-600">نكمل الطلب عبر واتساب مع فريقنا.</p>
              </div>

              <div className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="الاسم الكامل"
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="رقم الجوال"
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
                <input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="العنوان في مكة"
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="ملاحظات إضافية (اختياري)"
                  rows={2}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
              </div>

              <div className="border-t border-brand-100 pt-4">
                <div className="flex items-center justify-between text-sm text-brand-900/70">
                  <span>الإجمالي الفرعي</span>
                  <span>{total.toLocaleString()} ر.س</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm text-brand-900/70">
                  <span>التوصيل داخل مكة</span>
                  <span className="font-semibold text-green-700">مجاناً</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-brand-100 pt-3">
                  <span className="font-display font-bold text-brand-900">الإجمالي</span>
                  <span className="font-display text-xl font-extrabold text-sage-dark">
                    {total.toLocaleString()} ر.س
                  </span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-[#25D366]/40">
                <MessageCircle className="h-5 w-5" /> إرسال الطلب عبر واتساب
              </button>
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="flex w-full items-center justify-center gap-1 text-sm font-medium text-brand-900/70 transition-colors hover:text-brand-900"
              >
                متابعة التسوّق <ArrowLeft className="h-4 w-4" />
              </button>
            </form>
          </aside>
        </div>
      </section>
    </div>
  );
}
