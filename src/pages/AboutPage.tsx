import { Heart, Home, Users, Award, ArrowLeft } from 'lucide-react';
import { navigate } from '@/router';

const VALUES = [
  {
    icon: Heart,
    title: 'ذوق عائلي',
    desc: 'نختار قطع تناسب حياة العائلة — عملية، مريحة، وآمنة للأطفال.',
  },
  {
    icon: Award,
    title: 'جودة تدوم',
    desc: 'نشتري من مصانع موثوقة ونفحص كل قطعة قبل ما توصل لبيتك.',
  },
  {
    icon: Users,
    title: 'خدمة قريبة',
    desc: 'فريقنا يسمعك ويساعدك تختار اللي يناسب مساحتك وميزانيتك.',
  },
];

const STEPS = [
  { n: '١', t: 'تتصفّح القائمة', d: 'تشوف القطع المتوفرة وتختار اللي يناسب ذوقك.' },
  { n: '٢', t: 'تضيف للسلة', d: 'تضيف القطع لسلتك وتراجعها بكل راحة.' },
  { n: '٣', t: 'ترسل الطلب', d: 'نكمل معك على واتساب ونأخذ تفاصيل التوصيل.' },
  { n: '٤', t: 'نوصل ونركّب', d: 'نوصّل لبيتك في مكة ونسوّي تركيب مجاناً.' },
];

export default function AboutPage() {
  return (
    <div className="bg-grain">
      {/* Intro */}
      <section className="container-x grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="text-sm font-semibold text-brand-500">عنّا</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            قصتنا تبدأ من مكة
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-700">
            My home وُلد من فكرة بسيطة: كل عائلة تستاهل بيت دافئ وأنيق بدون ما تتعب في البحث.
            بدأنا بمعرض صغير في العزيزية، واليوم نخدم عائلات كثيرة في مكة ونختار لهم أثاث يعيش
            معهم سنوات طويلة.
          </p>
          <p className="mt-4 leading-relaxed text-brand-600">
            نفهم إن بيتك مو مجرد أثاث — بيتك ذكريات، جلسات عائلة، وضيوف. عشان كذا نحرص كل قطعة
            تطلع من عندنا تكون عملية وتجمّل ركن من بيتك.
          </p>
          <button onClick={() => navigate('/products')} className="btn-primary mt-8">
            شوف قائمتنا <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
            alt="صالة عرض My home"
            className="h-72 w-full rounded-3xl object-cover shadow-soft"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80"
            alt="ركن أنيق من المعرض"
            className="mt-8 h-72 w-full rounded-3xl object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-10">
        <div className="grid gap-6 rounded-[2.5rem] bg-brand-800 px-8 py-12 text-brand-50 sm:grid-cols-3">
          <div className="text-center">
            <p className="font-display text-4xl font-extrabold">+500</p>
            <p className="mt-1 text-sm text-brand-200">عائلة في مكة</p>
          </div>
          <div className="text-center sm:border-x sm:border-brand-700">
            <p className="font-display text-4xl font-extrabold">+120</p>
            <p className="mt-1 text-sm text-brand-200">قطعة متنوعة</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-extrabold">٤.٩</p>
            <p className="mt-1 text-sm text-brand-200">متوسط تقييم عملائنا</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">قيمنا</h2>
          <p className="mt-3 text-brand-600">مبادئ نلتزم فيها مع كل عميل وكل قطعة.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="card p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <v.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-brand-900 sm:text-4xl">كيف تطلب؟</h2>
            <p className="mt-3 text-brand-600">أربع خطوات بسيطة وبيتك يجهّز.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-3xl bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 font-display text-xl font-extrabold text-brand-50">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-brand-100 bg-white p-10 text-center shadow-sm">
          <Home className="mx-auto h-10 w-10 text-brand-400" />
          <p className="mt-5 font-display text-xl font-bold leading-relaxed text-brand-900 sm:text-2xl">
            «نبى كل بيت في مكة يكون دافئ وأنيق، وكل عائلة تلاقي أثاث يليق بيها بدون تعب.»
          </p>
          <p className="mt-4 text-sm text-brand-500">— فريق My home</p>
        </div>
      </section>
    </div>
  );
}
