import React from 'react';

/** Vector redraw of the GTEC chevron mark (red and green "G" diamond). */
export const GtecMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="31 0 38 40" className={className} aria-hidden="true" focusable="false">
    <polygon points="31,19 50,0 57,7 54.5,9.5 50,5 36,19" fill="#DE1F26" />
    <polygon points="51,19 60,10 69,19 64,19 60,15 56,19" fill="#DE1F26" />
    <polygon points="31,21 50,40 69,21 64,21 50,35 36,21" fill="#38A548" />
  </svg>
);

interface GtecLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const GtecLogo: React.FC<GtecLogoProps> = ({ variant = 'dark', className = '' }) => {
  const light = variant === 'light';
  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`} dir="ltr">
      <GtecMark className="h-10 w-auto shrink-0" />
      <span className="flex flex-col items-start leading-none" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
        <span
          className={`wordmark text-[1.5rem] transition-colors duration-300 ${light ? 'text-white' : 'text-brand'}`}
          dir="ltr"
        >
          GTEC
        </span>
        <span
          dir="ltr"
          className={`mt-1 text-[0.72rem] tracking-[0.02em] transition-colors duration-300 ${
            light ? 'text-white/70' : 'text-steel'
          }`}
        >
          Global Team Elevator Co.
        </span>
      </span>
    </span>
  );
};
