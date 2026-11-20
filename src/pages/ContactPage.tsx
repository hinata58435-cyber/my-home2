import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/data/products';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `السلام عليكم، أنا ${form.name}%0a` +
      `جوال: ${form.phone}%0a` +
      `${form.message || WHATSAPP_MESSAGE}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSent(true);
  };

  const INFO = [
    {
      icon: MapPin,
      title: 'العنوان',
      lines: ['مكة المكرمة', 'حي العزيزية — شارع الحج'],
    },
    {
      icon: Phone,
      title: 'الجوال',
      lines: [WHATSAPP_NUMBER],
    },
    {
      icon: Mail,
      title: 'البريد',
      lines: ['hello@myhome.sa'],
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      lines: ['السبت – الخميس: ٩ص – ١١م', 'الجمعة: ٤م – ١١م'],
    },
  ];

  return (
    <div className="bg-grain">
      {/* Header */}
      <section className="container-x py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-brand-500">تواصل</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            نبى نسمع منك
          </h1>
          <p className="mt-4 text-brand-600">
            عندك سؤال عن قطعة، أو حاب نجاوبك على تأثيث بيتك كامل؟ راسلنا ونرد عليك بسرعة.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="container-x pb-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((c) => (
            <div key={c.title} className="card p-6 text-center transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-brand-900">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-brand-600">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="container-x grid gap-8 py-12 lg:grid-cols-2">
        {/* Form */}
        <div className="card p-7 sm:p-9">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center animate-fade-in">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-900">وصلتنا رسالتك!</h2>
              <p className="mt-2 max-w-sm text-brand-600">
                فتحنا لك محادثة واتساب. راح نرد عليك في أقرب وقت إن شاء الله.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }}
                className="btn-outline mt-6"
              >
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-brand-900">أرسل رسالة</h2>
                <p className="mt-1 text-sm text-brand-600">نكمل معك عبر واتساب مباشرة.</p>
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
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
              </div>

              <button type="submit" className="btn-primary w-full bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-[#25D366]/40">
                <Send className="h-5 w-5" /> إرسال عبر واتساب
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-900"
              >
                <MessageCircle className="h-4 w-4" /> أو راسلنا مباشرة على واتساب
              </a>
            </form>
          )}
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <iframe
            title="موقع My home في مكة"
            src="https://www.openstreetmap.org/export/embed.html?bbox=39.79%2C21.38%2C39.88%2C21.45&layer=mapnik&marker=21.4225%2C39.8262"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
