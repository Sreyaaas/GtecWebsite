import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ServicePhase {
  id: string;
  phaseNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  keyPoints: string[];
  stakeholderNote: {
    role: string;
    text: string;
  };
  ctaRequirement: string;
}

const servicePhases: ServicePhase[] = [
  {
    id: 'engineering-supply',
    phaseNumber: '01',
    title: 'Architectural Engineering & Equipment Supply',
    subtitle: 'Traffic flow calculation, hoistway coordination, and factory-certified equipment procurement.',
    description:
      'We engage with architectural studios, consulting engineers, and property developers at the design phase. By calculating passenger flow intervals and structural hoistway requirements early, we eliminate costly structural changes and ensure compliance with the Saudi Building Code before construction begins.',
    image: '/images/landing-minimalist.jpg',
    imageAlt: 'Architectural elevator landing in modern commercial building with minimalist stainless steel finishes',
    keyPoints: [
      'Traffic flow calculations and waiting-interval modeling based on building occupancy patterns',
      'Structural shaft layout coordination, pit depth calculations, and overhead headroom optimization',
      'Power supply, heat dissipation, and electrical substation feed specifications',
      'Permanent magnet synchronous gearless traction machines with energy-efficient drives',
      'Microprocessor controller cabinets and safety-rated operational circuit boards',
    ],
    stakeholderNote: {
      role: 'For Architects & Consultants',
      text: 'Early integration of shaft sizing and electrical parameters prevents shaft re-work during structural concrete pouring.',
    },
    ctaRequirement: 'Elevator Design & Manufacturing Supply',
  },
  {
    id: 'installation-commissioning',
    phaseNumber: '02',
    title: 'Site Installation & Multi-Point Commissioning',
    subtitle: 'Precision mechanical alignment, laser-plumbed guide rails, and certified statutory handover.',
    description:
      'Our factory-trained technicians execute mechanical and electrical installation under disciplined site safety protocols. From laser alignment of heavy-duty guide rails to full-load emergency brake testing and Civil Defense coordination, every installation is verified before passenger occupancy.',
    image: '/images/elevator-interior-real.jpg',
    imageAlt: 'Authentic high-end elevator cabin interior featuring precision stainless steel and architectural lighting',
    keyPoints: [
      'Shaft plumbing and precision laser alignment of guide rails to minimize operational friction',
      'Assembly of car frame, safety gear mechanism, and vibration-isolating sling mounts',
      'Overhead machine mounting, hoist rope suspension, and counterweight balancing',
      'Full-load overspeed governor tripping and safety gear wedge engagement testing',
      'Coordination with civil defense and statutory inspection authorities for licensing handover',
    ],
    stakeholderNote: {
      role: 'For General Contractors',
      text: 'Rigorous schedule coordination and disciplined site safety ensure elevator shafts are handed over cleanly and on time.',
    },
    ctaRequirement: 'Installation & Commissioning',
  },
  {
    id: 'maintenance-lifecycle',
    phaseNumber: '03',
    title: 'Preventative Maintenance & Modernization',
    subtitle: 'Scheduled servicing, 24/7 technical callouts, genuine spare parts, and lifecycle retrofits.',
    description:
      'Vertical transportation is a long-term building asset. We provide structured preventative maintenance routines that safeguard passenger comfort and reduce unexpected downtime. When systems age, our modernization services upgrade controllers, door systems, and cab aesthetics.',
    image: '/images/panel-black-titanium.jpg',
    imageAlt: 'Precision black titanium elevator operating panel with high-contrast floor indicators',
    keyPoints: [
      'Regular lubrication, brake gap inspection, and guide rail cleaning routines',
      'Microprocessor diagnostic memory review to identify and prevent potential faults early',
      'Traction rope tension balancing and suspension system integrity audits',
      'Regional inventory of genuine spare parts in Eastern Province for rapid turnaround',
      'Modernization assessments: controller upgrades, VVVF vector drives, and cab refurbishments',
    ],
    stakeholderNote: {
      role: 'For Building Owners & Facility Managers',
      text: 'Preventative care and rapid regional parts availability protect your investment and maintain reliable building mobility.',
    },
    ctaRequirement: 'Maintenance & After-Sales Support',
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* Header - Professional Corporate Dark Stage */}
      <section className="bg-[#161017] text-white py-16 sm:py-20 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[68ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
              End-to-End Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Comprehensive Lifecycle Services
            </h1>
            <p className="text-base text-[#dcd4dc] leading-relaxed max-w-[68ch]">
              Global Team Elevator Co. delivers full vertical transportation engineering across Saudi Arabia: from early architectural planning and equipment supply to certified installation, commissioning, and scheduled maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Services Sections */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicePhases.map((phase, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={phase.id}
                id={phase.id}
                className="bg-white border border-[#ded8d8] rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-[#9B1D20]/50 transition-colors"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-[#161017] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={phase.image}
                    alt={phase.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#161017]/85 backdrop-blur-xs text-[#D0FFCE] text-[11px] font-mono tracking-wider px-3 py-1 border border-[#382739]">
                    PHASE {phase.phaseNumber}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#9B1D20] font-bold block mb-2">
                      Phase {phase.phaseNumber}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c151d] tracking-tight mb-2.5">
                      {phase.title}
                    </h2>

                    <p className="text-sm font-medium text-[#9B1D20] mb-4">
                      {phase.subtitle}
                    </p>

                    <p className="text-sm text-[#3d353c] leading-relaxed mb-6 font-normal">
                      {phase.description}
                    </p>

                    {/* Scope Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1c151d] block mb-1">
                        Key Engineering Scope:
                      </span>
                      {phase.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-sm text-[#2e272e]">
                          <CheckCircle2 className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stakeholder Note */}
                    <div className="p-4 bg-[#f3fbf0] rounded-lg border border-[#b8e59e] text-xs text-[#1d4013] mb-6">
                      <span className="font-semibold text-[#1c151d] block mb-1">
                        {phase.stakeholderNote.role}:
                      </span>
                      {phase.stakeholderNote.text}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#ded8d8] flex items-center justify-between">
                    <Link
                      to={`/contact?requirement=${encodeURIComponent(phase.ctaRequirement)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9B1D20] hover:bg-[#7a1618] text-white text-xs font-semibold rounded transition-colors group shadow-sm"
                    >
                      <span>Enquire About {phase.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Service Level & Transparency Commitment */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-[#ded8d8] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start sm:items-center gap-4">
              <ShieldCheck className="w-7 h-7 text-[#9B1D20] shrink-0 mt-1 sm:mt-0" />
              <div>
                <h3 className="text-sm font-semibold text-[#1c151d] mb-1">
                  Transparent Service Level Agreements (SLAs)
                </h3>
                <p className="text-xs sm:text-sm text-[#574f56] leading-relaxed max-w-[70ch]">
                  Every maintenance contract and warranty protocol is formalized in customized agreements clearly stating scheduled visit intervals, response times, and component coverage.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#9B1D20] hover:bg-[#7a1618] text-white text-xs font-semibold rounded shrink-0 transition-colors shadow-sm self-start md:self-auto"
            >
              Consult Technical Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
