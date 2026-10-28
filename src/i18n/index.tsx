import React, { createContext, forwardRef, useContext, useEffect } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  type LinkProps,
  type NavLinkProps,
  type To,
} from 'react-router-dom';

export type Locale = 'en' | 'ar';
export const locales: Locale[] = ['en', 'ar'];

const LocaleContext = createContext<Locale>('en');

/** Sets the locale for everything below it and keeps <html lang dir> in sync. */
export const LocaleProvider: React.FC<{ locale: Locale; children: React.ReactNode }> = ({ locale, children }) => {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);

/** Pick the copy for the current locale from a { en, ar } pair. */
export function useCopy<T>(copy: Record<Locale, T>): T {
  return copy[useLocale()];
}

/** Remove a leading /ar from a pathname. */
export const stripLocale = (pathname: string) => pathname.replace(/^\/ar(?=\/|$)/, '') || '/';

/** Prefix an app path for a locale: /contact -> /ar/contact. */
export const localePath = (locale: Locale, path: string) => {
  if (locale === 'en' || !path.startsWith('/')) return path;
  return path === '/' ? '/ar' : path.startsWith('/?') ? `/ar${path.slice(1)}` : `/ar${path}`;
};

const prefixTo = (to: To, locale: Locale): To => (typeof to === 'string' ? localePath(locale, to) : to);

/** Drop-in Link / NavLink that keep visitors in their chosen language. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const locale = useLocale();
  return <RouterLink ref={ref} to={prefixTo(to, locale)} {...rest} />;
});
Link.displayName = 'Link';

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, ...rest }, ref) => {
  const locale = useLocale();
  return <RouterNavLink ref={ref} to={prefixTo(to, locale)} {...rest} />;
});
NavLink.displayName = 'NavLink';

/**
 * Keeps left-to-right fragments (phone numbers, emails, codes) intact inside Arabic text.
 * Without this, "+966 13 818 1396" renders as "1396 818 13 966+" in a right-to-left paragraph.
 */
export const Ltr: React.FC<{ children: React.ReactNode }> = ({ children }) => <bdi dir="ltr">{children}</bdi>;

/** Same as <Ltr> for plain strings (FAQ answers, email bodies): wraps in Unicode isolate marks. */
export const ltr = (s: string) => `⁦${s}⁩`;
