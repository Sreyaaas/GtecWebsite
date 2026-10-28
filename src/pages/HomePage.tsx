import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import { servicesData } from '../data/services';
import { companyData, telHref, whatsappHref } from '../data/company';
import { QuoteForm } from '../components/QuoteForm';
import { Faq } from '../components/Faq';
import { usePageTitle } from '../lib/usePageTitle';

const reasons = [
  {
    title: 'Advice before you build',
    text: 'We review your drawings at the planning stage, so the shaft, pit, headroom and power supply are right the first time.',
  },
  {
    title: 'Our own installation teams',
    text: 'Trained GTEC technicians install, test and commission every elevator, and coordinate the inspection needed for handover.',
  },
  {
    title: 'Support long after handover',
    text: 'Maintenance contracts, genuine spare parts and modernisation from our Dammam office, for the life of the equipment.',
  },
];

export const HomePage: React.FC = () => {
  usePageTitle();
  const featured = productCategories.slice(0, 2);
  const others = productCategories.slice(2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="wrap grid lg:grid-cols-12 lg:min-h-[640px]">
          <div className="flex flex-col justify-center py-14 lg:col-span-7 lg:py-24 lg:pr-16">
            <p className="text-[0.95rem] text-steel">Global Team Elevator Co., Dammam</p>
            <h1 className="mt-5 max-w-[15ch] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.5rem]">
              Elevators designed, installed and maintained by one team.
            </h1>
            <p className="lead mt-6 max-w-xl">
              Passenger, villa, panoramic and freight elevators and escalators for buildings across Saudi Arabia,
              with maintenance that continues long after handover.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">Request a quote</Link>
              <a href={telHref(companyData.phone)} className="btn btn-secondary">Call {companyData.phone}</a>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-y-4 border-t border-line pt-6 text-[0.95rem] sm:grid-cols-3 sm:gap-x-6">
              <div>
                <dt className="font-medium text-ink">Since 2007</dt>
                <dd className="text-steel-light">Based in Dammam</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">SASO and EN 81</dt>
                <dd className="text-steel-light">Compliant equipment</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Kingdom-wide</dt>
                <dd className="text-steel-light">Supply and installation</dd>
              </div>
            </dl>
          </div>
          <div className="relative -mx-5 aspect-[4/3] md:-mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[56%] lg:mx-0 lg:aspect-auto">
            <img
              src="/images/elevator-interior-real.jpg"
              alt="Brushed stainless steel elevator cabin with its doors open"
              className="h-full w-full object-cover object-[50%_60%]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[2rem] sm:text-[2.75rem]">What we install</h2>
              <p className="lead mt-4">
                From a single home lift to every elevator in a tower, each system is specified for the building it serves.
              </p>
            </div>
            <Link to="/products" className="text-link shrink-0">See all products</Link>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {featured.map((p) => (
              <ProductTile key={p.id} product={p} large />
            ))}
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {others.map((p) => (
              <ProductTile key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-mist">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-[2rem] sm:text-[2.75rem]">One contractor, from drawings to decades of service</h2>
              <p className="lead mt-5">
                You deal with the same company at every stage, so nothing is lost between the designer, the supplier
                and the maintenance team.
              </p>
              <Link to="/services" className="text-link mt-7 inline-block">How we work</Link>
            </div>
          </div>
          <ol className="lg:col-span-7 border-t border-line">
            {servicesData.map((s, i) => (
              <li key={s.id} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-7">
                <span className="text-lg text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2">{s.shortDescription}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Maintenance */}
      <section className="bg-ink text-white/80">
        <div className="wrap grid lg:grid-cols-2">
          <div className="py-16 lg:py-24 lg:pr-16">
            <h2 className="text-[2rem] text-white sm:text-[2.75rem]">Already have elevators? We can look after them.</h2>
            <p className="lead mt-5 !text-white/75">
              A GTEC maintenance contract covers scheduled safety checks, inspection and lubrication, controller
              diagnostics and breakdown call-outs, so your elevators stay safe and your tenants are not left waiting.
            </p>
            <ul className="mt-8 space-y-3 text-[1rem]">
              <li className="border-l border-white/25 pl-4">Preventive maintenance on a fixed schedule</li>
              <li className="border-l border-white/25 pl-4">Genuine spare parts held in the Eastern Province</li>
              <li className="border-l border-white/25 pl-4">Modernisation of older controllers, doors and cabins</li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact?need=Maintenance%20contract" className="btn btn-on-dark">Ask about maintenance</Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline-on-dark">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="relative -mx-5 aspect-[4/3] md:-mx-8 lg:mx-0 lg:aspect-auto lg:-mr-[max(0px,calc((100vw-1200px)/2+32px))]">
            <img
              src="/images/elevator-stainless-real.jpg"
              alt="Elevator floor indicator on a stainless steel landing wall"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section">
        <div className="wrap">
          <h2 className="max-w-2xl text-[2rem] sm:text-[2.75rem]">Why owners and consultants work with GTEC</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-ink pt-6">
                <h3 className="text-xl">{r.title}</h3>
                <p className="mt-3">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="section bg-mist scroll-mt-20">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[2rem] sm:text-[2.75rem]">Request a quotation</h2>
            <p className="lead mt-5">Tell us a little about the project. There is no cost and no obligation.</p>
            <h3 className="mt-10 text-lg">What happens next</h3>
            <ol className="mt-4 space-y-4">
              {[
                'Our sales team contacts you to understand the project.',
                'An engineer reviews your drawings or arranges a site visit.',
                'You receive a detailed written quotation.',
              ].map((t, i) => (
                <li key={t} className="grid grid-cols-[1.75rem_1fr]">
                  <span className="text-brand tabular-nums">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 border-t border-line pt-6 text-[0.95rem]">
              <p className="text-ink font-medium">Prefer to talk?</p>
              <p className="mt-1">
                Call <a href={telHref(companyData.phone)} className="text-link">{companyData.phone}</a>
                <br />
                or WhatsApp{' '}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-link">
                  {companyData.mobile}
                </a>
              </p>
              <p className="mt-2 text-steel-light">{companyData.hours}</p>
            </div>
          </div>
          <div className="lg:col-span-8 border border-line bg-white p-6 sm:p-10">
            <QuoteForm idPrefix="home" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[2rem] sm:text-[2.75rem]">Common questions</h2>
            <p className="mt-4">
              Can’t find your answer? Email{' '}
              <a href={`mailto:${companyData.email}`} className="text-link">{companyData.email}</a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
};

const ProductTile: React.FC<{ product: (typeof productCategories)[number]; large?: boolean }> = ({ product, large }) => (
  <Link to={`/products/${product.slug}`} className="group block">
    <div className={`overflow-hidden bg-mist ${large ? 'aspect-[4/3]' : 'aspect-[4/3] md:aspect-[4/5]'}`}>
      <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover" loading="lazy" />
    </div>
    <h3 className={`mt-5 ${large ? 'text-2xl' : 'text-xl'} group-hover:text-brand transition-colors`}>
      {product.title}
    </h3>
    <p className="mt-2 max-w-md">{product.summary}</p>
  </Link>
);
