import { Home, MapPin, Phone, Mail } from 'lucide-react';
import { navigate } from '@/router';
import { WHATSAPP_NUMBER } from '@/data/products';

const LINKS = [
  { path: '/', label: 'الرئيسية' },
  { path: '/products', label: 'القائمة' },
  { path: '/cart', label: 'سلة المشتريات' },
  { path: '/about', label: 'عنّا' },
  { path: '/contact', label: 'تواصل' },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-brand-50">
              <Home className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold text-white">My home</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            أثاث منزلي راقٍ بتصاميم دافئة تليق ببيتك في مكة. نساعدك تخلّي بيتك أحلى ركن بحياتك.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-white">روابط سريعة</h4>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.path}>
                <button
                  onClick={() => navigate(l.path)}
                  className="text-sm text-brand-200 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-white">تواصل معنا</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" /> مكة المكرمة، حي العزيزية
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-400" /> {WHATSAPP_NUMBER}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-400" /> hello@myhome.sa
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-white">ساعات العمل</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-200">
            <li>السبت – الخميس: 9ص – 11م</li>
            <li>الجمعة: 4م – 11م</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-brand-300 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} My home — جميع الحقوق محفوظة.</p>
          <p>صُنع بحب لبيوت مكة.</p>
        </div>
      </div>
    </footer>
  );
}
