import { useMemo, useState } from 'react';
import { Plus, Check, Search } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { navigate } from '@/router';
import FurnitureIllustration from '@/components/FurnitureIllustration';

export default function ProductsPage() {
  const [cat, setCat] = useState<string>('الكل');
  const [query, setQuery] = useState('');
  const [added, setAdded] = useState<Record<string, boolean>>({});
  const { add } = useCart();

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const inCat = cat === 'الكل' || p.category === cat;
      const inQuery = p.name.includes(query.trim()) || p.desc.includes(query.trim());
      return inCat && inQuery;
    });
  }, [cat, query]);

  const handleAdd = (id: string) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    add(product);
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1400);
  };

  return (
    <div className="bg-grain">
      {/* Header */}
      <section className="container-x py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-sage-dark">القائمة</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            قطع تخلّي بيتك أحلى
          </h1>
          <p className="mt-4 text-brand-900/70">
            اختار اللي يناسب مساحتك وذوقك — وأضفه لسلتك بضغطة واحدة.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-md relative">
          <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن قطعة..."
            className="w-full rounded-full border border-brand-200 bg-white py-3 pr-12 pl-5 text-sm text-brand-900 outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage/30"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                cat === c
                  ? 'bg-sage text-white shadow-sm'
                  : 'bg-white text-brand-900 border border-brand-200 hover:border-sage'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-x pb-20">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-brand-200 bg-white py-20 text-center">
            <p className="font-display text-lg font-bold text-brand-800">ما لقينا قطع مطابقة</p>
            <p className="mt-2 text-sm text-brand-500">جرّب كلمة ثانية أو تصفح فئة أخرى.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="card group overflow-hidden">
                <div className="relative overflow-hidden bg-brand-50 transition-transform duration-500 group-hover:scale-105">
                  <FurnitureIllustration kind={p.kind} label={p.name} className="h-60 w-full" />
                  {p.tag && (
                    <span className="absolute top-3 right-3 rounded-full bg-sage px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {p.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-col p-5">
                  <span className="text-xs font-semibold text-sage-dark">{p.category}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-900">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-900/70">{p.desc}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xl font-extrabold text-sage-dark">
                        {p.price.toLocaleString()} ر.س
                      </span>
                      {p.oldPrice && (
                        <span className="text-sm text-brand-400 line-through">
                          {p.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(p.id)}
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
                        added[p.id]
                          ? 'bg-green-600 text-white'
                          : 'bg-sage text-white hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/30'
                      }`}
                      aria-label={`أضف ${p.name} للسلة`}
                    >
                      {added[p.id] ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Cross-link */}
        <div className="mt-14 rounded-3xl bg-brand-50 px-8 py-10 text-center">
          <p className="font-display text-lg font-bold text-brand-900">خلّصت اختيارك؟</p>
          <p className="mt-1 text-sm text-brand-900/70">راجع سلتك وأكمل طلبك بسهولة.</p>
          <button onClick={() => navigate('/cart')} className="btn-sage mt-5">
            عرض سلة المشتريات
          </button>
        </div>
      </section>
    </div>
  );
}
