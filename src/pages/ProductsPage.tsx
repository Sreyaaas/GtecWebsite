import React from 'react';
import { useProducts } from '../data/products';
import { quoteHref } from '../data/enquiry';
import { PageIntro } from '../components/PageIntro';
import { ContactBand } from '../components/ContactBand';
import { usePageTitle } from '../lib/usePageTitle';
import { Link, useCopy } from '../i18n';

const copy = {
  en: {
    crumb: 'Products',
    title: 'Elevators and escalators',
    intro:
      'Five product families for villas, residential and office buildings, hotels, malls and industrial sites. Every system is specified around your building, then installed and maintained by our own teams.',
    suited: 'Suited to:',
    specs: 'Specifications',
    quote: 'Request a quote',
    bandTitle: 'Not sure which elevator you need?',
    bandText: 'Send us your drawings or describe the building. Our engineers will recommend the right type and capacity.',
  },
  ar: {
    crumb: 'المنتجات',
    title: 'المصاعد والسلالم الكهربائية',
    intro:
      'خمس فئات من المنتجات للفلل والمباني السكنية والمكتبية والفنادق والمراكز التجارية والمواقع الصناعية. نحدّد مواصفات كل نظام وفق مبناك، ثم تتولى فرقنا تركيبه وصيانته.',
    suited: 'الاستخدامات:',
    specs: 'المواصفات',
    quote: 'اطلب عرض سعر',
    bandTitle: 'لست متأكدًا من نوع المصعد المناسب؟',
    bandText: 'أرسل لنا مخططاتك أو صِف لنا المبنى، وسيوصي مهندسونا بالنوع والسعة المناسبين.',
  },
};

export const ProductsPage: React.FC = () => {
  const c = useCopy(copy);
  const productCategories = useProducts();
  usePageTitle(c.crumb);

  return (
    <>
      <PageIntro crumbs={[{ label: c.crumb }]} title={c.title} image="/images/elevator-glass-authentic.jpg" imagePosition="40% 50%">
        {c.intro}
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
                  <span className="font-medium text-ink">{c.suited} </span>
                  {p.application}
                </p>
                <ul className="prose-list mt-6 space-y-2">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link to={`/products/${p.slug}`} className="btn btn-secondary">
                    {c.specs}
                  </Link>
                  <Link to={quoteHref(p.slug)} className="text-link">
                    {c.quote}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand title={c.bandTitle} text={c.bandText} />
    </>
  );
};
