import React from 'react';

const brandLogos = [
  "NEXUS.CO",
  "ORBITAL",
  "QUANTUM",
  "VANTAGE",
  "EQUINOX",
  "ZENITH"
];

export const LogoCloud: React.FC = () => {
  return (
    <div className="max-w-[1820px] mx-auto py-12 border-b border-border-muted overflow-hidden bg-[#EEF2F5]">
      {/* Title Marquee Banner */}
      <div className="relative flex overflow-hidden mb-10 py-3 bg-border-muted/30 border-y border-border-muted">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex gap-12 items-center px-6 text-ink/70 uppercase tracking-[3px] text-xs font-bold shrink-0">
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
          </div>
          <div className="flex gap-12 items-center px-6 text-ink/70 uppercase tracking-[3px] text-xs font-bold shrink-0">
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
            <span>Powering the Next Generation of Global Brands</span>
            <span className="text-rust text-sm">•</span>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Marquee Wrapper */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Track 1 */}
          <div className="flex gap-20 items-center px-10 shrink-0">
            {brandLogos.map((brand, index) => (
              <span key={index} className="text-2xl md:text-3xl font-bold tracking-tighter text-ink/50 hover:text-rust transition-colors duration-300 cursor-default">
                {brand}
              </span>
            ))}
          </div>
          {/* Track 2 (Duplicate for Seamless Loop) */}
          <div className="flex gap-20 items-center px-10 shrink-0">
            {brandLogos.map((brand, index) => (
              <span key={`dup-${index}`} className="text-2xl md:text-3xl font-bold tracking-tighter text-ink/50 hover:text-rust transition-colors duration-300 cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
