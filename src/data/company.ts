import type { Locale } from '../i18n';

export const companyData = {
  name: 'GTEC Elevators',
  fullName: 'Global Team Elevator Co.',
  established: 2007,
  email: 'sales@gtecelevators.com',
  phone: '+966 13 818 1396',
  mobile: '+966 55 262 9141',
  altMobile: '+966 55 262 9337',
  postalCode: '31528',
};

/** Text that changes with language. The street line stays in Latin script until the official Arabic address is confirmed. */
export const companyText: Record<
  Locale,
  { hours: string; addressLines: string[]; office: string; region: string }
> = {
  en: {
    hours: 'Sunday to Thursday, 8:00 am to 5:00 pm',
    addressLines: ['Al Aali Street #1, 71', 'P.O. Box 72635, Dammam 31528', 'Kingdom of Saudi Arabia'],
    office: 'Dammam office',
    region: 'Dammam, Eastern Province',
  },
  ar: {
    hours: 'من الأحد إلى الخميس، من 8:00 صباحًا حتى 5:00 مساءً',
    addressLines: ['Al Aali Street #1, 71', 'ص.ب 72635، الدمام 31528', 'المملكة العربية السعودية'],
    office: 'مكتب الدمام',
    region: 'الدمام، المنطقة الشرقية',
  },
};

/** Digits-only form for tel: links. */
export const telHref = (n: string) => `tel:${n.replace(/[^\d+]/g, '')}`;

/** WhatsApp chat link for the sales mobile. */
export const whatsappHref = `https://wa.me/${companyData.mobile.replace(/\D/g, '')}`;
