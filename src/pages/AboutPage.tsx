import React from 'react';
import { companyData, telHref } from '../data/company';
import { PageIntro } from '../components/PageIntro';
import { ContactBand } from '../components/ContactBand';
import { usePageTitle } from '../lib/usePageTitle';

const principles = [
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
];

export const AboutPage: React.FC = () => {
  usePageTitle('About');

  return (
    <>
      <PageIntro crumbs={[{ label: 'About' }]} title="About Global Team Elevator Co." image="/images/elevator-buttons-real.jpg" imagePosition="45% 50%">
        An elevator and escalator contractor founded in Dammam in {companyData.established}, serving developers,
        contractors and building owners across Saudi Arabia.
      </PageIntro>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-6 space-y-5 text-[1.0625rem] leading-[1.75]">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-8">Built around the building, not the catalogue</h2>
            <p>
              Global Team Elevator Co. was established in {companyData.established} to meet the growing needs of
              Saudi Arabia’s residential, commercial and industrial construction. We bring elevator and escalator
              design, supply, installation and maintenance together under one roof.
            </p>
            <p>
              We do not treat elevators as off-the-shelf equipment. Each project starts with the building: how it
              will be used, how many people it serves and how much space there is for the shaft. From early shaft
              sizing and traffic analysis to installation and long-term maintenance, the same team stays involved at
              every stage.
            </p>
            <p>
              Our head office in Dammam coordinates supply, project delivery and maintenance across the Kingdom.
            </p>
          </div>
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-mist">
            <img
              src="/images/reference-hero.jpg"
              alt="Elevator doors on a building landing with a floor number sign"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="max-w-2xl text-[2rem] sm:text-[2.5rem]">What we hold ourselves to</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {principles.map((p) => (
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
            <h2 className="text-[2rem] sm:text-[2.5rem]">Head office</h2>
            <p className="lead mt-4">Dammam, Eastern Province</p>
          </div>
          <dl className="lg:col-span-7 border-t border-line">
            <Row label="Address">
              {companyData.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
            </Row>
            <Row label="Telephone">
              <a href={telHref(companyData.phone)} className="text-link">{companyData.phone}</a>
            </Row>
            <Row label="Mobile">
              <a href={telHref(companyData.mobile)} className="text-link">{companyData.mobile}</a>
              <span className="block mt-1">
                <a href={telHref(companyData.altMobile)} className="text-link">{companyData.altMobile}</a>
              </span>
            </Row>
            <Row label="Email">
              <a href={`mailto:${companyData.email}`} className="text-link">{companyData.email}</a>
            </Row>
            <Row label="Hours">{companyData.hours}</Row>
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
