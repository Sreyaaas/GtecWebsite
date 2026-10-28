import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GtecLogo } from './GtecLogo';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/company';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Utility Bar - Clean Architectural Corporate Strip */}
      <div className="bg-[#161017] text-[#dcd4dc] text-xs py-2.5 px-4 sm:px-8 border-b border-[#382739] hidden md:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[#dcd4dc] font-medium">
              Operating across Saudi Arabia · Established 2007 in Dammam
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a 
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
              className="hover:text-[#CBEFB6] text-[#ffffff] transition-colors flex items-center gap-1.5 font-mono tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-[#CBEFB6]" />
              <span>{companyData.phone}</span>
            </a>
            <span className="text-[#382739]">|</span>
            <a 
              href={`mailto:${companyData.email}`} 
              className="text-[#dcd4dc] hover:text-[#CBEFB6] transition-colors"
            >
              {companyData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ded8d8] py-3.5'
            : 'bg-[#fbfbfa] border-b border-[#ded8d8]/80 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-[#9B1D20] rounded">
            <GtecLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B1D20] rounded ${
                    active
                      ? 'text-[#9B1D20] font-semibold'
                      : 'text-[#1c151d] hover:text-[#9B1D20]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9B1D20] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] rounded transition-all shadow-sm group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9B1D20]"
            >
              <span>Request a Quotation</span>
              <ArrowUpRight className="w-4 h-4 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1c151d] hover:text-[#9B1D20] hover:bg-[#f1efef] rounded focus:outline-none focus:ring-2 focus:ring-[#9B1D20]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#ded8d8] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-[1240px] mx-auto px-4 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium px-3 py-2 rounded transition-colors ${
                    isActive(link.href)
                      ? 'bg-[#fdf2f2] text-[#9B1D20] font-semibold'
                      : 'text-[#1c151d] hover:bg-[#f9f9f8]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-[#ded8d8] flex flex-col gap-3 mt-1">
                <Link
                  to="/contact"
                  className="w-full text-center py-3 text-sm font-semibold text-white bg-[#9B1D20] hover:bg-[#7a1618] rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D0FFCE]" />
                </Link>

                <div className="text-xs text-[#635D5C] text-center pt-2">
                  Call Dammam Office: <a href={`tel:${companyData.phone}`} className="text-[#9B1D20] font-medium font-mono tabular-nums">{companyData.phone}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
