import { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Home } from 'lucide-react';
import { navigate } from '@/router';
import { useCart } from '@/context/CartContext';

const LINKS = [
  { path: '/', label: 'الرئيسية' },
  { path: '/products', label: 'القائمة' },
  { path: '/cart', label: 'سلة المشتريات' },
  { path: '/about', label: 'عنّا' },
  { path: '/contact', label: 'تواصل' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState('/');
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = () => {
      setPath(window.location.hash.replace(/^#/, '') || '/');
      setOpen(false);
    };
    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-800 transition-transform hover:scale-105"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-brand-50">
            <Home className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">My home</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.path}>
              <button
                onClick={() => navigate(l.path)}
                className={`nav-link ${path === l.path ? 'nav-link-active' : ''}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/cart')}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all hover:bg-brand-100"
            aria-label="سلة المشتريات"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -left-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-bold text-brand-50 animate-fade-in">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 md:hidden"
            aria-label="القائمة"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-brand-100 bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <li key={l.path}>
              <button
                onClick={() => navigate(l.path)}
                className={`block w-full rounded-xl px-4 py-3 text-right text-base font-medium transition-colors ${
                  path === l.path
                    ? 'bg-brand-600 text-brand-50'
                    : 'text-brand-700 hover:bg-brand-50'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
