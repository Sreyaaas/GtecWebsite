import React from 'react';
import { Link } from 'react-router-dom';

interface Crumb { label: string; href?: string }

/** Standard inner-page heading: breadcrumb, title and a short introduction. */
export const PageIntro: React.FC<{ crumbs: Crumb[]; title: string; children?: React.ReactNode }> = ({
  crumbs,
  title,
  children,
}) => (
  <section className="border-b border-line">
    <div className="wrap pt-10 pb-14 lg:pt-14 lg:pb-20">
      <nav aria-label="Breadcrumb" className="text-[0.9rem] text-steel-light">
        <ol className="flex flex-wrap gap-x-2">
          <li><Link to="/" className="hover:text-ink">Home</Link></li>
          {crumbs.map((c) => (
            <li key={c.label} className="flex gap-x-2">
              <span aria-hidden="true">/</span>
              {c.href ? <Link to={c.href} className="hover:text-ink">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="mt-6 max-w-3xl text-[2.5rem] sm:text-5xl lg:text-[3.5rem]">{title}</h1>
      {children && <div className="lead mt-6 max-w-2xl">{children}</div>}
    </div>
  </section>
);
