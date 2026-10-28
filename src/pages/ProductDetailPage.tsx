import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { productCategories } from '../data/products';
import { companyData, telHref } from '../data/company';
import { quoteHref } from '../data/enquiry';
import { ContactBand } from '../components/ContactBand';
import { PageIntro } from '../components/PageIntro';
import { usePageTitle } from '../lib/usePageTitle';

export const ProductDetailPage: React.FC = () => {
  const { categorySlug } = useParams();
  const product = productCategories.find((p) => p.slug === categorySlug);
  usePageTitle(product?.title);

  if (!product) return <Navigate to="/products" replace />;

  const others = productCategories.filter((p) => p.id !== product.id);

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Products', href: '/products' }, { label: product.title }]}
        title={product.title}
        image={product.image}
        actions={
          <>
            <Link to={quoteHref(product.slug)} className="btn btn-white">Request a quote</Link>
            <a href={telHref(companyData.phone)} className="btn btn-outline-on-dark">Call {companyData.phone}</a>
          </>
        }
      >
        <p>{product.description}</p>
        <p className="mt-4 text-[0.975rem] text-white/55">Suited to {product.application.toLowerCase()}</p>
      </PageIntro>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-[1.75rem] sm:text-[2.25rem]">Features</h2>
            <ul className="prose-list mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-10 border-l-2 border-brand pl-5 text-ink">{product.integration}</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-[1.75rem] sm:text-[2.25rem]">Specifications</h2>
            <dl className="mt-6 border-t border-line">
              {product.specs.map((s) => (
                <div key={s.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-medium text-ink">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[0.95rem] text-steel-light">
              Final specifications depend on your building and are confirmed in the quotation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap py-16 lg:py-20">
          <h2 className="text-2xl">Other products</h2>
          <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <li key={p.id} className="border-t border-line">
                <Link to={`/products/${p.slug}`} className="group block py-5">
                  <span className="block text-lg text-ink group-hover:text-brand transition-colors">{p.title}</span>
                  <span className="mt-1 block text-[0.95rem]">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand
        title={`Planning ${product.id === 'escalators' ? 'escalators' : `a ${product.title.toLowerCase().replace(/s$/, '')}`}?`}
        text="Share a few details about the building and our engineers will advise on the right specification and prepare a quotation."
      />
    </>
  );
};
