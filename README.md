# GTEC Elevators website

Marketing site for Global Team Elevator Co. (Dammam, Saudi Arabia). React 19, Vite, Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Design system

- **Colours** come from the logo: navy `#233D90` for actions and links, deep navy `#0F1E45` for headings and dark bands, with the red and green kept for the logo mark. Tokens live in `src/index.css`.
- **Type** is IBM Plex Sans, self-hosted through `@fontsource` (no Google Fonts request). It has a matching Arabic family, IBM Plex Sans Arabic, for a future Arabic version.
- **Logo**: `src/components/GtecLogo.tsx` is a vector redraw of the chevron mark. If you have the original vector logo, swap it in there and in `public/favicon.svg`.

## Languages

English lives at `/` and Arabic at `/ar` (for example `/ar/products/villa-elevators`). The language switch in the header, mobile menu and footer keeps the visitor on the same page.

- Locale context, locale-aware `Link`/`NavLink` and the `Ltr` helper are in `src/i18n/index.tsx`.
- Page copy sits next to each component as `{ en, ar }`; products, services and FAQs have Arabic versions in `src/data/`.
- Arabic sets `<html lang="ar" dir="rtl">`, uses IBM Plex Sans Arabic and mirrors the layout with logical CSS (start/end).
- Phone numbers and emails are wrapped in `<Ltr>` (or `ltr()` in strings) so they don't reverse inside Arabic text.
- Still to confirm with GTEC: the official Arabic trade name and the Arabic street address (the street line is kept in Latin script for now).

## Quotation form

`src/components/QuoteForm.tsx` sends enquiries in one of two ways:

1. Set `VITE_ENQUIRY_ENDPOINT` (for example a Formspree, Basin or Getform URL) in `.env` and enquiries are posted there as JSON.
2. Without it, submitting opens the visitor's email app with the enquiry addressed to `sales@gtecelevators.com`.

## Content

Page copy, products, services and FAQs are in `src/data/`. Contact details, hours and the WhatsApp number are in `src/data/company.ts`.

## Hosting

This is a single-page app, so the host must serve `index.html` for every route (Netlify `_redirects`, Vercel rewrites, or an equivalent rule).
