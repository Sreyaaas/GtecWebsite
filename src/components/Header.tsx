import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { GtecLogo } from './GtecLogo';
import { companyData, telHref } from '../data/company';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Fixed header: transparent over each page's dark opening band, solid white once the visitor scrolls. */
export const Header: React.FC = () => {
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
        <Link to="/" className="shrink-0" aria-label="GTEC Elevators, home">
          <GtecLogo variant={solid ? 'dark' : 'light'} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
          {navLinks.map((l) => (
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
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left transition-transform duration-300 ${
                      solid ? 'bg-brand' : 'bg-white'
                    } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-7">
          <a href={telHref(companyData.phone)} className="text-[0.975rem] tabular-nums opacity-90 hover:opacity-100">
            {companyData.phone}
          </a>
          <Link
            to="/contact"
            className={`btn !min-h-[46px] !px-6 !text-[0.95rem] ${solid ? 'btn-primary' : 'btn-white'}`}
          >
            Request a quote
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a href={telHref(companyData.phone)} className="grid h-11 w-11 place-items-center" aria-label={`Call ${companyData.phone}`}>
            <Phone className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[84px] bottom-0 overflow-y-auto bg-white text-ink">
          <nav className="wrap flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((l) => (
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
              <Link to="/contact" className="btn btn-primary w-full">Request a quote</Link>
              <a href={telHref(companyData.phone)} className="btn btn-secondary w-full">Call {companyData.phone}</a>
            </div>
            <p className="mt-6 text-sm text-steel-light">{companyData.hours}</p>
          </nav>
        </div>
      )}
    </header>
  );
};
