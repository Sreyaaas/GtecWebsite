import React from 'react';
import { companyData, companyText } from '../data/company';
import { PageIntro } from '../components/PageIntro';
import { usePageTitle } from '../lib/usePageTitle';
import { Ltr, useCopy, useLocale } from '../i18n';

const copy = {
  en: {
    title: 'Privacy notice',
    intro: 'How Global Team Elevator Co. handles the information you share through this website. Effective January 2026.',
    collectTitle: 'Information we collect',
    collect:
      'When you request a quotation or send an enquiry, we collect your name, phone number, email address, city, the type of elevator or service you need, the number of floors and any notes you choose to add.',
    useTitle: 'How we use it',
    useIntro: 'We use your information only to:',
    uses: [
      'prepare quotations and technical recommendations',
      'arrange consultations, site visits or maintenance inspections',
      'communicate about installation, commissioning or warranty work',
      'keep records required under Saudi commercial law',
    ],
    storeTitle: 'Storage and security',
    store:
      'We protect your information against unauthorised access, disclosure or alteration. We do not sell, rent or trade your details to anyone.',
    requestTitle: 'Your requests',
    request: 'To review, correct or delete information you have sent us, contact our Dammam office at',
    or: 'or',
  },
  ar: {
    title: 'إشعار الخصوصية',
    intro: 'كيف تتعامل GTEC مع المعلومات التي تشاركها عبر هذا الموقع. يسري اعتبارًا من يناير 2026.',
    collectTitle: 'المعلومات التي نجمعها',
    collect:
      'عند طلب عرض سعر أو إرسال استفسار، نجمع اسمك ورقم هاتفك وبريدك الإلكتروني ومدينتك، ونوع المصعد أو الخدمة التي تحتاجها، وعدد الطوابق، وأي ملاحظات تختار إضافتها.',
    useTitle: 'كيف نستخدمها',
    useIntro: 'نستخدم معلوماتك فقط من أجل:',
    uses: [
      'إعداد عروض الأسعار والتوصيات الفنية',
      'ترتيب الاستشارات أو زيارات الموقع أو فحوصات الصيانة',
      'التواصل بشأن أعمال التركيب أو التشغيل أو الضمان',
      'الاحتفاظ بالسجلات المطلوبة وفق الأنظمة التجارية في المملكة العربية السعودية',
    ],
    storeTitle: 'الحفظ والأمان',
    store: 'نحمي معلوماتك من الوصول أو الإفصاح أو التعديل غير المصرّح به. ولا نبيع بياناتك أو نؤجّرها أو نتاجر بها مع أي جهة.',
    requestTitle: 'طلباتك',
    request: 'لمراجعة المعلومات التي أرسلتها إلينا أو تصحيحها أو حذفها، تواصل مع مكتبنا في الدمام عبر',
    or: 'أو',
  },
};

export const PrivacyPage: React.FC = () => {
  const c = useCopy(copy);
  const text = companyText[useLocale()];
  usePageTitle(c.title);

  return (
    <>
      <PageIntro crumbs={[{ label: c.title }]} title={c.title}>
        {c.intro}
      </PageIntro>

      <section className="section !pt-14">
        <div className="wrap">
          <div className="max-w-[68ch] space-y-10 text-[1.0625rem] leading-[1.75] rtl:leading-[1.9]">
            <div>
              <h2 className="text-2xl">{c.collectTitle}</h2>
              <p className="mt-3">{c.collect}</p>
            </div>

            <div>
              <h2 className="text-2xl">{c.useTitle}</h2>
              <p className="mt-3">{c.useIntro}</p>
              <ul className="prose-list mt-3 space-y-2">
                {c.uses.map((u) => <li key={u}>{u}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">{c.storeTitle}</h2>
              <p className="mt-3">{c.store}</p>
            </div>

            <div>
              <h2 className="text-2xl">{c.requestTitle}</h2>
              <p className="mt-3">
                {c.request}{' '}
                <a href={`mailto:${companyData.email}`} className="text-link"><Ltr>{companyData.email}</Ltr></a> {c.or}{' '}
                <Ltr>{companyData.phone}</Ltr>.
              </p>
              <address className="mt-4 not-italic text-steel-light">
                <span className="block">Global Team Elevator Co.</span>
                {text.addressLines.map((l) => <span key={l} className="block"><bdi>{l}</bdi></span>)}
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
