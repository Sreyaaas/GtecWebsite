import React from 'react';
import { servicesData } from '../data/services';
import { PageIntro } from '../components/PageIntro';
import { ContactBand } from '../components/ContactBand';
import { usePageTitle } from '../lib/usePageTitle';

export const ServicesPage: React.FC = () => {
  usePageTitle('Services');

  return (
    <>
      <PageIntro crumbs={[{ label: 'Services' }]} title="From the first drawing to decades of service">
        GTEC handles every stage of an elevator’s life. Developers, consultants and contractors deal with one team,
        and building owners have one number to call for as long as the equipment runs.
      </PageIntro>

      <div className="wrap">
        <div className="aspect-[21/9] overflow-hidden bg-mist mt-12 lg:mt-16">
          <img
            src="/images/escalator-atrium.jpg"
            alt="Crossing escalators in a bright shopping mall atrium"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <ol>
            {servicesData.map((s, i) => (
              <li
                key={s.id}
                id={s.id}
                className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-16 lg:py-16 scroll-mt-24"
              >
                <div className="lg:col-span-5">
                  <span className="text-lg text-brand tabular-nums">Stage {i + 1}</span>
                  <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem]">{s.title}</h2>
                  <p className="lead mt-4">{s.shortDescription}</p>
                </div>
                <div className="lg:col-span-7 lg:pt-9">
                  <h3 className="text-[1rem] font-medium text-ink">What this covers</h3>
                  <ul className="prose-list mt-4 space-y-2.5">
                    {s.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-8 text-[0.975rem] text-steel-light">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand
        title="Need help at any stage?"
        text="Whether you are planning a new building or looking after an existing one, tell us where you are and we will take it from there."
      />
    </>
  );
};
