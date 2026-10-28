export const needOptions = [
  'New elevator for a villa',
  'New elevator for a building',
  'Panoramic elevator',
  'Freight elevator',
  'Escalator or moving walk',
  'Maintenance contract',
  'Repair or modernisation',
  'Something else',
];

export const cities = ['Dammam', 'Al Khobar', 'Dhahran', 'Jubail', 'Al Ahsa', 'Riyadh', 'Jeddah', 'Makkah', 'Madinah', 'Other'];

/** Closest "what do you need" option for each product page. */
const needFromSlug: Record<string, string> = {
  'passenger-elevators': 'New elevator for a building',
  'villa-elevators': 'New elevator for a villa',
  'panoramic-elevators': 'Panoramic elevator',
  'freight-elevators': 'Freight elevator',
  'escalators-moving-walks': 'Escalator or moving walk',
};

export const quoteHref = (slug?: string) => {
  const need = slug ? needFromSlug[slug] : undefined;
  return need ? `/contact?need=${encodeURIComponent(need)}` : '/contact';
};
