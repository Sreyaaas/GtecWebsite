import React, { useState } from 'react';
import { Shield, Cpu, Gauge, CheckCircle2 } from 'lucide-react';

interface EngineeringDetail {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
  caption: string;
  specs: string[];
}

export const EngineeringDetailStrip: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const details: EngineeringDetail[] = [
    {
      id: 'fixtures',
      title: 'Car Operating Panels & Fixtures',
      eyebrow: 'PASSENGER INTERFACE',
      image: '/images/panel-black-titanium.jpg',
      caption: 'Hairline black titanium stainless steel faceplates, high-contrast digital floor indicators, and micro-movement tactile pushbuttons with compliant Braille indexing.',
      specs: [
        'Hairline AISI 304/316 brushed and black titanium stainless steel surface',
        'Micro-stroke tactile illuminated pushbuttons with high-visibility backlighting',
        'High-resolution multi-segment / TFT floor and direction display',
        'Integrated emergency intercom speaker and hands-free communication system',
      ],
    },
    {
      id: 'doors',
      title: 'Precision Landing & Car Door Systems',
      eyebrow: 'MECHANICAL ENTRY & EXIT',
      image: '/images/elevator-stainless-real.jpg',
      caption: 'Variable-frequency door operators delivering quiet, vibration-free door movement synchronized with full-height multi-beam infrared safety light curtains.',
      specs: [
        'VVVF closed-loop vector door drive motor for quiet, smooth travel',
        'Multi-beam infrared safety curtain with full door height detection',
        'Machined aluminum sill with high-strength anti-deflection threshold',
        'Smooth interlock locking mechanism with zero-bounce closing profile',
      ],
    },
    {
      id: 'propulsion',
      title: 'Tread & Machine Precision Engineering',
      eyebrow: 'CORE LOGISTICS TECHNOLOGY',
      image: '/images/escalator-tread-real.jpg',
      caption: 'High-rigidity die-cast aluminum step treads and combed safety plates engineered for heavy commercial passenger throughput and prolonged component lifespan.',
      specs: [
        'High-precision machined comb plate with integrated tooth sensors',
        'Die-cast aluminum steps with yellow safety demarcation inserts',
        'Dual-circuit electromagnetic safety stop with instant emergency fail-safe',
        'Advanced acoustic dampening pads minimizing structure-borne vibration',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#161017] text-white overflow-hidden relative border-y border-[#382739]">
      {/* Background Architectural Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBEFB6 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
            Precision & Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The details define the experience.
          </h2>
          <p className="text-base text-[#dcd4dc] mt-4 leading-relaxed max-w-[65ch]">
            From the elevator interior to the systems behind every journey, the right solution begins with understanding the building and its requirements.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 border-b border-[#382739] pb-4">
          {details.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 ${
                activeTab === idx
                  ? 'bg-[#9B1D20] text-white font-semibold shadow-md ring-1 ring-[#9B1D20]'
                  : 'bg-[#241a25] text-[#dcd4dc] hover:bg-[#352536] hover:text-white border border-[#382739]'
              }`}
            >
              {idx === 0 && <Gauge className="w-4 h-4 text-[#CBEFB6]" />}
              {idx === 1 && <Shield className="w-4 h-4 text-[#CBEFB6]" />}
              {idx === 2 && <Cpu className="w-4 h-4 text-[#CBEFB6]" />}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#201721] p-6 sm:p-10 rounded-lg border border-[#382739]">
          {/* Visual Showcase - Col Span 7 */}
          <div className="lg:col-span-7 relative group rounded overflow-hidden aspect-[4/3] bg-[#161017] border border-[#382739]">
            <img
              src={details[activeTab].image}
              alt={details[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161017]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-[#f1edf1] bg-[#161017]/85 backdrop-blur-md p-3.5 rounded border border-[#382739]">
              <span className="font-semibold text-[#CBEFB6] uppercase tracking-[0.14em] text-[10px] block mb-1">
                {details[activeTab].eyebrow}
              </span>
              <span className="text-[#dcd4dc] leading-relaxed">
                {details[activeTab].caption}
              </span>
            </div>
          </div>

          {/* Technical Specs List - Col Span 5 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.18em] text-[#CBEFB6] font-bold block mb-2">
              Engineering Specification
            </span>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {details[activeTab].title}
            </h3>
            <p className="text-sm text-[#dcd4dc] leading-relaxed mb-6 max-w-[60ch]">
              {details[activeTab].caption}
            </p>

            <div className="flex flex-col gap-3.5">
              {details[activeTab].specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-sm text-[#f1edf1]">
                  <CheckCircle2 className="w-4 h-4 text-[#CBEFB6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#382739] flex items-center justify-between text-xs text-[#dcd4dc]">
              <span>Verified Saudi building standard compliance</span>
              <span className="text-[#CBEFB6] font-semibold font-mono tracking-wider">GTEC QA · EST. 2007</span>
            </div>
          </div>
        </div>

        {/* 3 Thumbnail Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {details.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded cursor-pointer transition-all border flex items-center gap-3.5 ${
                activeTab === idx
                  ? 'border-[#9B1D20] bg-[#2d1c2a]'
                  : 'border-[#382739] bg-[#201721]/70 hover:bg-[#201721] hover:border-[#635D5C]'
              }`}
            >
              <div className="w-12 h-12 rounded overflow-hidden shrink-0 bg-[#161017]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#CBEFB6] block truncate font-medium">
                  {item.eyebrow}
                </span>
                <span className="text-xs font-semibold text-white truncate block">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
