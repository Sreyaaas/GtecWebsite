import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyData, companyText, telHref, whatsappHref } from '../data/company';
import { needOptions } from '../data/enquiry';
import { QuoteForm } from '../components/QuoteForm';
import { PageIntro } from '../components/PageIntro';
import { usePageTitle } from '../lib/usePageTitle';
import { Ltr, useCopy, useLocale } from '../i18n';

const copy = {
  en: {
    crumb: 'Contact',
    pageTitle: 'Request a quote',
    title: 'Request a quote or talk to our team',
    intro: 'Fill in the form and our sales team will contact you, or reach us directly by phone, WhatsApp or email.',
    project: 'Your project',
    projectText: 'It takes about two minutes. Only your name, number and what you need are required.',
    direct: 'Contact us directly',
    office: 'Office',
    mobile: 'Mobile and WhatsApp',
    openWhatsapp: 'Open WhatsApp',
    email: 'Email',
    hours: 'Hours',
    head: 'Head office',
  },
  ar: {
    crumb: 'تواصل معنا',
    pageTitle: 'اطلب عرض سعر',
    title: 'اطلب عرض سعر أو تحدّث مع فريقنا',
    intro: 'املأ النموذج وسيتواصل معك فريق المبيعات، أو تواصل معنا مباشرة عبر الهاتف أو واتساب أو البريد الإلكتروني.',
    project: 'تفاصيل مشروعك',
    projectText: 'يستغرق ملء النموذج دقيقتين تقريبًا، والحقول المطلوبة هي الاسم ورقم الجوال وما تحتاجه فقط.',
    direct: 'تواصل معنا مباشرة',
    office: 'المكتب',
    mobile: 'الجوال وواتساب',
    openWhatsapp: 'فتح واتساب',
    email: 'البريد الإلكتروني',
    hours: 'ساعات العمل',
    head: 'المقر الرئيسي',
  },
};

export const ContactPage: React.FC = () => {
  const c = useCopy(copy);
  const text = companyText[useLocale()];
  usePageTitle(c.pageTitle);
  const [params] = useSearchParams();
  const need = params.get('need') ?? '';
  const initialNeed = needOptions.some((o) => o.id === need) ? need : '';

  return (
    <>
      <PageIntro crumbs={[{ label: c.crumb }]} title={c.title} image="/images/cabin-lighting.jpg" imagePosition="50% 40%">
        {c.intro}
      </PageIntro>

      <section className="section !pt-14">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl">{c.project}</h2>
            <p className="mt-2 mb-8">{c.projectText}</p>
            <QuoteForm key={initialNeed} initialNeed={initialNeed} idPrefix="contact" />
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-mist p-7 sm:p-8">
              <h2 className="text-2xl">{c.direct}</h2>
              <dl className="mt-6 space-y-5 text-[1rem]">
                <div>
                  <dt className="font-medium text-ink">{c.office}</dt>
                  <dd>
                    <a href={telHref(companyData.phone)} className="text-link"><Ltr>{companyData.phone}</Ltr></a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{c.mobile}</dt>
                  <dd>
                    <a href={telHref(companyData.mobile)} className="text-link"><Ltr>{companyData.mobile}</Ltr></a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-3 text-[0.95rem] underline underline-offset-4 hover:text-ink"
                    >
                      {c.openWhatsapp}
                    </a>
                  </dd>
                  <dd className="mt-1">
                    <a href={telHref(companyData.altMobile)} className="text-link"><Ltr>{companyData.altMobile}</Ltr></a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{c.email}</dt>
                  <dd>
                    <a href={`mailto:${companyData.email}`} className="text-link"><Ltr>{companyData.email}</Ltr></a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{c.hours}</dt>
                  <dd>{text.hours}</dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="font-medium text-ink">{c.head}</dt>
                  <dd>
                    {text.addressLines.map((l) => <span key={l} className="block"><bdi>{l}</bdi></span>)}
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
