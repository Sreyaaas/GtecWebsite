export const companyData = {
  name: 'GTEC Elevators',
  fullName: 'Global Team Elevator Co.',
  established: 2007,
  country: 'Saudi Arabia',
  city: 'Dammam',
  addressLines: ['Al Aali Street #1, 71', 'P.O. Box 72635, Dammam 31528', 'Kingdom of Saudi Arabia'],
  address: 'P.O. Box 72635, Al Aali Street #1, 71 Dammam, Kingdom of Saudi Arabia',
  postalCode: '31528',
  email: 'sales@gtecelevators.com',
  phone: '+966 13 818 1396',
  mobile: '+966 55 262 9141',
  altMobile: '+966 55 262 9337',
  hours: 'Sunday to Thursday, 8:00 am to 5:00 pm',
  tagline: 'Moving people. Connecting spaces.',
};

/** Digits-only form for tel: links. */
export const telHref = (n: string) => `tel:${n.replace(/[^\d+]/g, '')}`;

/** WhatsApp chat link for the sales mobile. */
export const whatsappHref = `https://wa.me/${companyData.mobile.replace(/\D/g, '')}`;
