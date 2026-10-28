import React from 'react';
import { Plus } from 'lucide-react';
import { useFaqs } from '../data/faq';

export const Faq: React.FC = () => {
  const faqs = useFaqs();
  return (
    <div className="border-t border-line">
      {faqs.map((f, i) => (
        <details key={f.question} className="group border-b border-line" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg text-ink [&::-webkit-details-marker]:hidden">
            <span className="font-medium">{f.question}</span>
            <Plus
              className="mt-1 h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-2xl pb-7 -mt-1">{f.answer}</p>
        </details>
      ))}
    </div>
  );
};
