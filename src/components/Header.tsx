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
export const LanguageSwitch: React.FC<{ className?: string; onClick?: () => void }> = ({ className = '', onClick }) => {
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
        onClick?.();
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

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
        open
          ? 'h-dvh bg-white text-ink flex flex-col lg:h-auto lg:bg-white/95 lg:backdrop-blur-md'
          : solid
          ? 'bg-white/95 backdrop-blur-md text-ink shadow-[0_1px_0_var(--color-line)]'
          : 'bg-gradient-to-b from-ink/85 via-ink/40 to-transparent text-white'
      }`}
    >
      <div
        className={`shrink-0 wrap flex h-[68px] sm:h-[76px] lg:h-[84px] items-center justify-between gap-4 sm:gap-6 ${
          open ? 'border-b border-line' : ''
        }`}
      >
        <Link to="/" className="shrink-0" aria-label={c.home} onClick={() => setOpen(false)}>
          <GtecLogo variant={solid ? 'dark' : 'light'} />
        </Link>

        {/* Desktop & iPad landscape navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9" aria-label={c.main}>
          {c.nav.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative whitespace-nowrap py-2 text-[0.925rem] xl:text-[0.975rem] font-medium transition-opacity ${
                  isActive ? 'opacity-100 font-semibold' : 'opacity-80 hover:opacity-100'
                }`
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

        {/* Desktop & iPad actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <LanguageSwitch
            className={`whitespace-nowrap border-e pe-4 xl:pe-6 text-[0.9rem] xl:text-[0.95rem] font-medium opacity-85 hover:opacity-100 transition-opacity ${
              solid ? 'border-line text-ink' : 'border-white/25 text-white'
            }`}
          />
          <a
            href={telHref(companyData.phone)}
            className="hidden xl:inline whitespace-nowrap text-[0.9rem] xl:text-[0.95rem] tabular-nums opacity-90 hover:opacity-100"
          >
            <Ltr>{companyData.phone}</Ltr>
          </a>
          <Link
            to="/contact"
            className={`btn !min-h-[40px] xl:!min-h-[46px] !px-4 xl:!px-6 !text-[0.875rem] xl:!text-[0.95rem] whitespace-nowrap ${
              solid ? 'btn-primary' : 'btn-white'
            }`}
          >
            {c.quote}
          </Link>
        </div>

        {/* Mobile & iPad portrait actions */}
        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <LanguageSwitch
            className={`px-2.5 py-1 text-xs font-semibold tracking-wide rounded border transition-colors ${
              solid
                ? 'border-line text-ink bg-mist/60 hover:bg-mist'
                : 'border-white/30 text-white bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setOpen(false)}
          />
          <a
            href={telHref(companyData.phone)}
            className={`grid h-10 w-10 place-items-center rounded transition-colors ${
              solid ? 'text-ink hover:bg-mist' : 'text-white hover:bg-white/10'
            }`}
            aria-label={`${c.call} ${companyData.phone}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded transition-colors ${
              solid ? 'text-ink hover:bg-mist' : 'text-white hover:bg-white/10'
            }`}
            aria-label={open ? c.closeMenu : c.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden flex-1 overflow-y-auto overscroll-contain bg-white text-ink"
        >
          <nav className="wrap flex flex-col py-6 pb-28" aria-label={c.mobile}>
            {/* Language switch row in drawer */}
            <div className="flex items-center justify-between border-b border-line pb-4 mb-2">
              <span className="text-sm font-medium text-steel">{locale === 'ar' ? 'اللغة' : 'Language'}</span>
              <LanguageSwitch
                className="px-3.5 py-1.5 rounded border border-line bg-mist text-sm font-semibold text-brand hover:border-brand"
                onClick={() => setOpen(false)}
              />
            </div>

            {c.nav.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `display border-b border-line py-4 text-xl sm:text-2xl transition-colors ${
                    isActive ? 'text-brand font-semibold' : 'text-ink hover:text-brand'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full !min-h-[50px]"
              >
                {c.quote}
              </Link>
              <a
                href={telHref(companyData.phone)}
                onClick={() => setOpen(false)}
                className="btn btn-secondary w-full !min-h-[50px]"
              >
                <Phone className="h-4 w-4" />
                <span>{c.call} <Ltr>{companyData.phone}</Ltr></span>
              </a>
            </div>

            <p className="mt-6 text-sm text-steel-light text-center">{companyText[locale].hours}</p>
          </nav>
        </div>
      )}
    </header>
  );
};
