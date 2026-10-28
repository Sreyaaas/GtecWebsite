import React from 'react';
import { companyData, telHref, whatsappHref } from '../data/company';
import { Link, Ltr, useCopy } from '../i18n';

const copy = {
  en: {
    title: 'Tell us about your building',
    text: 'Send us your drawings or a few details, and one of our engineers will get back to you with advice and a quotation.',
    quote: 'Request a quote',
    call: 'Call',
    prefer: 'Prefer WhatsApp?',
    message: 'Message us on',
  },
  ar: {
    title: 'حدّثنا عن مبناك',
    text: 'أرسل لنا مخططاتك أو بعض التفاصيل، وسيتواصل معك أحد مهندسينا بالمشورة وعرض السعر.',
    quote: 'اطلب عرض سعر',
    call: 'اتصل على',
    prefer: 'هل تفضّل التواصل عبر واتساب؟',
    message: 'راسلنا على',
  },
};

/** Closing call to action used at the foot of inner pages. */
export const ContactBand: React.FC<{ title?: string; text?: string }> = ({ title, text }) => {
  const c = useCopy(copy);
  return (
    <section className="bg-mist">
      <div className="wrap py-16 lg:py-20 grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-[2.5rem]">{title ?? c.title}</h2>
          <p className="lead mt-4 max-w-xl">{text ?? c.text}</p>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link to="/contact" className="btn btn-primary">{c.quote}</Link>
          <a href={telHref(companyData.phone)} className="btn btn-secondary">
            {c.call} <Ltr>{companyData.phone}</Ltr>
          </a>
        </div>
        <p className="lg:col-span-12 text-[0.95rem] text-steel-light">
          {c.prefer}{' '}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-link">
            {c.message} <Ltr>{companyData.mobile}</Ltr>
          </a>
        </p>
      </div>
    </section>
  );
};
