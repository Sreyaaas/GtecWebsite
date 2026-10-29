import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, ArrowUpRight } from 'lucide-react';
import { companyData, telHref } from '../data/company';
import { Link, stripLocale, useCopy } from '../i18n';

const copy = {
  en: { call: 'Call us', quote: 'Request a quote' },
  ar: { call: 'اتصل بنا', quote: 'اطلب عرض سعر' },
};

/** Fixed call / quote bar on small phone screens (hidden on iPad / desktop). */
export const MobileActionBar: React.FC = () => {
  const c = useCopy(copy);
  const { pathname } = useLocation();
  if (stripLocale(pathname) === '/contact') return null;

  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <a
        href={telHref(companyData.phone)}
        className="flex h-13 items-center justify-center gap-2 text-[0.925rem] font-medium text-ink border-e border-line active:bg-mist transition-colors"
      >
        <Phone className="h-4 w-4 text-brand shrink-0" />
        <span>{c.call}</span>
      </a>
      <Link
        to="/contact"
        className="flex h-13 items-center justify-center gap-1.5 bg-brand text-[0.925rem] font-medium text-white active:bg-brand-dark transition-colors"
      >
        <span>{c.quote}</span>
        <ArrowUpRight className="h-4 w-4 opacity-75 shrink-0" />
      </Link>
    </div>
  );
};
