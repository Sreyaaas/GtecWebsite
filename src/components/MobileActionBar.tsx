import React from 'react';
import { useLocation } from 'react-router-dom';
import { companyData, telHref } from '../data/company';
import { Link, stripLocale, useCopy } from '../i18n';

const copy = {
  en: { call: 'Call us', quote: 'Request a quote' },
  ar: { call: 'اتصل بنا', quote: 'اطلب عرض سعر' },
};

/** Fixed call / quote bar on small screens, where most visitors arrive from search and want to call. */
export const MobileActionBar: React.FC = () => {
  const c = useCopy(copy);
  const { pathname } = useLocation();
  if (stripLocale(pathname) === '/contact') return null;

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white pb-[env(safe-area-inset-bottom)]">
      <a href={telHref(companyData.phone)} className="flex h-14 items-center justify-center text-[0.975rem] font-medium text-ink">
        {c.call}
      </a>
      <Link to="/contact" className="flex h-14 items-center justify-center bg-brand text-[0.975rem] font-medium text-white">
        {c.quote}
      </Link>
    </div>
  );
};
