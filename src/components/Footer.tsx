import React from 'react';
import { Link } from 'react-router-dom';
import { GtecLogo } from './GtecLogo';
import { companyData, telHref, whatsappHref } from '../data/company';
import { productCategories } from '../data/products';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1636] text-white/70">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <GtecLogo variant="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              Elevators and escalators designed, installed and maintained across Saudi Arabia since {companyData.established}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.95rem] font-medium text-white">Products</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {productCategories.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`} className="hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.95rem] font-medium text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About GTEC</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a quote</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy notice</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.95rem] font-medium text-white">Dammam office</h2>
            <address className="mt-4 not-italic text-[0.95rem] leading-relaxed">
              {companyData.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <ul className="mt-4 space-y-1.5 text-[0.95rem]">
              <li>
                <a href={telHref(companyData.phone)} className="text-white hover:underline underline-offset-4">
                  {companyData.phone}
                </a>
              </li>
              <li>
                <a href={whatsappHref} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp {companyData.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 pt-6 pb-24 lg:pb-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Global Team Elevator Co. All rights reserved.</p>
          <p>{companyData.hours}</p>
        </div>
      </div>
    </footer>
  );
};
