import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LeadQuoteCardProps {
  quote?: string;
  author?: string;
  role?: string;
  metricBadge?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const LeadQuoteCard: React.FC<LeadQuoteCardProps> = ({
  quote = "Stop paying for passive impressions. High-performing brands engineer hyper-targeted acquisition funnels that convert clicks into predictable, compound revenue.",
  author = "Pipeline Acceleration Engine",
  role = "StratedgeX Lead Generation Principle",
  metricBadge = "94.8% Qualified Pipeline Rate",
  imageSrc = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
  ctaText = "Scale Your Pipeline",
  ctaLink = "#contact-form-section"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(cardRef.current,
      { y: 40, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="w-full max-w-[1820px] mx-auto px-6 md:px-20 py-8 relative z-20"
      id="lead-quote-banner"
    >
      <div 
        ref={cardRef}
        className="group relative bg-forest text-bg-cream rounded-custom border border-forest/80 shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,46,0.35)]"
      >
        {/* Subtle geometric background motif */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#FEBD59_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Amber glow accent on left */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-amber/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-rust/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Long Horizontal Card Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left: Compact Visual with Badge */}
          <div className="flex items-center gap-5 shrink-0 w-full lg:w-auto">
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-custom overflow-hidden border-2 border-brand-amber/40 shadow-lg relative group-hover:border-brand-amber transition-colors duration-300">
                <img 
                  src={imageSrc} 
                  alt="High Intent Lead Generation" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Mini Pulsing Active Indicator */}
              <div className="absolute -bottom-1.5 -right-1.5 flex items-center justify-center bg-forest p-1 rounded-full border border-brand-amber/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-amber"></span>
                </span>
              </div>
            </div>

            {/* Mobile Metric Pill & Author */}
            <div className="flex flex-col gap-1.5 sm:hidden flex-grow">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-brand-amber/15 text-brand-amber border border-brand-amber/30 w-fit">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                Lead Velocity
              </span>
              <p className="text-xs font-semibold text-bg-cream/90">{author}</p>
              <p className="text-[10px] text-bg-cream/60">{role}</p>
            </div>
          </div>

          {/* Center: Quote Content */}
          <div className="flex flex-col gap-3 flex-grow max-w-4xl text-left">
            <div className="hidden sm:flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                {metricBadge}
              </span>
              <span className="text-xs font-medium text-bg-cream/60 tracking-wider uppercase">
                {author} • {role}
              </span>
            </div>

            {/* The Lead Generation Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-normal leading-snug tracking-tight text-bg-cream/95">
              <span className="text-brand-amber font-serif text-2xl lg:text-3xl leading-none mr-1.5">“</span>
              <span className="font-medium text-white">{quote.split('.')[0]}.</span>
              <span className="text-bg-cream/80 font-normal"> {quote.substring(quote.indexOf('.') + 1)}</span>
              <span className="text-brand-amber font-serif text-2xl lg:text-3xl leading-none ml-1.5">”</span>
            </blockquote>
          </div>

          {/* Right: Sleek Action Button */}
          <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
            <a
              href={ctaLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-amber hover:bg-white text-forest px-6 sm:px-8 py-3.5 sm:py-4 rounded-custom font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md group/btn"
            >
              <span>{ctaText}</span>
              <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

        </div>

        {/* StratedgeX Signature Corner Plus Decor */}
        <div className="absolute top-[8px] left-[8px] pointer-events-none opacity-80">
          <PlusIcon />
        </div>
        <div className="absolute top-[8px] right-[8px] pointer-events-none opacity-80">
          <PlusIcon />
        </div>
        <div className="absolute bottom-[8px] left-[8px] pointer-events-none opacity-80">
          <PlusIcon />
        </div>
        <div className="absolute bottom-[8px] right-[8px] pointer-events-none opacity-80">
          <PlusIcon />
        </div>
      </div>
    </section>
  );
};

export default LeadQuoteCard;
