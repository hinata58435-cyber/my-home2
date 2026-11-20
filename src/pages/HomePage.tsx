import { ArrowLeft, Truck, ShieldCheck, Sparkles, Star, Sofa } from 'lucide-react';
import { navigate } from '@/router';
import { PRODUCTS } from '@/data/products';
import FurnitureIllustration, { type ProductKind } from '@/components/FurnitureIllustration';

const FEATURES = [
  {
    icon: Truck,
    title: 'توصيل وتركيب داخل مكة',
    desc: 'نوصّل قطعك لباب بيتك ونسوّيها تركيب مجاناً داخل مكة والقرى المجاورة.',
  },
  {
    icon: ShieldCheck,
    title: 'ضمان سنتين',
    desc: 'كل قطعة تطلع من عندنا بضمان سنتين ضد عيوب الصناعة عشان ترتاح بالك.',
  },
  {
    icon: Sparkles,
    title: 'تصاميم دافئة وعصرية',
    desc: 'نختار تصاميم هادئة تليق ببيت العائلة وتدوم معك سنوات طويلة.',
  },
];

const GALLERY: { kind: ProductKind; label: string }[] = [
  { kind: 'sofa', label: 'غرف المعيشة' },
  { kind: 'bed', label: 'غرف النوم' },
  { kind: 'dining', label: 'طاولات الطعام' },
  { kind: 'tv', label: 'أركان الاستقبال' },
  { kind: 'carpet', label: 'إكسسوارات دافئة' },
  { kind: 'wardrobe', label: 'خزائن أنيقة' },
];

const TESTIMONIALS = [
  {
    name: 'أم محمد',
    role: 'أم لأربعة — العزيزية',
    text: 'الكنبة وصلت بسرعة وسوّوها تركيب لحالها، قماشها عملي وعيالي ما قدروا يخربونها. صارت صالة البيت أحلى ركن.',
    rating: 5,
  },
  {
    name: 'أبو فيصل',
    role: 'أب لعائلة — الحمراء',
    text: 'اشتريت طاولة الطعام وستة كراسي، جودتها فاقت توقعاتي بسهولة. التعامل كان راقي والأسعار معقولة.',
    rating: 5,
  },
  {
    name: 'سارة وعبدالله',
    role: 'متزوجان حديثاً — النزهة',
    text: 'جهّزنا شقتنا بالكامل من My home. نصحونا بقطع تتناسب مع مساحتنا الصغيرة وطلعت مثالية. شكراً لكم.',
    rating: 5,
  },
];

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-grain">
      {/* Hero / Welcome */}
      <section className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            <Sofa className="h-4 w-4" /> أثاث منزلي راقٍ في مكة
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-900 text-balance sm:text-5xl lg:text-6xl">
            خلّ بيتك أحلى ركن بحياتك
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-700">
            في My home نختار لك أثاث دافئ يليق بعائلتك. صالات، غرف نوم، طاولات ومزيد بتصاميم
            هادئة وأسعار تحبها — وتوصيل وتركيب لباب بيتك في مكة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => navigate('/products')} className="btn-primary">
              تصفّح القائمة <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => navigate('/about')} className="btn-outline">
              تعرّف علينا
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div>
              <p className="font-display text-3xl font-extrabold text-brand-800">+500</p>
              <p className="text-sm text-brand-600">عائلة في مكة اثّثت معنا</p>
            </div>
            <div className="h-10 w-px bg-brand-200" />
            <div>
              <p className="font-display text-3xl font-extrabold text-brand-800">سنتان</p>
              <p className="text-sm text-brand-600">ضمان على كل قطعة</p>
            </div>
          </div>
        </div>

        {/* Hero illustration collage */}
        <div className="relative animate-fade-in">
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft bg-brand-50">
            <FurnitureIllustration
              kind="sofa"
              label="صالة منزل أنيقة بأثاث My home"
              className="h-[420px] w-full sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden w-44 overflow-hidden rounded-3xl border-4 border-white shadow-soft sm:block">
            <FurnitureIllustration
              kind="bed"
              label="غرفة نوم دافئة"
              className="h-32 w-full"
            />
          </div>
          <div className="absolute -top-5 right-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft animate-float">
            <Star className="h-5 w-5 fill-brand-400 text-brand-400" />
            <div>
              <p className="font-display text-sm font-bold text-brand-900">4.9/5</p>
              <p className="text-xs text-brand-600">تقييم عملائنا</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">
            ليش تختار My home؟
          </h2>
          <p className="mt-3 text-brand-600">نخلي تجربة تأثيث بيتك سهلة ومريحة من أولها لآخرها.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-x py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">
              قطع مختارة لك
            </h2>
            <p className="mt-2 text-brand-600">أكثر القطع طلباً من عائلات مكة هذا الشهر.</p>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="hidden items-center gap-1 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 sm:flex"
          >
            عرض الكل <ArrowLeft className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate('/products')}
              className="card group overflow-hidden text-right"
            >
              <div className="overflow-hidden bg-brand-50 transition-transform duration-500 group-hover:scale-105">
                <FurnitureIllustration
                  kind={p.kind}
                  label={p.name}
                  className="h-56 w-full"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-brand-500">{p.category}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-brand-900">{p.name}</h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-display text-xl font-extrabold text-brand-700">
                    {p.price.toLocaleString()} ر.س
                  </span>
                  {p.oldPrice && (
                    <span className="text-sm text-brand-400 line-through">
                      {p.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">
            لمحات من تصاميمنا
          </h2>
          <p className="mt-3 text-brand-600">إلهام لكل ركن ببيتك من صالة لغرفة النوم.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <div
              key={g.label}
              className={`group relative overflow-hidden rounded-3xl shadow-sm ${
                i === 0 ? 'col-span-2 row-span-2 sm:col-span-1' : ''
              }`}
            >
              <FurnitureIllustration
                kind={g.kind}
                label={g.label}
                className={`w-full transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? 'h-64 sm:h-80' : 'h-40 sm:h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">
              آراء عائلاتنا
            </h2>
            <p className="mt-3 text-brand-600">كلام طيب يفرح القلب ويدفّينا نقدّم أكثر.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="card flex flex-col gap-4 p-7"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-brand-700">“{t.text}”</blockquote>
                <figcaption>
                  <p className="font-display text-base font-bold text-brand-900">{t.name}</p>
                  <p className="text-xs text-brand-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 sm:py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-brand-800 px-8 py-14 text-center text-brand-50 shadow-soft sm:px-16">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">جاهز تجهّز بيتك؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-200">
            تصفّح قائمتنا واختار القطع اللي تناسب ذوقك ومساحتك، أو راسلنا على واتساب ونساعدك تختار.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => navigate('/products')} className="btn-primary bg-brand-50 text-brand-800 hover:bg-white">
              ابدأ التسوّق <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="btn-outline border-brand-300/40 text-brand-50 hover:bg-brand-700 hover:text-white"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
