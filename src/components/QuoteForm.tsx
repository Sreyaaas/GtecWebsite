import React, { useState } from 'react';
import { companyData, companyText, telHref } from '../data/company';
import { cities, needOptions } from '../data/enquiry';
import { Link, Ltr, useCopy, useLocale } from '../i18n';

type Field = 'name' | 'phone' | 'email' | 'need';
type Errors = Partial<Record<Field, string>>;

const copy = {
  en: {
    name: 'Full name',
    phone: 'Mobile number',
    email: 'Email',
    city: 'City',
    need: 'What do you need?',
    floors: 'Number of floors',
    message: 'Anything else we should know?',
    optional: '(optional)',
    chooseCity: 'Select a city',
    chooseNeed: 'Choose one',
    floorsHint: 'For example, G+3',
    messageHint: 'Shaft size, timeline, finishes, or the make and age of an existing elevator',
    send: 'Send enquiry',
    sending: 'Sending…',
    privacy: 'We use your details only to reply to this enquiry. See our',
    privacyLink: 'privacy notice',
    errName: 'Enter your name.',
    errPhone: 'Enter a mobile or phone number we can call, including the area code.',
    errEmail: 'Enter a valid email address, or leave this blank.',
    errNeed: 'Choose what you need so we can pass your enquiry to the right person.',
    failed: 'Your enquiry could not be sent. Check your connection and try again, or call',
    sentTitle: 'Enquiry sent',
    sentText: (first: string, phone: string, hours: string) =>
      `Thank you, ${first}. Our sales team will contact you on ${phone} during working hours (${hours.toLowerCase()}).`,
    mailTitle: 'Your email is ready to send',
    mailText: `Your email app should have opened with your enquiry written out to ${companyData.email}. Press send there to reach our sales team. If nothing opened, call us on`,
    again: 'Send another enquiry',
    back: 'Back to the form',
    subject: 'Quotation request',
    labels: { name: 'Name', phone: 'Phone', email: 'Email', city: 'City', need: 'Enquiry', floors: 'Floors / stops', lang: 'Language: English' },
  },
  ar: {
    name: 'الاسم الكامل',
    phone: 'رقم الجوال',
    email: 'البريد الإلكتروني',
    city: 'المدينة',
    need: 'ما الذي تحتاجه؟',
    floors: 'عدد الطوابق',
    message: 'هل هناك ما تودّ إخبارنا به؟',
    optional: '(اختياري)',
    chooseCity: 'اختر المدينة',
    chooseNeed: 'اختر من القائمة',
    floorsHint: 'مثال: أرضي + 3',
    messageHint: 'مقاس البئر، أو الجدول الزمني، أو التشطيبات، أو نوع المصعد الحالي وعمره',
    send: 'إرسال الطلب',
    sending: 'جارٍ الإرسال…',
    privacy: 'نستخدم بياناتك فقط للرد على هذا الطلب. اطّلع على',
    privacyLink: 'إشعار الخصوصية',
    errName: 'أدخل اسمك.',
    errPhone: 'أدخل رقم جوال أو هاتف يمكننا الاتصال به، مع رمز المنطقة.',
    errEmail: 'أدخل بريدًا إلكترونيًا صحيحًا، أو اترك الحقل فارغًا.',
    errNeed: 'اختر ما تحتاجه لنحوّل طلبك إلى الشخص المناسب.',
    failed: 'تعذّر إرسال طلبك. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى، أو اتصل على',
    sentTitle: 'تم إرسال طلبك',
    sentText: (first: string, phone: string, hours: string) =>
      `شكرًا لك يا ${first}. سيتواصل معك فريق المبيعات على الرقم ⁦${phone}⁩ خلال ساعات العمل (${hours}).`,
    mailTitle: 'رسالتك جاهزة للإرسال',
    mailText: `يُفترض أن يكون تطبيق البريد قد فُتح وفيه طلبك موجّهًا إلى ⁦${companyData.email}⁩. اضغط «إرسال» هناك ليصل طلبك إلى فريق المبيعات. وإن لم يُفتح شيء، اتصل بنا على`,
    again: 'إرسال طلب آخر',
    back: 'العودة إلى النموذج',
    subject: 'طلب عرض سعر',
    labels: { name: 'الاسم', phone: 'الجوال', email: 'البريد الإلكتروني', city: 'المدينة', need: 'الطلب', floors: 'عدد الطوابق / الوقفات', lang: 'اللغة: العربية' },
  },
};

// Optional: set VITE_ENQUIRY_ENDPOINT (e.g. a Formspree or Basin form URL) to post enquiries directly.
// Without it, the form opens the visitor's email app with the enquiry written out for sales@.
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined;

interface QuoteFormProps {
  /** Id from needOptions, e.g. "villa". */
  initialNeed?: string;
  idPrefix?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialNeed = '', idPrefix = 'q' }) => {
  const c = useCopy(copy);
  const locale = useLocale();
  const [data, setData] = useState({ name: '', phone: '', email: '', city: '', need: initialNeed, floors: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto' | 'failed'>('idle');

  const id = (k: string) => `${idPrefix}-${k}`;
  const needLabel = (v: string) => needOptions.find((o) => o.id === v)?.label[locale] ?? v;
  const cityLabel = (v: string) => cities.find((o) => o.id === v)?.label[locale] ?? v;

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name as Field]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = c.errName;
    // Accept Arabic-Indic digits too (٠١٢…), which many phones type by default in Arabic.
    const digits = data.phone.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/\D/g, '');
    if (digits.length < 9) e.phone = c.errPhone;
    if (data.email.trim() && !/^\S+@\S+\.\S+$/.test(data.email.trim())) e.email = c.errEmail;
    if (!data.need) e.need = c.errNeed;
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = (Object.keys(e) as Field[])[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }

    const L = c.labels;
    const summary = [
      `${L.name}: ${data.name}`,
      `${L.phone}: ${data.phone}`,
      data.email && `${L.email}: ${data.email}`,
      data.city && `${L.city}: ${cityLabel(data.city)}`,
      `${L.need}: ${needLabel(data.need)}`,
      data.floors && `${L.floors}: ${data.floors}`,
      L.lang,
      data.message && `\n${data.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    const subject = `${c.subject}: ${needLabel(data.need)}`;

    if (!ENDPOINT) {
      window.location.href = `mailto:${companyData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          city: data.city ? cityLabel(data.city) : '',
          need: needLabel(data.need),
          language: locale,
          _subject: subject,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="border-t-2 border-success bg-white pt-8" role="status">
        <h3 className="text-2xl">{status === 'sent' ? c.sentTitle : c.mailTitle}</h3>
        <p className="mt-3 max-w-prose">
          {status === 'sent' ? (
            c.sentText(data.name.trim().split(/\s+/)[0], data.phone, companyText[locale].hours)
          ) : (
            <>
              {c.mailText} <Ltr>{companyData.phone}</Ltr>.
            </>
          )}
        </p>
        <button type="button" className="text-link mt-6" onClick={() => setStatus('idle')}>
          {status === 'sent' ? c.again : c.back}
        </button>
      </div>
    );
  }

  const errorText = (k: Field) =>
    errors[k] ? (
      <p id={id(`${k}-error`)} className="mt-1.5 text-[0.9rem] text-error">
        {errors[k]}
      </p>
    ) : null;

  const describedBy = (k: Field) => (errors[k] ? id(`${k}-error`) : undefined);
  const optional = <span className="font-normal text-steel-light">{c.optional}</span>;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {status === 'failed' && (
        <div className="sm:col-span-2 border-s-2 border-error bg-[#fbeeed] px-4 py-3 text-[0.95rem] text-ink" role="alert">
          {c.failed}{' '}
          <a href={telHref(companyData.phone)} className="font-medium underline">
            <Ltr>{companyData.phone}</Ltr>
          </a>
          .
        </div>
      )}

      <div>
        <label htmlFor={id('name')} className="field-label">{c.name}</label>
        <input
          id={id('name')} name="name" type="text" autoComplete="name"
          className="field" value={data.name} onChange={update}
          aria-invalid={!!errors.name} aria-describedby={describedBy('name')}
        />
        {errorText('name')}
      </div>

      <div>
        <label htmlFor={id('phone')} className="field-label">{c.phone}</label>
        <input
          id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" dir="ltr"
          placeholder="05X XXX XXXX" className="field rtl:text-right" value={data.phone} onChange={update}
          aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')}
        />
        {errorText('phone')}
      </div>

      <div>
        <label htmlFor={id('email')} className="field-label">{c.email} {optional}</label>
        <input
          id={id('email')} name="email" type="email" autoComplete="email" dir="ltr"
          className="field rtl:text-right" value={data.email} onChange={update}
          aria-invalid={!!errors.email} aria-describedby={describedBy('email')}
        />
        {errorText('email')}
      </div>

      <div>
        <label htmlFor={id('city')} className="field-label">{c.city} {optional}</label>
        <select id={id('city')} name="city" className="field" value={data.city} onChange={update}>
          <option value="">{c.chooseCity}</option>
          {cities.map((o) => <option key={o.id} value={o.id}>{o.label[locale]}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor={id('need')} className="field-label">{c.need}</label>
        <select
          id={id('need')} name="need" className="field" value={data.need} onChange={update}
          aria-invalid={!!errors.need} aria-describedby={describedBy('need')}
        >
          <option value="">{c.chooseNeed}</option>
          {needOptions.map((o) => <option key={o.id} value={o.id}>{o.label[locale]}</option>)}
        </select>
        {errorText('need')}
      </div>

      <div>
        <label htmlFor={id('floors')} className="field-label">{c.floors} {optional}</label>
        <input
          id={id('floors')} name="floors" type="text" placeholder={c.floorsHint}
          className="field" value={data.floors} onChange={update}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={id('message')} className="field-label">{c.message} {optional}</label>
        <textarea
          id={id('message')} name="message" rows={4} placeholder={c.messageHint}
          className="field resize-y" value={data.message} onChange={update}
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? c.sending : c.send}
        </button>
        <p className="text-[0.9rem] text-steel-light sm:max-w-xs sm:text-end">
          {c.privacy}{' '}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-ink">{c.privacyLink}</Link>.
        </p>
      </div>
    </form>
  );
};
