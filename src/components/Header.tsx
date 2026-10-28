import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { GtecLogo } from './GtecLogo';
import { companyData, companyText, telHref } from '../data/company';
import { Link, Ltr, NavLink, stripLocale, useCopy, useLocale } from '../i18n';

const copy = {
  en: {
    nav: [
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    quote: 'Request a quote',
    call: 'Call',
    home: 'GTEC Elevators, home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    main: 'Main',
    mobile: 'Mobile',
    switchLabel: 'العربية',
    switchAria: 'عرض الموقع باللغة العربية',
  },
  ar: {
    nav: [
      { label: 'المنتجات', href: '/products' },
      { label: 'الخدمات', href: '/services' },
      { label: 'من نحن', href: '/about' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
    quote: 'اطلب عرض سعر',
    call: 'اتصل على',
    home: 'GTEC للمصاعد، الصفحة الرئيسية',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    main: 'القائمة الرئيسية',
    mobile: 'قائمة الجوال',
    switchLabel: 'English',
    switchAria: 'View this site in English',
  },
};

/** Switches language while keeping the visitor on the same page. */
export const LanguageSwitch: React.FC<{ className?: string }> = ({ className = '' }) => {
  const locale = useLocale();
  const c = useCopy(copy);
  const { pathname, search } = useLocation();
  const base = stripLocale(pathname);
  const target = (locale === 'en' ? (base === '/' ? '/ar' : `/ar${base}`) : base) + search;
  const targetLang = locale === 'en' ? 'ar' : 'en';

  return (
    <RouterLink
      to={target}
      lang={targetLang}
      hrefLang={targetLang}
      aria-label={c.switchAria}
      className={className}
      onClick={() => {
        try {
          localStorage.setItem('gtec-lang', targetLang);
        } catch {
          /* ignore */
        }
      }}
    >
      {c.switchLabel}
    </RouterLink>
  );
};

/** Fixed header: transparent over each page's dark opening band, solid white once the visitor scrolls. */
export const Header: React.FC = () => {
  const c = useCopy(copy);
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300 ${
        solid ? 'bg-white text-ink shadow-[0_1px_0_var(--color-line)]' : 'bg-transparent text-white'
      }`}
    >
      <div className="wrap flex h-[84px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label={c.home}>
          <GtecLogo variant={solid ? 'dark' : 'light'} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10" aria-label={c.main}>
          {c.nav.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative py-2 text-[0.975rem] transition-opacity ${isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100'}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rtl:origin-right transition-transform duration-300 ${
                      solid ? 'bg-brand' : 'bg-white'
                    } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-7">
          <LanguageSwitch
            className={`border-e pe-7 text-[0.975rem] opacity-80 hover:opacity-100 ${solid ? 'border-line' : 'border-white/25'}`}
          />
          <a href={telHref(companyData.phone)} className="text-[0.975rem] tabular-nums opacity-90 hover:opacity-100">
            <Ltr>{companyData.phone}</Ltr>
          </a>
          <Link
            to="/contact"
            className={`btn !min-h-[46px] !px-6 !text-[0.95rem] ${solid ? 'btn-primary' : 'btn-white'}`}
          >
            {c.quote}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitch className="grid h-11 place-items-center px-2 text-[0.95rem]" />
          <a
            href={telHref(companyData.phone)}
            className="grid h-11 w-11 place-items-center"
            aria-label={`${c.call} ${companyData.phone}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center"
            aria-label={open ? c.closeMenu : c.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[84px] bottom-0 overflow-y-auto bg-white text-ink">
          <nav className="wrap flex flex-col py-4" aria-label={c.mobile}>
            {c.nav.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `display border-b border-line py-5 text-2xl ${isActive ? 'text-brand' : 'text-ink'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/contact" className="btn btn-primary w-full">{c.quote}</Link>
              <a href={telHref(companyData.phone)} className="btn btn-secondary w-full">
                {c.call} <Ltr>{companyData.phone}</Ltr>
              </a>
            </div>
            <p className="mt-6 text-sm text-steel-light">{companyText[locale].hours}</p>
          </nav>
        </div>
      )}
    </header>
  );
};
