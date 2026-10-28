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

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="GTEC Elevators, home">
          <GtecLogo />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative py-2 text-[0.975rem] transition-colors ${
                  isActive ? 'text-ink font-medium' : 'text-steel hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-brand" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={telHref(companyData.phone)} className="text-[0.975rem] text-ink hover:text-brand transition-colors">
            {companyData.phone}
          </a>
          <Link to="/contact" className="btn btn-primary !min-h-[44px] !px-5 !text-[0.95rem]">
            Request a quote
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={telHref(companyData.phone)}
            className="grid h-11 w-11 place-items-center text-ink"
            aria-label={`Call ${companyData.phone}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center text-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[77px] bottom-0 bg-white overflow-y-auto">
          <nav className="wrap flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `border-b border-line py-4 text-xl ${isActive ? 'text-brand font-medium' : 'text-ink'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/contact" className="btn btn-primary w-full">
                Request a quote
              </Link>
              <a href={telHref(companyData.phone)} className="btn btn-secondary w-full">
                Call {companyData.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-steel-light">{companyData.hours}</p>
          </nav>
        </div>
      )}
    </header>
  );
};
