import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyData, telHref, whatsappHref } from '../data/company';
import { needOptions } from '../data/enquiry';
import { QuoteForm } from '../components/QuoteForm';
import { PageIntro } from '../components/PageIntro';
import { usePageTitle } from '../lib/usePageTitle';

export const ContactPage: React.FC = () => {
  usePageTitle('Request a quote');
  const [params] = useSearchParams();
  const need = params.get('need') ?? '';
  const initialNeed = needOptions.includes(need) ? need : '';

  return (
    <>
      <PageIntro crumbs={[{ label: 'Contact' }]} title="Request a quote or talk to our team" image="/images/cabin-lighting.jpg" imagePosition="50% 40%">
        Fill in the form and our sales team will contact you, or reach us directly by phone, WhatsApp or email.
      </PageIntro>

      <section className="section !pt-14">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl">Your project</h2>
            <p className="mt-2 mb-8">It takes about two minutes. Only your name, number and what you need are required.</p>
            <QuoteForm key={initialNeed} initialNeed={initialNeed} idPrefix="contact" />
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-mist p-7 sm:p-8">
              <h2 className="text-2xl">Contact us directly</h2>
              <dl className="mt-6 space-y-5 text-[1rem]">
                <div>
                  <dt className="font-medium text-ink">Office</dt>
                  <dd><a href={telHref(companyData.phone)} className="text-link">{companyData.phone}</a></dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Mobile and WhatsApp</dt>
                  <dd>
                    <a href={telHref(companyData.mobile)} className="text-link">{companyData.mobile}</a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-[0.95rem] underline underline-offset-4 hover:text-ink"
                    >
                      Open WhatsApp
                    </a>
                  </dd>
                  <dd className="mt-1">
                    <a href={telHref(companyData.altMobile)} className="text-link">{companyData.altMobile}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Email</dt>
                  <dd><a href={`mailto:${companyData.email}`} className="text-link">{companyData.email}</a></dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Hours</dt>
                  <dd>{companyData.hours}</dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="font-medium text-ink">Head office</dt>
                  <dd>
                    {companyData.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
