import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productCategories } from '../data/products';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const product = productCategories.find((p) => p.slug === categorySlug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Other categories for easy navigation
  const otherCategories = productCategories.filter((p) => p.slug !== categorySlug);

  return (
    <div className="flex flex-col w-full bg-[#fbfbfa]">
      {/* Category Hero - Professional Corporate Dark Stage */}
      <section className="bg-[#161017] text-white py-14 sm:py-16 border-b border-[#382739]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#dcd4dc] mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#CBEFB6] font-semibold">{product.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBEFB6] font-bold block mb-2">
              {product.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              {product.title}
            </h1>
            <p className="text-base text-[#dcd4dc] leading-relaxed max-w-[65ch]">
              {product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 sm:py-24 bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Visual & Architectural Integration - Col Span 7 */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden border border-[#ded8d8] shadow-sm bg-[#161017] aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Architectural Integration Notes */}
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#ded8d8] shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <Cpu className="w-5 h-5 text-[#9B1D20]" />
                  <h3 className="text-lg font-semibold text-[#1c151d]">
                    Architectural & Structural Integration
                  </h3>
                </div>
                <p className="text-sm text-[#3d353c] leading-relaxed mb-4 max-w-[65ch]">
                  {product.architecturalIntegration}
                </p>
                <div className="p-3.5 bg-[#f3fbf0] rounded-lg border border-[#b8e59e] text-xs text-[#1d4013]">
                  <span className="font-semibold text-[#1c151d]">Primary Building Types: </span>
                  {product.application}
                </div>
              </div>

              {/* Verified Features List */}
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#ded8d8] shadow-sm">
                <h3 className="text-lg font-semibold text-[#1c151d] mb-4">
                  Key Engineering Features
                </h3>
                <div className="space-y-3">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#2e272e]">
                      <CheckCircle2 className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specification Table & Quotation Card - Col Span 5 */}
            <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
              {/* Technical Overview Table */}
              <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#ded8d8] shadow-sm">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#9B1D20] font-bold block mb-1.5">
                  Technical Parameters
                </span>
                <h3 className="text-lg font-semibold text-[#1c151d] mb-4">
                  Specification Profile
                </h3>

                <div className="divide-y divide-[#ded8d8] text-xs tabular-nums font-mono">
                  {product.technicalOverview.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex flex-col gap-1">
                      <span className="font-semibold text-[#574f56] uppercase text-[10px] tracking-[0.14em] font-sans">
                        {item.label}
                      </span>
                      <span className="font-medium text-[#1c151d]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#ded8d8] text-xs text-[#574f56] flex items-start gap-2 font-sans">
                  <ShieldAlert className="w-4 h-4 text-[#9B1D20] shrink-0 mt-0.5" />
                  <span>
                    Note: Exact hoistway dimensions, car weights, and electrical breaker ratings are calculated per specific project drawings.
                  </span>
                </div>
              </div>

              {/* Conversion Quotation Action Card */}
              <div className="bg-[#201721] text-white p-6 sm:p-7 rounded-lg border border-[#382739] shadow-md">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#CBEFB6] font-bold block mb-1">
                  Ready to specify?
                </span>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Request a Quotation for {product.title}
                </h4>
                <p className="text-sm text-[#dcd4dc] mb-5 leading-relaxed">
                  Provide your floor count and project location to receive a tailored engineering proposal from GTEC.
                </p>

                <Link
                  to={`/contact?elevatorCategory=${encodeURIComponent(product.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] text-white text-xs font-semibold rounded transition-colors group shadow-sm"
                >
                  <span>Request Specific Proposal</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D0FFCE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Back to Products List */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#574f56] hover:text-[#9B1D20] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to All Products</span>
              </Link>
            </div>
          </div>

          {/* Related Categories Row */}
          <div className="mt-20 pt-12 border-t border-[#ded8d8]">
            <h3 className="text-xl font-semibold text-[#1c151d] mb-6">
              Other Elevator Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherCategories.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="group bg-white p-4 rounded-lg border border-[#ded8d8] hover:border-[#9B1D20]/60 transition-all flex flex-col justify-between shadow-2xs hover:shadow-sm"
                >
                  <div className="aspect-[4/3] rounded overflow-hidden mb-3 bg-[#161017]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#9B1D20] font-semibold uppercase tracking-[0.14em] block mb-1">
                      {item.eyebrow}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1c151d] group-hover:text-[#9B1D20] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
