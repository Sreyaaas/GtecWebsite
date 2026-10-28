import React from 'react';
import { companyData } from '../data/company';
import { PageIntro } from '../components/PageIntro';
import { usePageTitle } from '../lib/usePageTitle';

export const PrivacyPage: React.FC = () => {
  usePageTitle('Privacy notice');

  return (
    <>
      <PageIntro crumbs={[{ label: 'Privacy notice' }]} title="Privacy notice">
        How Global Team Elevator Co. handles the information you share through this website. Effective January 2026.
      </PageIntro>

      <section className="section !pt-14">
        <div className="wrap">
          <div className="max-w-[68ch] space-y-10 text-[1.0625rem] leading-[1.75]">
            <div>
              <h2 className="text-2xl">Information we collect</h2>
              <p className="mt-3">
                When you request a quotation or send an enquiry, we collect your name, phone number, email address,
                city, the type of elevator or service you need, the number of floors and any notes you choose to
                add.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">How we use it</h2>
              <p className="mt-3">We use your information only to:</p>
              <ul className="prose-list mt-3 space-y-2">
                <li>prepare quotations and technical recommendations</li>
                <li>arrange consultations, site visits or maintenance inspections</li>
                <li>communicate about installation, commissioning or warranty work</li>
                <li>keep records required under Saudi commercial law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Storage and security</h2>
              <p className="mt-3">
                We protect your information against unauthorised access, disclosure or alteration. We do not sell,
                rent or trade your details to anyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Your requests</h2>
              <p className="mt-3">
                To review, correct or delete information you have sent us, contact our Dammam office at{' '}
                <a href={`mailto:${companyData.email}`} className="text-link">{companyData.email}</a> or{' '}
                {companyData.phone}.
              </p>
              <address className="mt-4 not-italic text-steel-light">
                Global Team Elevator Co.
                {companyData.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
