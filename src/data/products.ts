import type { ProductKind } from '@/components/FurnitureIllustration';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  kind: ProductKind;
  desc: string;
  tag?: string;
};

export type CartItem = Product & { qty: number };

export const PRODUCTS: Product[] = [
  {
    id: 'sofa-lina',
    name: 'كنبة لينا الثلاثية',
    category: 'غرف المعيشة',
    price: 1890,
    oldPrice: 2350,
    kind: 'sofa',
    desc: 'كنبة قماشية بثلاث مقاعد بلون بيج هادئ وقماش مقاوم للبقع، مثالية للعائلة.',
    tag: 'الأكثر مبيعاً',
  },
  {
    id: 'bed-sahar',
    name: 'سرير سحار كينج',
    category: 'غرف النوم',
    price: 2450,
    kind: 'bed',
    desc: 'سرير كينج بخشب زان طبيعي وتنجيد مريح يمنح غرفتك دفئاً وراحة لا مثيل لها.',
    tag: 'جديد',
  },
  {
    id: 'table-nour',
    name: 'طاولة طعام نور',
    category: 'طاولات',
    price: 1290,
    oldPrice: 1590,
    kind: 'dining',
    desc: 'طاولة طعام تتسع لستة أشخاص بسطح خشبي أنيق وأرجل معدنية متينة.',
  },
  {
    id: 'wardrobe-dana',
    name: 'خزانة دانا',
    category: 'غرف النوم',
    price: 1690,
    kind: 'wardrobe',
    desc: 'خزانة ملابس واسعة بستة أبواب ومرايا جانبية لمظهر عملي وأنيق.',
  },
  {
    id: 'chair-randa',
    name: 'كرسي راندا',
    category: 'غرف المعيشة',
    price: 340,
    kind: 'chair',
    desc: 'كرسي مخملي بلون زيتي هادئ بإطار خشبي، يضيف لمسة دافئة لأي ركن.',
  },
  {
    id: 'tv-taleel',
    name: 'وحدة تلفاز طليل',
    category: 'غرف المعيشة',
    price: 890,
    oldPrice: 1090,
    kind: 'tv',
    desc: 'وحدة تلفاز عصرية بأدراج تخزين واسعة وسطح مقاوم للخدوش.',
  },
  {
    id: 'nightstand-amal',
    name: 'طاولة سرير أمل',
    category: 'غرف النوم',
    price: 260,
    kind: 'nightstand',
    desc: 'طاولة جانبية صغيرة بدرج أنيق، تكمّل غرفة النوم بشكل عملي وجميل.',
  },
  {
    id: 'carpet-rim',
    name: 'سجادة ريم الصوفية',
    category: 'إكسسوارات',
    price: 520,
    oldPrice: 680,
    kind: 'carpet',
    desc: 'سجادة صوفية ناعمة بنقشة هادئة تضيف الدفء لصالة منزلك.',
    tag: 'عرض',
  },
];

export const CATEGORIES = [
  'الكل',
  'غرف المعيشة',
  'غرف النوم',
  'طاولات',
  'إكسسوارات',
] as const;

export const WHATSAPP_NUMBER = '966500000000';
export const WHATSAPP_MESSAGE = 'السلام عليكم، حاب أستفسر عن قطع الأثاث المتوفرة عندكم.';
