import React from 'react';
import { Link } from 'react-router-dom';
import { GtecLogo } from './GtecLogo';
import { companyData } from '../data/company';
import { productCategories } from '../data/products';
import { servicesData } from '../data/services';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161017] text-[#ffffff] border-t border-[#382739]">
      {/* Upper Pre-Footer Callout - Professional Dark Surface */}
      <div className="border-b border-[#382739] py-14 px-4 sm:px-6 lg:px-8 bg-[#201721]">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-[68ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
              Vertical Transportation Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Ready to discuss your building's elevator specifications?
            </h2>
            <p className="text-base text-[#dcd4dc] mt-2.5 leading-relaxed max-w-[65ch]">
              Collaborate directly with our engineering team in Saudi Arabia to evaluate hoistway requirements, speed ratings, and architectural finishes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9B1D20] text-white hover:bg-[#7a1618] active:bg-[#661215] font-semibold text-sm rounded transition-all shadow-md group"
            >
              <span>Submit Project Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#635D5C]/60 hover:border-[#CBEFB6] hover:bg-[#3D2B3D]/50 text-white text-sm font-medium rounded transition-colors font-mono tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#CBEFB6]" />
              <span>Call +966 13 818 1396</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Address - Col Span 4 */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <GtecLogo variant="light" />
            <p className="text-sm text-[#dcd4dc] leading-relaxed mt-2 max-w-[60ch]">
              Global Team Elevator Co. brings together elevator and escalator design, manufacturing, sales, installation, and maintenance across Saudi Arabia since 2007.
            </p>

            <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm text-[#dcd4dc]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CBEFB6] shrink-0 mt-0.5" />
                <span className="text-[#f1edf1]">{companyData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CBEFB6] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="text-[#f1edf1] hover:text-[#CBEFB6] underline-offset-2 hover:underline">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CBEFB6] shrink-0" />
                <span className="font-mono tabular-nums text-[#f1edf1]">
                  Office: {companyData.phone} | Mobile: {companyData.mobile}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[#382739] text-xs text-[#CBEFB6]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Engineering compliance with SASO & Saudi safety standards</span>
            </div>
          </div>

          {/* Product Categories - Col Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#CBEFB6] mb-4">
              Elevator Categories
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {productCategories.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-[#dcd4dc] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{product.title}</span>
                    <span className="text-[#CBEFB6] opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/products"
                  className="text-xs text-[#CBEFB6] hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>View All Categories</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services - Col Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#CBEFB6] mb-4">
              Core Capabilities
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-[#dcd4dc] hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Information - Col Span 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#CBEFB6] mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/about" className="text-[#dcd4dc] hover:text-white transition-colors">
                  About GTEC
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#dcd4dc] hover:text-white transition-colors">
                  Request Quotation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#dcd4dc] hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="bg-[#120d13] py-6 px-4 sm:px-6 lg:px-8 border-t border-[#2a1d2a] text-xs text-[#9c8e9c]">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono tabular-nums">
          <div>
            © {new Date().getFullYear()} Global Team Elevator Co. (GTEC). All rights reserved. Operating in Saudi Arabia since 2007.
          </div>
          <div className="flex items-center gap-6 font-sans">
            <span>Dammam, Eastern Province, KSA</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
