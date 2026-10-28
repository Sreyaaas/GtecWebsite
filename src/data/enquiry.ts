import type { Locale } from '../i18n';

/** What the visitor needs. The id travels in the URL (?need=villa); labels are shown per language. */
export const needOptions: { id: string; label: Record<Locale, string> }[] = [
  { id: 'villa', label: { en: 'New elevator for a villa', ar: 'مصعد جديد لفيلا' } },
  { id: 'building', label: { en: 'New elevator for a building', ar: 'مصعد جديد لمبنى' } },
  { id: 'panoramic', label: { en: 'Panoramic elevator', ar: 'مصعد بانورامي' } },
  { id: 'freight', label: { en: 'Freight elevator', ar: 'مصعد بضائع' } },
  { id: 'escalator', label: { en: 'Escalator or moving walk', ar: 'سلم كهربائي أو ممر متحرك' } },
  { id: 'maintenance', label: { en: 'Maintenance contract', ar: 'عقد صيانة' } },
  { id: 'repair', label: { en: 'Repair or modernisation', ar: 'إصلاح أو تحديث' } },
  { id: 'other', label: { en: 'Something else', ar: 'طلب آخر' } },
];

export const cities: { id: string; label: Record<Locale, string> }[] = [
  { id: 'dammam', label: { en: 'Dammam', ar: 'الدمام' } },
  { id: 'khobar', label: { en: 'Al Khobar', ar: 'الخبر' } },
  { id: 'dhahran', label: { en: 'Dhahran', ar: 'الظهران' } },
  { id: 'jubail', label: { en: 'Jubail', ar: 'الجبيل' } },
  { id: 'ahsa', label: { en: 'Al Ahsa', ar: 'الأحساء' } },
  { id: 'riyadh', label: { en: 'Riyadh', ar: 'الرياض' } },
  { id: 'jeddah', label: { en: 'Jeddah', ar: 'جدة' } },
  { id: 'makkah', label: { en: 'Makkah', ar: 'مكة المكرمة' } },
  { id: 'madinah', label: { en: 'Madinah', ar: 'المدينة المنورة' } },
  { id: 'other', label: { en: 'Other', ar: 'مدينة أخرى' } },
];

const needFromSlug: Record<string, string> = {
  'passenger-elevators': 'building',
  'villa-elevators': 'villa',
  'panoramic-elevators': 'panoramic',
  'freight-elevators': 'freight',
  'escalators-moving-walks': 'escalator',
};

/** Contact link with the right enquiry pre-selected. Locale prefixing is done by the i18n Link. */
export const quoteHref = (slug?: string) => {
  const need = slug ? needFromSlug[slug] : undefined;
  return need ? `/contact?need=${need}` : '/contact';
};
