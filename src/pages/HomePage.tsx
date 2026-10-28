import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import { servicesData } from '../data/services';
import { companyData, telHref, whatsappHref } from '../data/company';
import { quoteHref } from '../data/enquiry';
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

/** The door reveal plays once per visit, not on every return to the home page. */
function useDoorsOnce() {
  const [play] = useState(() => {
    try {
      if (sessionStorage.getItem('gtec-doors')) return false;
      sessionStorage.setItem('gtec-doors', '1');
    } catch {
      /* storage unavailable: still play */
    }
    return true;
  });
  return play;
}

export const HomePage: React.FC = () => {
  usePageTitle();
  const playDoors = useDoorsOnce();

  return (
    <>
      {/* Hero */}
      <section
        className={`on-dark relative h-[100svh] min-h-[640px] max-h-[1000px] overflow-hidden bg-ink ${playDoors ? '' : 'doors-done'}`}
      >
        <img
          src="/images/hero-escalator.jpg"
          alt="People riding a glass-sided escalator in a bright, modern building"
          className="absolute inset-0 h-full w-full object-cover object-[65%_50%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-ink/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />

        {playDoors && (
          <div className="doors" aria-hidden="true">
            <div className="door door-left" />
            <div className="door door-right" />
          </div>
        )}

        <div className="wrap relative flex h-full flex-col justify-end pb-10 lg:pb-14">
          <div className="hero-copy max-w-5xl">
            <p className="kicker">Global Team Elevator Co., Dammam</p>
            <h1 className="mt-6 text-[2.75rem] leading-[0.98] sm:text-[4.25rem] lg:text-[5.25rem]">
              Moving people.
              <br />
              Connecting spaces.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.2rem] leading-relaxed text-white/80">
              Elevators and escalators designed, installed and maintained by one team, for villas, towers, hotels,
              malls and factories across Saudi Arabia.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-white">Request a quote</Link>
              <a href={telHref(companyData.phone)} className="btn btn-outline-on-dark">Call {companyData.phone}</a>
            </div>
          </div>

          <dl className="hero-copy mt-14 hidden sm:grid grid-cols-3 gap-6 border-t border-white/15 pt-6 text-[0.9rem] sm:text-[0.95rem] lg:mt-20">
            <div>
              <dt className="text-white">Since 2007</dt>
              <dd className="text-white/55">Head office in Dammam</dd>
            </div>
            <div>
              <dt className="text-white">SASO and EN 81</dt>
              <dd className="text-white/55">Compliant equipment</dd>
            </div>
            <div>
              <dt className="text-white">Kingdom-wide</dt>
              <dd className="text-white/55">Supply, installation, service</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Statement */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <p className="display text-ink text-[1.75rem] leading-[1.25] sm:text-[2.25rem] lg:col-span-8 lg:text-[2.6rem]">
            From a single villa lift to every elevator in a tower, GTEC takes responsibility for the whole job: design,
            supply, installation and the maintenance that follows.
          </p>
          <div className="lg:col-span-4 lg:pb-2">
            <p>
              One contract, one point of contact and one team that knows your building, from the first drawing to the
              annual service visit.
            </p>
            <Link to="/about" className="text-link mt-5 inline-block">About GTEC</Link>
          </div>
        </div>
      </section>

      <ProductDirectory />

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-7">From drawings to decades of service</h2>
            <div className="lg:col-span-5">
              <p>
                You deal with the same company at every stage, so nothing is lost between the designer, the supplier and
                the maintenance team.
              </p>
              <Link to="/services" className="text-link mt-4 inline-block">How we work</Link>
            </div>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((s, i) => (
              <li key={s.id} className="border-t border-line pt-6">
                <span className="display block text-[2.75rem] leading-none text-brand/40 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-[1.3rem]">{s.title}</h3>
                <p className="mt-2">{s.shortDescription}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Maintenance */}
      <section className="on-dark relative overflow-hidden bg-ink">
        <img
          src="/images/elevator-stainless-real.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[30%_50%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/85 to-ink/20" />
        <div className="wrap relative grid py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-[2.25rem] sm:text-[3rem]">Already have elevators? We can look after them.</h2>
            <p className="mt-6 text-[1.15rem] leading-relaxed text-white/75">
              A GTEC maintenance contract covers scheduled safety checks, inspection and lubrication, controller
              diagnostics and breakdown call-outs, so your elevators stay safe and your tenants are not left waiting.
            </p>
            <ul className="mt-8 grid gap-4 text-white/85 sm:grid-cols-3 sm:gap-6">
              {['Preventive maintenance on a fixed schedule', 'Genuine spare parts in the Eastern Province', 'Modernisation of older elevators'].map(
                (t) => (
                  <li key={t} className="border-t border-white/20 pt-3 text-[0.95rem] leading-snug">{t}</li>
                ),
              )}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact?need=Maintenance%20contract" className="btn btn-white">Ask about maintenance</Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline-on-dark">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-mist">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-20 lg:py-28 lg:items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/atrium-escalators.jpg"
                alt="Crossing escalators beneath a glass roof in a busy shopping atrium"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[2.25rem] sm:text-[3rem]">Why owners and consultants choose GTEC</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {reasons.map((r) => (
                <div key={r.title} className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <h3 className="text-[1.2rem]">{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="on-dark scroll-mt-20 bg-ink text-steel-dark">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-4">
            <h2 className="text-[2.25rem] sm:text-[3rem]">Request a quotation</h2>
            <p className="mt-5 text-[1.1rem]">Tell us a little about the project. There is no cost and no obligation.</p>
            <h3 className="mt-12 text-lg">What happens next</h3>
            <ol className="mt-5 space-y-5">
              {[
                'Our sales team contacts you to understand the project.',
                'An engineer reviews your drawings or arranges a site visit.',
                'You receive a detailed written quotation.',
              ].map((t, i) => (
                <li key={t} className="grid grid-cols-[2.25rem_1fr] items-baseline">
                  <span className="display text-xl text-white">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-t border-white/15 pt-6 text-[0.975rem]">
              <p className="font-medium text-white">Prefer to talk?</p>
              <p className="mt-2">
                <a href={telHref(companyData.phone)} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {companyData.phone}
                </a>
              </p>
              <p className="mt-1">
                WhatsApp{' '}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {companyData.mobile}
                </a>
              </p>
              <p className="mt-3 text-white/50">{companyData.hours}</p>
            </div>
          </div>
          <div className="bg-white p-6 text-steel shadow-[0_30px_80px_-30px_rgb(0_0_0_/_0.6)] sm:p-10 lg:col-span-8">
            <QuoteForm idPrefix="home" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[2.25rem] sm:text-[3rem]">Common questions</h2>
            <p className="mt-5">
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

/** Product directory, styled like a lobby directory board: choose a product to see it. */
const ProductDirectory: React.FC = () => {
  const [active, setActive] = useState(0);
  const p = productCategories[active];

  return (
    <section className="on-dark bg-ink text-steel-dark">
      <div className="wrap py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-7">What we install</h2>
          <p className="lg:col-span-5">
            Five product families, each specified for the building it serves.{' '}
            <Link to="/products" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              See all products
            </Link>
          </p>
        </div>

        {/* Desktop: directory board */}
        <div className="mt-14 hidden gap-16 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-5 border-t border-white/12" role="tablist" aria-label="Products">
            {productCategories.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.id} className="border-b border-white/12">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="product-panel"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`display text-[1.75rem] leading-tight transition-colors duration-300 ${
                        on ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {item.title}
                    </span>
                    <svg
                      viewBox="0 0 14 9"
                      className={`h-3 w-5 shrink-0 transition-opacity duration-300 ${on ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden="true"
                    >
                      <polygon points="0,9 7,2 14,9 11.5,9 7,4.5 2.5,9" fill="#38A548" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>

          <div id="product-panel" role="tabpanel" className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-ink-2">
              {productCategories.map((item, i) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={i === active ? item.imageAlt : ''}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div key={p.id} className="fade-swap">
              <div className="mt-7 grid grid-cols-[1fr_auto] items-start gap-8">
                <div>
                  <p className="text-[1.15rem] text-white">{p.summary}</p>
                  <p className="mt-2 text-[0.95rem] text-white/55">Suited to {p.application.toLowerCase()}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <Link to={`/products/${p.slug}`} className="btn btn-white !min-h-[46px]">View details</Link>
                  <Link to={quoteHref(p.slug)} className="text-[0.95rem] text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet: stacked */}
        <ul className="mt-12 grid gap-12 sm:grid-cols-2 lg:hidden">
          {productCategories.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-ink-2">
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="display mt-5 text-[1.5rem]">{item.title}</h3>
                <p className="mt-2">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
