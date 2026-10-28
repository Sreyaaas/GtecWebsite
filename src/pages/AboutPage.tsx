import React from 'react';
import { companyData, companyText, telHref } from '../data/company';
import { PageIntro } from '../components/PageIntro';
import { ContactBand } from '../components/ContactBand';
import { usePageTitle } from '../lib/usePageTitle';
import { Ltr, useCopy, useLocale } from '../i18n';

const year = companyData.established;

const copy = {
  en: {
    crumb: 'About',
    title: 'About Global Team Elevator Co.',
    intro: `An elevator and escalator contractor founded in Dammam in ${year}, serving developers, contractors and building owners across Saudi Arabia.`,
    storyTitle: 'Built around the building, not the catalogue',
    story: [
      `Global Team Elevator Co. was established in ${year} to meet the growing needs of Saudi Arabia’s residential, commercial and industrial construction. We bring elevator and escalator design, supply, installation and maintenance together under one roof.`,
      'We do not treat elevators as off-the-shelf equipment. Each project starts with the building: how it will be used, how many people it serves and how much space there is for the shaft. From early shaft sizing and traffic analysis to installation and long-term maintenance, the same team stays involved at every stage.',
      'Our head office in Dammam coordinates supply, project delivery and maintenance across the Kingdom.',
    ],
    imageAlt: 'Elevator doors on a building landing with a floor number sign',
    principlesTitle: 'What we hold ourselves to',
    principles: [
      {
        title: 'Safety first',
        text: 'Every installation follows the Saudi Building Code, SASO regulations and the EN 81 elevator safety standards, from shaft alignment to the last electrical circuit.',
      },
      {
        title: 'Equipment we can stand behind',
        text: 'We work with established manufacturers and inspect equipment before it is installed, because quality on day one is what keeps an elevator reliable in year ten.',
      },
      {
        title: 'A relationship after handover',
        text: 'Our work with owners and facility managers continues through preventive maintenance, spare parts and local technical support.',
      },
    ],
    officeTitle: 'Head office',
    rows: { address: 'Address', phone: 'Telephone', mobile: 'Mobile', email: 'Email', hours: 'Hours' },
  },
  ar: {
    crumb: 'من نحن',
    title: 'عن GTEC',
    intro: `شركة متخصصة في توريد وتركيب وصيانة المصاعد والسلالم الكهربائية، تأسست في الدمام عام ${year}، وتخدم المطورين والمقاولين وملاك المباني في مختلف مناطق المملكة العربية السعودية.`,
    storyTitle: 'نبدأ من المبنى، لا من الكتالوج',
    story: [
      `تأسست GTEC عام ${year} لتلبية الاحتياجات المتنامية لقطاعات البناء السكني والتجاري والصناعي في المملكة العربية السعودية. ونجمع تحت سقف واحد تصميم المصاعد والسلالم الكهربائية وتوريدها وتركيبها وصيانتها.`,
      'لا نتعامل مع المصاعد على أنها معدات جاهزة. يبدأ كل مشروع من المبنى نفسه: كيف سيُستخدم، وكم عدد مستخدميه، وما المساحة المتاحة للبئر. ومن تحديد مقاسات البئر وتحليل الحركة في المراحل الأولى إلى التركيب والصيانة طويلة الأمد، يبقى الفريق نفسه معك في كل مرحلة.',
      'ويتولى مقرنا الرئيسي في الدمام تنسيق التوريد وتنفيذ المشاريع والصيانة في مختلف أنحاء المملكة.',
    ],
    imageAlt: 'أبواب مصعد في ردهة مبنى مع لافتة رقم الطابق',
    principlesTitle: 'المبادئ التي نلتزم بها',
    principles: [
      {
        title: 'السلامة أولًا',
        text: 'نلتزم في كل تركيب بكود البناء السعودي واشتراطات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) ومعايير سلامة المصاعد EN 81، من ضبط البئر حتى آخر دائرة كهربائية.',
      },
      {
        title: 'معدات نثق بها',
        text: 'نتعامل مع شركات تصنيع راسخة ونفحص المعدات قبل تركيبها، لأن الجودة في اليوم الأول هي ما يحافظ على موثوقية المصعد بعد عشر سنوات.',
      },
      {
        title: 'علاقة مستمرة بعد التسليم',
        text: 'يستمر عملنا مع الملاك ومديري المرافق من خلال الصيانة الوقائية وقطع الغيار والدعم الفني المحلي.',
      },
    ],
    officeTitle: 'المقر الرئيسي',
    rows: { address: 'العنوان', phone: 'الهاتف', mobile: 'الجوال', email: 'البريد الإلكتروني', hours: 'ساعات العمل' },
  },
};

export const AboutPage: React.FC = () => {
  const c = useCopy(copy);
  const text = companyText[useLocale()];
  usePageTitle(c.crumb);

  return (
    <>
      <PageIntro crumbs={[{ label: c.crumb }]} title={c.title} image="/images/elevator-buttons-real.jpg" imagePosition="45% 50%">
        {c.intro}
      </PageIntro>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-6 space-y-5 text-[1.0625rem] leading-[1.75] rtl:leading-[1.9]">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-8">{c.storyTitle}</h2>
            {c.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-mist">
            <img src="/images/reference-hero.jpg" alt={c.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="max-w-2xl text-[2rem] sm:text-[2.5rem]">{c.principlesTitle}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {c.principles.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-6">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[2rem] sm:text-[2.5rem]">{c.officeTitle}</h2>
            <p className="lead mt-4">{text.region}</p>
          </div>
          <dl className="lg:col-span-7 border-t border-line">
            <Row label={c.rows.address}>
              {text.addressLines.map((l) => <span key={l} className="block"><bdi>{l}</bdi></span>)}
            </Row>
            <Row label={c.rows.phone}>
              <a href={telHref(companyData.phone)} className="text-link"><Ltr>{companyData.phone}</Ltr></a>
            </Row>
            <Row label={c.rows.mobile}>
              <a href={telHref(companyData.mobile)} className="text-link"><Ltr>{companyData.mobile}</Ltr></a>
              <span className="block mt-1">
                <a href={telHref(companyData.altMobile)} className="text-link"><Ltr>{companyData.altMobile}</Ltr></a>
              </span>
            </Row>
            <Row label={c.rows.email}>
              <a href={`mailto:${companyData.email}`} className="text-link"><Ltr>{companyData.email}</Ltr></a>
            </Row>
            <Row label={c.rows.hours}>{text.hours}</Row>
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
};

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <dt className="font-medium text-ink">{label}</dt>
    <dd>{children}</dd>
  </div>
);
