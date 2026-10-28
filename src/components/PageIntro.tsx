import React from 'react';
import { Link, useCopy } from '../i18n';

interface Crumb { label: string; href?: string }

interface PageIntroProps {
  crumbs: Crumb[];
  title: string;
  image?: string;
  imagePosition?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

/**
 * Inner-page opening band: deep navy, breadcrumb, title, introduction, optional photograph
 * bleeding off the trailing edge (right in English, left in Arabic).
 */
export const PageIntro: React.FC<PageIntroProps> = ({ crumbs, title, image, imagePosition = 'center', children, actions }) => {
  const home = useCopy({ en: 'Home', ar: 'الرئيسية' });
  const crumbLabel = useCopy({ en: 'Breadcrumb', ar: 'مسار التنقل' });

  return (
    <section className="on-dark relative overflow-hidden bg-ink text-steel-dark">
      {image && (
        <div className="absolute inset-y-0 end-0 hidden w-[48%] lg:block" aria-hidden="true">
          <img src={image} alt="" className="h-full w-full object-cover" style={{ objectPosition: imagePosition }} />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-ink via-ink/40 to-transparent" />
        </div>
      )}
      <div className={`wrap relative pt-[140px] pb-16 lg:pt-[176px] lg:pb-24 ${image ? 'lg:min-h-[560px]' : ''}`}>
        <div className={image ? 'lg:max-w-[52%]' : 'max-w-3xl'}>
          <nav aria-label={crumbLabel} className="text-[0.9rem] text-white/55">
            <ol className="flex flex-wrap gap-x-2">
              <li><Link to="/" className="hover:text-white">{home}</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex gap-x-2">
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link to={c.href} className="hover:text-white">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="mt-7 text-[2.5rem] sm:text-[3.25rem] lg:text-[3.6rem]">{title}</h1>
          {children && <div className="mt-6 max-w-xl text-[1.15rem] leading-relaxed">{children}</div>}
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </div>
      </div>
      {image && (
        <div className="relative aspect-[16/9] lg:hidden">
          <img src={image} alt="" className="h-full w-full object-cover" style={{ objectPosition: imagePosition }} />
        </div>
      )}
    </section>
  );
};
