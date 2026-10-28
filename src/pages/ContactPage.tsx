import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ContactQuotationForm } from '../components/ContactQuotationForm';
import { EnquiryAssistant, EnquirySelections } from '../components/EnquiryAssistant';
import { companyData } from '../data/company';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [selections, setSelections] = useState<Partial<EnquirySelections>>({
    projectType: searchParams.get('projectType') || '',
    requirement: searchParams.get('requirement') || '',
    elevatorCategory: searchParams.get('elevatorCategory') || '',
    projectStage: searchParams.get('projectStage') || '',
  });

  useEffect(() => {
    // Check if state was passed via React Router navigation
    const stateData = (location.state as { prefilled?: EnquirySelections })?.prefilled;
    if (stateData) {
      setSelections(stateData);
    } else {
      setSelections({
        projectType: searchParams.get('projectType') || '',
        requirement: searchParams.get('requirement') || '',
        elevatorCategory: searchParams.get('elevatorCategory') || '',
        projectStage: searchParams.get('projectStage') || '',
      });
    }
  }, [searchParams, location.state]);

  const handleAssistantComplete = (newSelections: EnquirySelections) => {
    setSelections(newSelections);
  };

  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* Page Header - Professional Corporate Dark Stage */}
      <section className="bg-[#161017] text-white py-16 sm:py-20 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[68ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
              Engineering Consultation & Quotations
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Let's discuss your next project.
            </h1>
            <p className="text-base text-[#dcd4dc] leading-relaxed max-w-[65ch]">
              Share your building requirements with our technical team in Saudi Arabia to start a conversation about the right vertical transportation solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Office Coordinates */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column - Col Span 7 */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.16em] text-[#9B1D20] font-bold block mb-1">
                  Step-by-step or direct enquiry
                </span>
                <h2 className="text-2xl font-semibold text-[#1c151d]">
                  Project Quotation Specification
                </h2>
              </div>

              <ContactQuotationForm initialData={selections} />
            </div>

            {/* Sidebar: Office Coordinates & Interactive Selector - Col Span 5 */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Optional Quick Selector Assistant */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.16em] text-[#574f56] font-semibold block">
                  Need Help Framing Specifications?
                </span>
                <EnquiryAssistant
                  compact={true}
                  onComplete={handleAssistantComplete}
                />
              </div>

              {/* Official Office Details Card */}
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#ded8d8] shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <Building className="w-5 h-5 text-[#9B1D20]" />
                  <h3 className="text-lg font-semibold text-[#1c151d]">
                    GTEC Dammam Office
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1c151d] divide-y divide-[#ded8d8]">
                  <div className="pt-2 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#1c151d]">Postal Address:</span>
                      <span className="text-[#3d353c]">{companyData.address}</span>
                      <span className="text-[#635D5C] block text-xs mt-0.5 font-mono tabular-nums">Postal Code: {companyData.postalCode}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#1c151d]">Direct Telephones:</span>
                      <div className="font-mono tabular-nums text-[#3d353c]">Landline: <a href={`tel:${companyData.phone}`} className="hover:text-[#9B1D20] text-[#1c151d] font-medium">{companyData.phone}</a></div>
                      <div className="font-mono tabular-nums text-[#3d353c]">Mobile 1: <a href={`tel:${companyData.mobile}`} className="hover:text-[#9B1D20] text-[#1c151d] font-medium">{companyData.mobile}</a></div>
                      <div className="font-mono tabular-nums text-[#3d353c]">Mobile 2: <a href={`tel:${companyData.altMobile}`} className="hover:text-[#9B1D20] text-[#1c151d] font-medium">{companyData.altMobile}</a></div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#1c151d]">Commercial Enquiries:</span>
                      <a href={`mailto:${companyData.email}`} className="text-[#9B1D20] hover:underline font-medium">
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#1c151d]">Technical Support Hours:</span>
                      <span className="text-[#574f56] font-mono tabular-nums">Sunday to Thursday · 8:00 AM - 5:00 PM (AST)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ded8d8] flex items-center gap-2 text-xs text-[#1d4013]">
                  <ShieldCheck className="w-4 h-4 text-[#1d4013] shrink-0" />
                  <span>Licensed under Saudi Ministry of Commerce & Investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
