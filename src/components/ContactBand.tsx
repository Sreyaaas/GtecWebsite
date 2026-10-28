import React from 'react';
import { Link } from 'react-router-dom';
import { companyData, telHref, whatsappHref } from '../data/company';

/** Closing call to action used at the foot of inner pages. */
export const ContactBand: React.FC<{ title?: string; text?: string }> = ({
  title = 'Tell us about your building',
  text = 'Send us your drawings or a few details, and one of our engineers will get back to you with advice and a quotation.',
}) => (
  <section className="bg-mist">
    <div className="wrap py-16 lg:py-20 grid gap-8 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <h2 className="text-3xl sm:text-[2.5rem]">{title}</h2>
        <p className="lead mt-4 max-w-xl">{text}</p>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:justify-end">
        <Link to="/contact" className="btn btn-primary">Request a quote</Link>
        <a href={telHref(companyData.phone)} className="btn btn-secondary">Call {companyData.phone}</a>
      </div>
      <p className="lg:col-span-12 text-[0.95rem] text-steel-light">
        Prefer WhatsApp?{' '}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-link">
          Message us on {companyData.mobile}
        </a>
      </p>
    </div>
  </section>
);
