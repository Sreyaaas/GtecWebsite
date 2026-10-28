import React from 'react';

interface GtecLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const GtecLogo: React.FC<GtecLogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Company Logo from Photos */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isLight ? 'bg-white p-1.5 rounded-[4px] shadow-sm' : 'p-0.5'
      }`}>
        <img
          src="/images/logo.png"
          alt="GTEC - Global Team Elevator Co."
          className="h-7 sm:h-8 w-auto object-contain"
          loading="eager"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span className={`text-lg sm:text-xl font-bold tracking-tight ${
            isLight ? 'text-white' : 'text-[#1c151d]'
          }`}>
            GTEC
          </span>
          <span className="text-lg sm:text-xl font-semibold tracking-wider ml-1.5 text-[#9B1D20]">
            ELEVATORS
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] tracking-[0.16em] uppercase font-medium ${
            isLight ? 'text-[#dcd4dc]' : 'text-[#635D5C]'
          }`}>
            Global Team Elevator Co. · Est. 2007
          </span>
        )}
      </div>
    </div>
  );
};
