import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/company';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      <section className="bg-[#161017] text-white py-14 sm:py-16 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.16em] text-[#CBEFB6] font-semibold block mb-2">
            Governance & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
            Privacy Policy & Data Notice
          </h1>
          <p className="text-sm text-[#dcd4dc]">
            Global Team Elevator Co. (GTEC) · Effective Date: January 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[70ch] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#1c151d] leading-relaxed">
          <div className="p-4 bg-[#f3fbf0] rounded-lg border border-[#b8e59e] flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#1d4013] shrink-0 mt-0.5" />
            <p className="text-xs text-[#1d4013] leading-relaxed">
              This privacy notice outlines how Global Team Elevator Co. handles information collected through our website (<a href="https://www.gtecelevators.com" className="text-[#9B1D20] underline font-medium">www.gtecelevators.com</a>) and our digital quotation services in the Kingdom of Saudi Arabia.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1c151d] mb-2">
              1. Information We Collect
            </h2>
            <p className="text-[#3d353c]">
              When you submit a project enquiry or request a quotation, we collect your name, business email address, phone number, company name, project type, elevator product categories of interest, floor quantities, and any accompanying architectural notes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1c151d] mb-2">
              2. Purpose of Processing
            </h2>
            <p className="text-[#3d353c]">
              Your information is processed strictly for the purposes of:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-[#574f56]">
              <li>Preparing accurate technical quotations and architectural hoistway recommendations</li>
              <li>Coordinating engineering consultations, site visits, or maintenance inspections</li>
              <li>Communicating regarding ongoing elevator installation, commissioning, or warranty services</li>
              <li>Complying with applicable statutory records obligations under Saudi commercial law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1c151d] mb-2">
              3. Data Retention & Security
            </h2>
            <p className="text-[#3d353c]">
              We maintain commercial-grade technical and organizational safeguards to protect your submissions against unauthorized access, disclosure, or alteration. We do not sell, rent, or trade your contact or project details to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1c151d] mb-2">
              4. Contact Regarding Data
            </h2>
            <p className="text-[#3d353c]">
              If you wish to review, update, or request deletion of project information previously submitted, please contact our Dammam administration desk directly:
            </p>
            <div className="mt-3 p-4 bg-[#fbfbfa] rounded-lg border border-[#ded8d8] text-xs space-y-1 font-mono tabular-nums text-[#3d353c]">
              <div><strong className="text-[#1c151d] font-sans">Entity:</strong> Global Team Elevator Co. (GTEC)</div>
              <div><strong className="text-[#1c151d] font-sans">Email:</strong> <a href={`mailto:${companyData.email}`} className="text-[#9B1D20] underline font-sans">{companyData.email}</a></div>
              <div><strong className="text-[#1c151d] font-sans">Telephone:</strong> {companyData.phone}</div>
              <div><strong className="text-[#1c151d] font-sans">Address:</strong> <span className="font-sans">{companyData.address}</span></div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#ded8d8]">
            <Link to="/contact" className="text-xs font-semibold text-[#9B1D20] hover:underline">
              ← Return to Project Quotation Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
