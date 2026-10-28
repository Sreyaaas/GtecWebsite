import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import { ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* Page Header - Professional Corporate Dark Section */}
      <section className="bg-[#161017] text-white py-16 sm:py-20 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[68ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-3">
              Vertical Transportation Systems
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Elevator & Escalator Products
            </h1>
            <p className="text-base text-[#dcd4dc] leading-relaxed max-w-[65ch]">
              Explore GTEC's five official product categories engineered for residential villas, commercial towers, high-traffic retail centers, and industrial facilities across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Detailed List */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((product, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={product.id}
                  id={product.slug}
                  className="bg-white rounded-lg border border-[#ded8d8] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-[#9B1D20]/50 transition-colors"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/11] lg:aspect-auto bg-[#161017] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#161017]/85 backdrop-blur-xs text-[#D0FFCE] text-[11px] font-mono tracking-wider px-3 py-1 border border-[#382739]">
                      {product.eyebrow}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#9B1D20] uppercase tracking-[0.16em] block mb-1.5 tabular-nums">
                        Category 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c151d] mb-3">
                        {product.title}
                      </h2>
                      <p className="text-sm text-[#3d353c] leading-relaxed mb-6 font-normal">
                        {product.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2.5 mb-6">
                        <span className="text-xs font-bold text-[#1c151d] uppercase tracking-[0.14em] block mb-2">
                          Core Capabilities:
                        </span>
                        {product.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[#2e272e]">
                            <CheckCircle className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Application Callout */}
                      <div className="p-3.5 bg-[#f3fbf0] rounded-lg border border-[#b8e59e] text-xs text-[#1d4013] mb-6">
                        <span className="font-semibold text-[#1c151d]">Suitable For: </span>
                        {product.application}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#ded8d8] flex flex-wrap items-center justify-between gap-3">
                      <Link
                        to={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#9B1D20] hover:bg-[#7a1618] rounded transition-colors group shadow-sm"
                      >
                        <span>View Technical Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <Link
                        to={`/contact?elevatorCategory=${encodeURIComponent(product.title)}`}
                        className="text-xs font-semibold text-[#9B1D20] hover:text-[#7a1618] transition-colors"
                      >
                        Request Category Quotation →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Compliance Callout */}
      <section className="bg-white py-14 border-t border-[#ded8d8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[68ch]">
          <ShieldCheck className="w-8 h-8 text-[#9B1D20] mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-[#1c151d] mb-2">
            Engineering & Safety Compliance
          </h3>
          <p className="text-sm text-[#574f56] leading-relaxed">
            All GTEC elevator systems conform with Saudi Building Code requirements, SASO standards, and European EN 81-20/50 safety benchmarks. Actual dimensions and load calculations are tailored to each architectural shaft.
          </p>
        </div>
      </section>
    </div>
  );
};
