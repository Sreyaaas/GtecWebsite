import React, { useState } from 'react';
import { useProducts } from '../data/products';
import { useServices } from '../data/services';
import { companyData, companyText, telHref, whatsappHref } from '../data/company';
import { quoteHref } from '../data/enquiry';
import { QuoteForm } from '../components/QuoteForm';
import { Faq } from '../components/Faq';
import { usePageTitle } from '../lib/usePageTitle';
import { Link, Ltr, useCopy, useLocale } from '../i18n';

const copy = {
  en: {
    heroAlt: 'People riding a glass-sided escalator in a bright, modern building',
    kicker: 'Global Team Elevator Co., Dammam',
    h1a: 'Moving people.',
    h1b: 'Connecting spaces.',
    heroText:
      'Elevators and escalators designed, installed and maintained by one team, for villas, towers, hotels, malls and factories across Saudi Arabia.',
    quote: 'Request a quote',
    call: 'Call',
    facts: [
      ['Since 2007', 'Head office in Dammam'],
      ['SASO and EN 81', 'Compliant equipment'],
      ['Kingdom-wide', 'Supply, installation, service'],
    ],
    statement:
      'From a single villa lift to every elevator in a tower, GTEC takes responsibility for the whole job: design, supply, installation and the maintenance that follows.',
    statementSide:
      'One contract, one point of contact and one team that knows your building, from the first drawing to the annual service visit.',
    about: 'About GTEC',
    processTitle: 'From drawings to decades of service',
    processText:
      'You deal with the same company at every stage, so nothing is lost between the designer, the supplier and the maintenance team.',
    howWeWork: 'How we work',
    maintTitle: 'Already have elevators? We can look after them.',
    maintText:
      'A GTEC maintenance contract covers scheduled safety checks, inspection and lubrication, controller diagnostics and breakdown call-outs, so your elevators stay safe and your tenants are not left waiting.',
    maintPoints: ['Preventive maintenance on a fixed schedule', 'Genuine spare parts in the Eastern Province', 'Modernisation of older elevators'],
    maintCta: 'Ask about maintenance',
    whatsapp: 'WhatsApp us',
    whyAlt: 'Crossing escalators beneath a glass roof in a busy shopping atrium',
    whyTitle: 'Why owners and consultants choose GTEC',
    reasons: [
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
    ],
    quoteTitle: 'Request a quotation',
    quoteText: 'Tell us a little about the project. There is no cost and no obligation.',
    nextTitle: 'What happens next',
    next: [
      'Our sales team contacts you to understand the project.',
      'An engineer reviews your drawings or arranges a site visit.',
      'You receive a detailed written quotation.',
    ],
    preferTalk: 'Prefer to talk?',
    whatsappLabel: 'WhatsApp',
    faqTitle: 'Common questions',
    faqText: 'Can’t find your answer? Email',
    installTitle: 'What we install',
    installText: 'Five product families, each specified for the building it serves.',
    allProducts: 'See all products',
    productsLabel: 'Products',
    suited: (a: string) => `Suited to ${a.toLowerCase()}`,
    details: 'View details',
  },
  ar: {
    heroAlt: 'أشخاص يصعدون سلمًا كهربائيًا بحواجز زجاجية في مبنى حديث ومضيء',
    kicker: 'الدمام، منذ عام 2007',
    h1a: 'ننقل الناس.',
    h1b: 'ونربط بين المساحات.',
    heroText:
      'مصاعد وسلالم كهربائية يصمّمها ويركّبها ويتولى صيانتها فريق واحد، للفلل والأبراج والفنادق والمراكز التجارية والمصانع في مختلف مناطق المملكة.',
    quote: 'اطلب عرض سعر',
    call: 'اتصل على',
    facts: [
      ['منذ عام 2007', 'المقر الرئيسي في الدمام'],
      ['متوافقة مع SASO و EN 81', 'معدات مطابقة للمعايير'],
      ['في جميع أنحاء المملكة', 'توريد وتركيب وصيانة'],
    ],
    statement:
      'من مصعد واحد في فيلا إلى جميع مصاعد البرج، تتولى GTEC المسؤولية الكاملة عن المشروع: التصميم والتوريد والتركيب، ثم الصيانة.',
    statementSide:
      'عقد واحد، وجهة تواصل واحدة، وفريق واحد يعرف مبناك جيدًا، من أول مخطط حتى زيارة الصيانة السنوية.',
    about: 'تعرّف على GTEC',
    processTitle: 'من المخطط الأول إلى سنوات طويلة من الخدمة',
    processText: 'تتعامل مع شركة واحدة في جميع المراحل، فلا يضيع شيء بين المصمم والمورّد وفريق الصيانة.',
    howWeWork: 'كيف نعمل',
    maintTitle: 'لديك مصاعد قائمة؟ نتولى صيانتها.',
    maintText:
      'يشمل عقد الصيانة من GTEC فحوصات سلامة مجدولة، والفحص والتزييت، وتشخيص لوحة التحكم، والاستجابة للأعطال، لتبقى مصاعدك آمنة ولا يضطر المستخدمون إلى الانتظار.',
    maintPoints: ['صيانة وقائية وفق جدول ثابت', 'قطع غيار أصلية متوفرة في المنطقة الشرقية', 'تحديث المصاعد القديمة'],
    maintCta: 'استفسر عن الصيانة',
    whatsapp: 'راسلنا على واتساب',
    whyAlt: 'سلالم كهربائية متقاطعة تحت سقف زجاجي في فناء مركز تجاري',
    whyTitle: 'لماذا يختار الملاك والاستشاريون GTEC',
    reasons: [
      {
        title: 'مشورة قبل البناء',
        text: 'نراجع مخططاتك في مرحلة التخطيط، ليكون البئر والحفرة والارتفاع العلوي ومصدر الكهرباء صحيحة من البداية.',
      },
      {
        title: 'فرق تركيب تابعة لنا',
        text: 'يتولى فنيو GTEC المدرَّبون تركيب كل مصعد واختباره وتشغيله، وينسّقون الفحص المطلوب للتسليم.',
      },
      {
        title: 'دعم مستمر بعد التسليم',
        text: 'عقود صيانة وقطع غيار أصلية وخدمات تحديث من مكتبنا في الدمام، طوال عمر المعدات.',
      },
    ],
    quoteTitle: 'اطلب عرض سعر',
    quoteText: 'أخبرنا قليلًا عن مشروعك. عرض السعر مجاني ودون أي التزام.',
    nextTitle: 'ماذا يحدث بعد ذلك',
    next: [
      'يتواصل معك فريق المبيعات للتعرف على المشروع.',
      'يراجع أحد مهندسينا مخططاتك أو يرتّب زيارة للموقع.',
      'تستلم عرض سعر مكتوبًا ومفصّلًا.',
    ],
    preferTalk: 'هل تفضّل التحدث معنا مباشرة؟',
    whatsappLabel: 'واتساب',
    faqTitle: 'أسئلة شائعة',
    faqText: 'لم تجد إجابتك؟ راسلنا على',
    installTitle: 'ما نقوم بتركيبه',
    installText: 'خمس فئات من المنتجات، تُحدَّد مواصفات كل منها حسب المبنى الذي تخدمه.',
    allProducts: 'عرض جميع المنتجات',
    productsLabel: 'المنتجات',
    suited: (a: string) => `الاستخدامات: ${a}`,
    details: 'عرض التفاصيل',
  },
};

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
  const c = useCopy(copy);
  const locale = useLocale();
  const services = useServices();
  const playDoors = useDoorsOnce();

  return (
    <>
      {/* Hero */}
      <section
        className={`on-dark relative h-[100svh] min-h-[640px] max-h-[1000px] overflow-hidden bg-ink ${playDoors ? '' : 'doors-done'}`}
      >
        <img
          src="/images/hero-escalator.jpg"
          alt={c.heroAlt}
          className="absolute inset-0 h-full w-full object-cover object-[65%_50%] rtl:-scale-x-100"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-ink/55 sm:bg-transparent sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l sm:from-ink sm:via-ink/75 sm:to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />

        {playDoors && (
          <div className="doors" aria-hidden="true" dir="ltr">
            <div className="door door-left" />
            <div className="door door-right" />
          </div>
        )}

        <div className="wrap relative flex h-full flex-col justify-end pb-10 lg:pb-14">
          <div className="hero-copy max-w-5xl">
            <p className="kicker">{c.kicker}</p>
            <h1 className="mt-6 text-[2.75rem] leading-[0.98] sm:text-[4.25rem] lg:text-[5.25rem] rtl:leading-[1.25]">
              {c.h1a}
              <br />
              {c.h1b}
            </h1>
            <p className="mt-7 max-w-2xl text-[1.2rem] leading-relaxed text-white/80">{c.heroText}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-white">{c.quote}</Link>
              <a href={telHref(companyData.phone)} className="btn btn-outline-on-dark">
                {c.call} <Ltr>{companyData.phone}</Ltr>
              </a>
            </div>
          </div>

          <dl className="hero-copy mt-14 hidden sm:grid grid-cols-3 gap-6 border-t border-white/15 pt-6 text-[0.9rem] sm:text-[0.95rem] lg:mt-20">
            {c.facts.map(([t, d]) => (
              <div key={t}>
                <dt className="text-white">{t}</dt>
                <dd className="text-white/55">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Statement */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <p className="display text-ink text-[1.75rem] leading-[1.25] sm:text-[2.25rem] lg:col-span-8 lg:text-[2.6rem] rtl:leading-[1.6]">
            {c.statement}
          </p>
          <div className="lg:col-span-4 lg:pb-2">
            <p>{c.statementSide}</p>
            <Link to="/about" className="text-link mt-5 inline-block">{c.about}</Link>
          </div>
        </div>
      </section>

      <ProductDirectory />

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-7">{c.processTitle}</h2>
            <div className="lg:col-span-5">
              <p>{c.processText}</p>
              <Link to="/services" className="text-link mt-4 inline-block">{c.howWeWork}</Link>
            </div>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
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
        {/* Photo is never mirrored (it contains a floor number); in Arabic the text simply sits on the same side. */}
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/85 to-ink/20" />
        <div className="wrap relative grid py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-6 lg:col-start-7 rtl:lg:col-start-1">
            <h2 className="text-[2.25rem] sm:text-[3rem]">{c.maintTitle}</h2>
            <p className="mt-6 text-[1.15rem] leading-relaxed text-white/75">{c.maintText}</p>
            <ul className="mt-8 grid gap-4 text-white/85 sm:grid-cols-3 sm:gap-6">
              {c.maintPoints.map((t) => (
                <li key={t} className="border-t border-white/20 pt-3 text-[0.95rem] leading-snug">{t}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact?need=maintenance" className="btn btn-white">{c.maintCta}</Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline-on-dark">
                {c.whatsapp}
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
                alt={c.whyAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[2.25rem] sm:text-[3rem]">{c.whyTitle}</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {c.reasons.map((r) => (
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
            <h2 className="text-[2.25rem] sm:text-[3rem]">{c.quoteTitle}</h2>
            <p className="mt-5 text-[1.1rem]">{c.quoteText}</p>
            <h3 className="mt-12 text-lg">{c.nextTitle}</h3>
            <ol className="mt-5 space-y-5">
              {c.next.map((t, i) => (
                <li key={t} className="grid grid-cols-[2.25rem_1fr] items-baseline">
                  <span className="display text-xl text-white">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-t border-white/15 pt-6 text-[0.975rem]">
              <p className="font-medium text-white">{c.preferTalk}</p>
              <p className="mt-2">
                <a href={telHref(companyData.phone)} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  <Ltr>{companyData.phone}</Ltr>
                </a>
              </p>
              <p className="mt-1">
                {c.whatsappLabel}{' '}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  <Ltr>{companyData.mobile}</Ltr>
                </a>
              </p>
              <p className="mt-3 text-white/50">{companyText[locale].hours}</p>
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
            <h2 className="text-[2.25rem] sm:text-[3rem]">{c.faqTitle}</h2>
            <p className="mt-5">
              {c.faqText}{' '}
              <a href={`mailto:${companyData.email}`} className="text-link"><Ltr>{companyData.email}</Ltr></a>
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
  const c = useCopy(copy);
  const productCategories = useProducts();
  const [active, setActive] = useState(0);
  const p = productCategories[active];

  return (
    <section className="on-dark bg-ink text-steel-dark">
      <div className="wrap py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-7">{c.installTitle}</h2>
          <p className="lg:col-span-5">
            {c.installText}{' '}
            <Link to="/products" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {c.allProducts}
            </Link>
          </p>
        </div>

        {/* Desktop: directory board */}
        <div className="mt-14 hidden gap-16 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-5 border-t border-white/12" role="tablist" aria-label={c.productsLabel}>
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
                    className="group flex w-full items-center justify-between gap-6 py-6 text-start"
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
                  <p className="mt-2 text-[0.95rem] text-white/55">{c.suited(p.application)}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <Link to={`/products/${p.slug}`} className="btn btn-white !min-h-[46px]">{c.details}</Link>
                  <Link to={quoteHref(p.slug)} className="text-[0.95rem] text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">
                    {c.quote}
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
