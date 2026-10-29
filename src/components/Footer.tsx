import React from 'react';
import { GtecLogo } from './GtecLogo';
import { LanguageSwitch } from './Header';
import { companyData, companyText, telHref, whatsappHref } from '../data/company';
import { useProducts } from '../data/products';
import { Link, Ltr, useCopy, useLocale } from '../i18n';

const copy = {
  en: {
    blurb: `Elevators and escalators designed, installed and maintained across Saudi Arabia since ${companyData.established}.`,
    products: 'Products',
    company: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'About GTEC', href: '/about' },
      { label: 'Request a quote', href: '/contact' },
      { label: 'Privacy notice', href: '/privacy' },
    ],
    rights: 'Global Team Elevator Co. All rights reserved.',
    language: 'Language',
  },
  ar: {
    blurb: `مصاعد وسلالم كهربائية نصمّمها ونركّبها ونتولى صيانتها في مختلف مناطق المملكة العربية السعودية منذ عام ${companyData.established}.`,
    products: 'المنتجات',
    company: 'الشركة',
    links: [
      { label: 'الخدمات', href: '/services' },
      { label: 'عن GTEC', href: '/about' },
      { label: 'اطلب عرض سعر', href: '/contact' },
      { label: 'إشعار الخصوصية', href: '/privacy' },
    ],
    rights: '\u2066Global Team Elevator Co.\u2069 جميع الحقوق محفوظة.',
    language: 'اللغة',
  },
};

export const Footer: React.FC = () => {
  const c = useCopy(copy);
  const locale = useLocale();
  const text = companyText[locale];
  const products = useProducts();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1636] text-white/70">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <GtecLogo variant="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">{c.blurb}</p>
            <p className="mt-6 text-[0.95rem]">
              {c.language}:{' '}
              <LanguageSwitch className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" />
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.95rem] font-medium text-white plain-heading">{c.products}</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {products.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`} className="hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.95rem] font-medium text-white plain-heading">{c.company}</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.95rem] font-medium text-white plain-heading">{text.office}</h2>
            <address className="mt-4 not-italic text-[0.95rem] leading-relaxed">
              {text.addressLines.map((l) => (
                <span key={l} className="block"><bdi>{l}</bdi></span>
              ))}
            </address>
            <ul className="mt-4 space-y-1.5 text-[0.95rem]">
              <li>
                <a href={telHref(companyData.phone)} className="text-white hover:underline underline-offset-4">
                  <Ltr>{companyData.phone}</Ltr>
                </a>
              </li>
              <li>
                <a href={whatsappHref} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  {locale === 'ar' ? 'واتساب' : 'WhatsApp'} <Ltr>{companyData.mobile}</Ltr>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  <Ltr>{companyData.email}</Ltr>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 pt-6 pb-20 sm:pb-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Ltr>{year}</Ltr> {c.rights}
          </p>
          <p>{text.hours}</p>
        </div>
      </div>
    </footer>
  );
};
