import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { productCategories } from '../data/products';
import { faqsData } from '../data/faq';
import { EngineeringDetailStrip } from '../components/EngineeringDetailStrip';
import { EnquiryAssistant, EnquirySelections } from '../components/EnquiryAssistant';
import { ContactQuotationForm } from '../components/ContactQuotationForm';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [enquiryInitial, setEnquiryInitial] = useState<Partial<EnquirySelections>>({});

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleEnquiryAssistantComplete = (selections: EnquirySelections) => {
    setEnquiryInitial(selections);
    const formEl = document.getElementById('quotation-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workflowStages = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Gather building plans, shaft dimensions, traffic expectations, and regulatory requirements.',
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Define elevator category, drive specifications, door configurations, and structural allowances.',
    },
    {
      num: '03',
      title: 'Coordinate',
      desc: 'Align hoistway provisions, pit depth, electrical supply, and construction timelines with the project team.',
    },
    {
      num: '04',
      title: 'Install',
      desc: 'Deliver disciplined on-site mechanical alignment of guide rails, car sling, door headers, and machine mounting.',
    },
    {
      num: '05',
      title: 'Commission',
      desc: 'Conduct load-balance checks, over-speed governor trips, door interlock tests, and safety certification.',
    },
    {
      num: '06',
      title: 'Support',
      desc: 'Provide scheduled preventative maintenance, technical callout response, and genuine replacement components.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* 1. ARCHITECTURAL HERO SECTION - Professional Corporate Focus */}
      <section className="bg-white border-b border-[#ded8d8] pt-12 pb-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Authentic Copy & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-4">
                Global Team Elevator Co. · Established 2007
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1c151d] tracking-tight leading-[1.10] mb-6">
                Moving people. <br />
                <span className="text-[#9B1D20]">Connecting spaces.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3d353c] leading-relaxed mb-8 max-w-xl font-normal">
                Elevator and escalator solutions designed around your building, your requirements, and the people who use them across Saudi Arabia.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] rounded transition-all shadow-sm group"
                >
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1c151d] bg-white hover:bg-[#f1efef] border border-[#dcd7d6] rounded transition-colors shadow-2xs"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 text-[#635D5C]" />
                </Link>
              </div>

              <div className="mt-10 pt-6 border-t border-[#ded8d8] flex flex-wrap items-center gap-6 text-sm text-[#574f56]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9B1D20] shrink-0" />
                  <span className="font-medium text-[#1c151d]">Licensed Saudi Contractor · Dammam HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d4013] shrink-0" />
                  <span className="font-medium text-[#1c151d]">SASO & Saudi Building Code Compliance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-6">
              <div className="rounded-lg border border-[#ded8d8] overflow-hidden shadow-sm aspect-[16/11] bg-[#161017] relative">
                <img
                  src="/images/landing-minimalist.jpg"
                  alt="Architectural elevator landing with satin stainless steel doors, floor indicator, and limestone floor"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#161017]/90 backdrop-blur-md px-5 py-3.5 text-xs text-white flex items-center justify-between border-t border-[#382739]">
                  <span className="font-semibold text-white tracking-wider uppercase text-[11px] font-mono">
                    Vertical Transportation Engineering
                  </span>
                  <span className="text-[#dcd4dc] text-xs font-mono">
                    Operating in Saudi Arabia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW SECTION */}
      <section className="py-16 lg:py-24 bg-[#fbfbfa] border-b border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight leading-snug">
                Engineering vertical transportation since 2007.
              </h2>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B1D20] hover:text-[#7a1618] transition-colors"
                >
                  <span>Discover GTEC Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-base sm:text-lg text-[#2e272e] leading-relaxed font-normal">
                Global Team Elevator Co. brings together elevator and escalator design, manufacturing, sales, installation, and maintenance. Our focus is on delivering solutions that respond to building requirements and supporting customers throughout the project lifecycle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#ded8d8]">
                <div className="border-l-2 border-[#9B1D20] pl-4">
                  <h3 className="text-sm font-bold text-[#1c151d] mb-1.5">
                    Integrated Solutions
                  </h3>
                  <p className="text-sm text-[#574f56] leading-relaxed">
                    Elevator and escalator solutions designed around specific building usage and passenger flow.
                  </p>
                </div>

                <div className="border-l-2 border-[#3D2B3D] pl-4">
                  <h3 className="text-sm font-bold text-[#1c151d] mb-1.5">
                    Installation & Commissioning
                  </h3>
                  <p className="text-sm text-[#574f56] leading-relaxed">
                    Precision mechanical rail alignment, safety certification, and full compliance with Saudi codes.
                  </p>
                </div>

                <div className="border-l-2 border-[#1d4013] pl-4">
                  <h3 className="text-sm font-bold text-[#1c151d] mb-1.5">
                    Ongoing Maintenance
                  </h3>
                  <p className="text-sm text-[#574f56] leading-relaxed">
                    Preventative service schedules, routine diagnostic checks, and dependable after-sales technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES SHOWCASE */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#ded8d8]" id="products-showcase">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
                Elevator Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight">
                Architectural & Engineered Solutions
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#574f56] max-w-md font-medium">
              Five core product categories engineered for residential, commercial, industrial, and high-traffic public environments in Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-[#ded8d8] overflow-hidden flex flex-col hover:border-[#9B1D20]/60 transition-all shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#161017]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#161017]/85 backdrop-blur-xs text-[#D0FFCE] text-[11px] font-mono tracking-wider px-3 py-1 border border-[#382739]">
                    {product.eyebrow}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1c151d] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#574f56] leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="py-2.5 px-3 bg-[#f3fbf0] rounded-lg border border-[#b8e59e] mb-5 text-xs text-[#1d4013]">
                      <span className="font-semibold text-[#1c151d]">Application: </span>
                      {product.application}
                    </div>
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9B1D20] hover:text-[#7a1618] transition-colors pt-3 border-t border-[#ded8d8]"
                  >
                    <span>View Solution Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9B1D20]" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Custom Engineering Consultation Block */}
            <div className="bg-[#201721] text-white rounded-lg p-6 sm:p-8 border border-[#382739] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#CBEFB6] font-bold block mb-2">
                  Tailored Engineering
                </span>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Custom Hoistway or Special Dimensions?
                </h3>
                <p className="text-sm text-[#dcd4dc] leading-relaxed mb-6">
                  Our engineering office works directly from architectural CAD and structural plans to accommodate non-standard shaft configurations, low pit constraints, and unique car interior designs.
                </p>
              </div>

              <div className="pt-4 border-t border-[#382739]">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#9B1D20] hover:bg-[#7a1618] text-white text-xs font-semibold rounded transition-colors shadow-sm"
                >
                  <span>Submit Building Drawings</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D0FFCE]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING DETAIL STRIP */}
      <EngineeringDetailStrip />

      {/* 5. WHY GTEC — CLEAN STRUCTURED LAYOUT */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
              Why GTEC
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight">
              A considered approach to every building.
            </h2>
            <p className="text-base text-[#574f56] mt-3">
              Founded in 2007, Global Team Elevator Co. balances established engineering practices with disciplined on-site execution across the Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#ded8d8]">
            <div className="pt-6 lg:pt-0 lg:pr-6">
              <span className="text-xs font-mono font-bold text-[#9B1D20] block mb-2">01</span>
              <h3 className="text-base font-semibold text-[#1c151d] mb-2">
                Modern Technologies
              </h3>
              <p className="text-sm text-[#574f56] leading-relaxed">
                GTEC describes its approach as incorporating established elevator technologies and technical experience into its solutions.
              </p>
            </div>

            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="text-xs font-mono font-bold text-[#9B1D20] block mb-2">02</span>
              <h3 className="text-base font-semibold text-[#1c151d] mb-2">
                Quality Focus
              </h3>
              <p className="text-sm text-[#574f56] leading-relaxed">
                Product quality and dependable service are central to the company's stated approach, from component selection to final handover.
              </p>
            </div>

            <div className="pt-6 lg:pt-0 lg:px-6">
              <span className="text-xs font-mono font-bold text-[#9B1D20] block mb-2">03</span>
              <h3 className="text-base font-semibold text-[#1c151d] mb-2">
                Energy-Conscious Engineering
              </h3>
              <p className="text-sm text-[#574f56] leading-relaxed">
                GTEC highlights technologies intended to reduce energy consumption and support quieter operation. Specific savings depend on selected equipment.
              </p>
            </div>

            <div className="pt-6 lg:pt-0 lg:pl-6">
              <span className="text-xs font-mono font-bold text-[#9B1D20] block mb-2">04</span>
              <h3 className="text-base font-semibold text-[#1c151d] mb-2">
                Installation & Reliability
              </h3>
              <p className="text-sm text-[#574f56] leading-relaxed">
                The company identifies professional on-site installation and certified commissioning as part of its core service offering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL APPROACH — PROCESS FLOW */}
      <section className="py-16 lg:py-24 bg-[#fbfbfa] border-b border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
              Project Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight">
              Technical Approach
            </h2>
            <p className="text-base text-[#574f56] mt-2">
              Illustrative project workflow from initial architectural assessment through to ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowStages.map((stage) => (
              <div
                key={stage.num}
                className="bg-white p-6 rounded-lg border border-[#ded8d8] flex flex-col justify-between shadow-2xs hover:border-[#9B1D20]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#ded8d8]">
                    <span className="text-xs font-mono font-bold text-[#9B1D20]">
                      PHASE {stage.num}
                    </span>
                    <span className="text-xs text-[#574f56] font-medium uppercase">Workflow</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1c151d] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#574f56] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-[#635D5C] text-center italic">
            * Note: Illustrated as a representative project sequence. Exact milestones align with site conditions and agreed contractual terms.
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE ENQUIRY ASSISTANT & QUOTATION SECTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#ded8d8]" id="quotation-section">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
              Direct Enquiry Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight">
              Let's discuss your next project.
            </h2>
            <p className="text-base text-[#574f56] mt-2 leading-relaxed">
              Share your building requirements with our engineering team to start a conversation about the right vertical transportation solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selector Assistant - Col Span 5 */}
            <div className="lg:col-span-5">
              <EnquiryAssistant
                onComplete={handleEnquiryAssistantComplete}
              />

              <div className="mt-4 p-4 rounded-lg bg-[#f3fbf0] border border-[#b8e59e] text-xs text-[#1d4013]">
                <span className="font-semibold block mb-1">Specification Coordination:</span>
                Selecting your project parameters automatically populates your quotation inquiry form on the right, ensuring your building requirements are delivered accurately.
              </div>
            </div>

            {/* Direct Form - Col Span 7 */}
            <div className="lg:col-span-7">
              <ContactQuotationForm
                initialData={enquiryInitial}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B1D20] font-bold block mb-2">
              Buyer Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1c151d] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#574f56] mt-2 leading-relaxed">
              Clear answers regarding elevator selection, architectural coordination, installation, and preventative maintenance in Saudi Arabia.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#ded8d8] rounded-lg overflow-hidden bg-white shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#fbfbfa]"
                  >
                    <span className="text-base font-semibold text-[#1c151d]">
                      {faq.question}
                    </span>
                    <span className="text-[#9B1D20] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#574f56] leading-relaxed border-t border-[#ded8d8] bg-[#fbfbfa]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
