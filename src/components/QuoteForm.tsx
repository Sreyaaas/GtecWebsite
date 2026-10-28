import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyData, telHref } from '../data/company';
import { cities, needOptions } from '../data/enquiry';

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'need', string>>;

// Optional: set VITE_ENQUIRY_ENDPOINT (e.g. a Formspree or Basin form URL) to post enquiries directly.
// Without it, the form opens the visitor's email app with the enquiry written out for sales@.
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined;

interface QuoteFormProps {
  initialNeed?: string;
  idPrefix?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialNeed = '', idPrefix = 'q' }) => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    need: initialNeed,
    floors: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto' | 'failed'>('idle');

  const id = (k: string) => `${idPrefix}-${k}`;

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = 'Enter your name.';
    if (data.phone.replace(/\D/g, '').length < 9) e.phone = 'Enter a mobile or phone number we can call, including the area code.';
    if (data.email.trim() && !/^\S+@\S+\.\S+$/.test(data.email.trim())) e.email = 'Enter a valid email address, or leave this blank.';
    if (!data.need) e.need = 'Choose what you need so we can pass your enquiry to the right person.';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }

    const summary = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email && `Email: ${data.email}`,
      data.city && `City: ${data.city}`,
      `Enquiry: ${data.need}`,
      data.floors && `Floors / stops: ${data.floors}`,
      data.message && `\n${data.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Quotation request: ${data.need}`);
      window.location.href = `mailto:${companyData.email}?subject=${subject}&body=${encodeURIComponent(summary)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Quotation request: ${data.need}` }),
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
        <h3 className="text-2xl">
          {status === 'sent' ? 'Enquiry sent' : 'Your email is ready to send'}
        </h3>
        <p className="mt-3 max-w-prose">
          {status === 'sent'
            ? `Thank you, ${data.name.split(' ')[0]}. Our sales team will contact you on ${data.phone} during working hours (${companyData.hours.toLowerCase()}).`
            : `Your email app should have opened with your enquiry written out to ${companyData.email}. Press send there to reach our sales team. If nothing opened, call us on ${companyData.phone}.`}
        </p>
        <button type="button" className="text-link mt-6" onClick={() => setStatus('idle')}>
          {status === 'sent' ? 'Send another enquiry' : 'Back to the form'}
        </button>
      </div>
    );
  }

  const errorText = (k: keyof Errors) =>
    errors[k] ? (
      <p id={id(`${k}-error`)} className="mt-1.5 text-[0.9rem] text-error">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {status === 'failed' && (
        <div className="sm:col-span-2 border-l-2 border-error bg-[#fbeeed] px-4 py-3 text-[0.95rem] text-ink" role="alert">
          Your enquiry could not be sent. Check your connection and try again, or call{' '}
          <a href={telHref(companyData.phone)} className="font-medium underline">
            {companyData.phone}
          </a>
          .
        </div>
      )}

      <div>
        <label htmlFor={id('name')} className="field-label">Full name</label>
        <input
          id={id('name')} name="name" type="text" autoComplete="name"
          className="field" value={data.name} onChange={update}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? id('name-error') : undefined}
        />
        {errorText('name')}
      </div>

      <div>
        <label htmlFor={id('phone')} className="field-label">Mobile number</label>
        <input
          id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel"
          placeholder="05X XXX XXXX" className="field" value={data.phone} onChange={update}
          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? id('phone-error') : undefined}
        />
        {errorText('phone')}
      </div>

      <div>
        <label htmlFor={id('email')} className="field-label">
          Email <span className="font-normal text-steel-light">(optional)</span>
        </label>
        <input
          id={id('email')} name="email" type="email" autoComplete="email"
          className="field" value={data.email} onChange={update}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? id('email-error') : undefined}
        />
        {errorText('email')}
      </div>

      <div>
        <label htmlFor={id('city')} className="field-label">
          City <span className="font-normal text-steel-light">(optional)</span>
        </label>
        <select id={id('city')} name="city" className="field" value={data.city} onChange={update}>
          <option value="">Select a city</option>
          {cities.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor={id('need')} className="field-label">What do you need?</label>
        <select
          id={id('need')} name="need" className="field" value={data.need} onChange={update}
          aria-invalid={!!errors.need} aria-describedby={errors.need ? id('need-error') : undefined}
        >
          <option value="">Choose one</option>
          {needOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errorText('need')}
      </div>

      <div>
        <label htmlFor={id('floors')} className="field-label">
          Number of floors <span className="font-normal text-steel-light">(optional)</span>
        </label>
        <input
          id={id('floors')} name="floors" type="text" placeholder="For example, G+3"
          className="field" value={data.floors} onChange={update}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={id('message')} className="field-label">
          Anything else we should know? <span className="font-normal text-steel-light">(optional)</span>
        </label>
        <textarea
          id={id('message')} name="message" rows={4}
          placeholder="Shaft size, timeline, finishes, or the make and age of an existing elevator"
          className="field resize-y" value={data.message} onChange={update}
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p className="text-[0.9rem] text-steel-light sm:max-w-xs sm:text-right">
          We use your details only to reply to this enquiry. See our{' '}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-ink">privacy notice</Link>.
        </p>
      </div>
    </form>
  );
};
