import { useEffect } from 'react';
import { useLocale } from '../i18n';

const brand = { en: 'GTEC Elevators', ar: 'GTEC للمصاعد' };
const tagline = {
  en: 'Elevator & Escalator Contractor in Saudi Arabia',
  ar: 'مقاول مصاعد وسلالم كهربائية في المملكة العربية السعودية',
};

export function usePageTitle(title?: string) {
  const locale = useLocale();
  useEffect(() => {
    document.title = title ? `${title} | ${brand[locale]}` : `${brand[locale]} | ${tagline[locale]}`;
  }, [title, locale]);
}
