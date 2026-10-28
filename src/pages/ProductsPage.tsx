import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import { PageIntro } from '../components/PageIntro';
import { ContactBand } from '../components/ContactBand';
import { usePageTitle } from '../lib/usePageTitle';
import { quoteHref } from '../data/enquiry';

export const ProductsPage: React.FC = () => {
  usePageTitle('Products');

  return (
    <>
      <PageIntro crumbs={[{ label: 'Products' }]} title="Elevators and escalators">
        Five product families for villas, residential and office buildings, hotels, malls and industrial sites. Every
        system is specified around your building, then installed and maintained by our own teams.
      </PageIntro>

      <section className="section !pt-16">
        <div className="wrap space-y-20 lg:space-y-28">
          {productCategories.map((p, i) => (
            <article key={p.id} id={p.slug} className="grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-center scroll-mt-24">
              <Link
                to={`/products/${p.slug}`}
                className={`block overflow-hidden bg-mist aspect-[4/3] lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={p.image} alt="" className="h-full w-full object-cover" loading={i > 0 ? 'lazy' : undefined} />
              </Link>
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-[2.5rem]">{p.title}</h2>
                <p className="lead mt-4">{p.description}</p>
                <p className="mt-6 text-[0.95rem]">
                  <span className="font-medium text-ink">Suited to: </span>
                  {p.application}
                </p>
                <ul className="prose-list mt-6 space-y-2">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link to={`/products/${p.slug}`} className="btn btn-secondary">
                    Specifications
                  </Link>
                  <Link to={quoteHref(p.slug)} className="text-link">
                    Request a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand
        title="Not sure which elevator you need?"
        text="Send us your drawings or describe the building. Our engineers will recommend the right type and capacity."
      />
    </>
  );
};
