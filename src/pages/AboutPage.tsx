import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/company';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* Header - Professional Corporate Dark Stage */}
      <section className="bg-[#161017] text-white py-16 sm:py-20 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[68ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
              Established 2007 · Saudi Arabia
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              About Global Team Elevator Co.
            </h1>
            <p className="text-base text-[#dcd4dc] leading-relaxed max-w-[65ch]">
              Global Team Elevator Co. (GTEC) brings together elevator and escalator design, manufacturing supply, installation, and preventative maintenance, delivering tailored vertical transportation across the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.18em] text-[#9B1D20] font-bold">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight leading-snug">
                Engineering vertical transportation tailored to modern Saudi architecture.
              </h2>
              <p className="text-base text-[#3d353c] leading-relaxed max-w-[65ch]">
                Founded in 2007 in Dammam, Global Team Elevator Co. was established to address the expanding requirements of Saudi Arabia's real estate, commercial, and industrial landscape. We focus on delivering vertical transportation solutions designed around the building, the developer's functional requirements, and the comfort of passengers.
              </p>
              <p className="text-base text-[#3d353c] leading-relaxed max-w-[65ch]">
                Rather than treating elevators as off-the-shelf equipment, our approach considers the building as an integrated environment. From early shaft sizing and traffic analysis to precision mechanical installation and ongoing maintenance, our team stays closely engaged across every milestone.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] text-white text-xs font-semibold rounded transition-colors group shadow-sm"
                >
                  <span>Connect with Our Engineering Office</span>
                  <ArrowRight className="w-4 h-4 text-[#D0FFCE] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-lg overflow-hidden border border-[#ded8d8] shadow-sm aspect-[4/3] bg-[#161017]">
                <img
                  src="/images/elevator-interior-real.jpg"
                  alt="Authentic GTEC elevator cabin interior with architectural lighting and precision stainless steel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Capabilities & Saudi Positioning - Clean 3-Column Architectural Layout */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa] border-b border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.18em] text-[#9B1D20] font-bold block mb-2">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c151d] tracking-tight">
              A Considered Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#ded8d8]">
            <div className="pt-6 md:pt-0 md:pr-8">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#9B1D20]" />
                <h3 className="text-lg font-semibold text-[#1c151d]">
                  Safety & Compliance
                </h3>
              </div>
              <p className="text-sm text-[#574f56] leading-relaxed">
                Adherence to Saudi Building Code, SASO regulations, and international safety norms (EN 81) governs every shaft alignment, component specification, and electrical circuit.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:px-8">
              <div className="flex items-center gap-2.5 mb-3">
                <Award className="w-5 h-5 text-[#1d4013]" />
                <h3 className="text-lg font-semibold text-[#1c151d]">
                  Quality Focus
                </h3>
              </div>
              <p className="text-sm text-[#574f56] leading-relaxed">
                Product quality and dependable performance are central to our approach. We partner with established global manufacturers and inspect all equipment prior to installation.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#9B1D20]" />
                <h3 className="text-lg font-semibold text-[#1c151d]">
                  Ongoing Dependability
                </h3>
              </div>
              <p className="text-sm text-[#574f56] leading-relaxed">
                Our relationship with building owners and facility managers continues long after handover through structured preventative maintenance and local technical service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Office Details */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161017] text-white rounded-lg p-8 sm:p-12 border border-[#382739]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[#CBEFB6] font-bold block mb-2">
                  Headquarters & Regional Operations
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  Dammam, Eastern Province
                </h3>
                <p className="text-sm text-[#dcd4dc] leading-relaxed mb-6 max-w-[60ch]">
                  Global Team Elevator Co. maintains its central operations in Dammam, coordinating equipment supply, project delivery, and maintenance operations throughout the Kingdom of Saudi Arabia.
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#dcd4dc]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#CBEFB6] shrink-0 mt-0.5" />
                    <span>{companyData.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono tabular-nums">
                    <Phone className="w-4 h-4 text-[#CBEFB6] shrink-0" />
                    <span>Office: {companyData.phone} | Mobile: {companyData.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#CBEFB6] shrink-0" />
                    <a href={`mailto:${companyData.email}`} className="text-white hover:text-[#CBEFB6] underline-offset-2 underline">
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#201721] p-6 sm:p-8 rounded-lg border border-[#382739] shadow-sm">
                <span className="text-xs uppercase tracking-[0.18em] text-[#CBEFB6] font-bold block mb-2">
                  Have an Upcoming Project?
                </span>
                <p className="text-sm text-[#dcd4dc] mb-6 leading-relaxed">
                  Speak directly with a technical specialist to discuss hoistway dimensions, capacity ratings, and quotation requirements.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-block text-center py-3.5 px-6 bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] text-white text-xs font-semibold rounded transition-colors shadow-sm"
                >
                  Request Project Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
