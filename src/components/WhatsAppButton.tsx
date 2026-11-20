import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/data/products';

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px] sm:inline">
        تواصل معنا
      </span>
    </a>
  );
}
