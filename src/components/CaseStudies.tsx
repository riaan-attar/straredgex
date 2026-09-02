import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { caseStudies } from '../data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

export const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header fade-in animation
    gsap.fromTo(headerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
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
    <section ref={containerRef} id="case-studies" className="w-full bg-[#EEF2F5] border-b border-border-muted relative overflow-visible">
      <div className="max-w-[1820px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 lg:py-14 relative">
        
        {/* Section Corner Marker */}
        <div className="absolute top-[12px] right-[12px]">
          <PlusIcon />
        </div>

        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="flex items-center gap-4 text-rust">
              <span className="w-12 h-px bg-rust"></span>
              <span className="uppercase font-bold tracking-[0.2em] text-xs sm:text-sm">Performance Case Studies</span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold leading-[1.06] tracking-heading text-ink">
              Real performance stories from across industries.
            </h2>
            <p className="text-ink/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              A curated snapshot of growth systems engineered for high-growth brands with verified, compound revenue impact.
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom px-6 py-3.5 font-bold uppercase tracking-[0.14em] text-[13px] transition-all duration-300 shadow-md"
            >
              <span>View Full Portfolio</span>
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Stackup Cards Container - Generous spacing allows each card to stick and subsequent cards to layer over */}
        <div className="relative pb-6 lg:pb-10 flex flex-col">
          {caseStudies.slice(0, 5).map((item, index, arr) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
                id={`case-study-card-${index}`}
                className="case-study-card-wrapper sticky mb-14 sm:mb-20 lg:mb-14 last:mb-0"
                style={{
                  top: 'clamp(76px, 10vh, 110px)',
                  zIndex: index + 1,
                }}
              >
                <article className="group bg-white border border-border-muted rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:shadow-[0_20px_60px_rgba(0,0,0,0.14)] hover:shadow-[0_30px_75px_rgba(0,0,0,0.2)] transition-all duration-500 relative">
                  
                  {/* Clean 2-Column Alternating Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[520px] items-stretch">
                    
                    {/* Visual Image Column (Alternates Left on Even, Right on Odd) */}
                    <div className={`lg:col-span-5 relative h-52 sm:h-64 lg:h-auto min-h-[210px] sm:min-h-[260px] lg:min-h-full overflow-hidden flex flex-col justify-end p-4 sm:p-6 lg:p-10 bg-forest ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/50 to-transparent"></div>

                      {/* Image Overlay Highlights */}
                      <div className="relative z-10 text-bg-cream flex flex-col gap-2 sm:gap-3">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="inline-flex items-center gap-1 bg-bg-cream/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.12em] uppercase text-forest shadow-sm">
                            <span className="material-symbols-outlined text-xs">{item.icon}</span>
                            {item.category}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-brand-amber text-forest px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.12em] uppercase shadow-sm">
                            <span className="material-symbols-outlined text-xs">bolt</span>
                            {item.metricBadge}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-brand-amber">
                            Case Study {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (Alternates Right on Even, Left on Odd) */}
                    <div className={`lg:col-span-7 p-4 sm:p-6 lg:p-10 xl:p-12 flex flex-col justify-between gap-3 sm:gap-4 bg-white ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      
                      {/* Top Headline & Category Tag */}
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-extrabold text-rust flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rust"></span>
                            {item.category}
                          </span>
                          <span className="text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold text-ink/40">
                            {String(index + 1).padStart(2, '0')} / {String(arr.length).padStart(2, '0')}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-xl lg:text-2xl xl:text-[26px] font-bold text-ink leading-snug tracking-tight">
                          {item.headline}
                        </h4>

                        <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* Prominent Highlighted Numbers Grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-3.5 bg-[#F7F4EE] rounded-xl border border-border-muted">
                        {item.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="flex flex-col">
                            <span className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-black text-forest tracking-tight truncate">
                              {stat.value}
                            </span>
                            <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-ink/60 mt-0.5 truncate">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Takeaways: Short, High-Impact Points */}
                      <div className="space-y-1.5 sm:space-y-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex gap-2 sm:gap-2.5 items-start text-xs sm:text-sm text-ink/85 leading-snug font-medium">
                            <span className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[10px] sm:text-xs font-bold text-forest">check</span>
                            </span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Action Row - Responsive Stack on Mobile to Prevent Overlap */}
                      <div className="pt-2.5 sm:pt-3.5 border-t border-border-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                        <div className="inline-flex items-center gap-1.5 text-forest font-bold text-xs sm:text-sm">
                          <span className="material-symbols-outlined text-sm sm:text-base text-rust">verified</span>
                          <span className="truncate">{item.cta}</span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                          <a
                            href="/case-studies"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-ink hover:text-rust transition-colors px-3 py-2 rounded-custom border border-border-muted hover:bg-forest/5 text-center"
                          >
                            <span>Full Story</span>
                            <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                          </a>

                          <a
                            href="#contact-form-section"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-forest hover:bg-forest/90 text-brand-amber px-3.5 sm:px-4 py-2 rounded-custom font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm text-center"
                          >
                            <span>Build Similar</span>
                            <span className="material-symbols-outlined text-xs sm:text-sm">rocket_launch</span>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Corner Accent Pluses */}
                  <div className="absolute top-[8px] left-[8px] pointer-events-none opacity-40">
                    <PlusIcon />
                  </div>
                  <div className="absolute bottom-[8px] right-[8px] pointer-events-none opacity-40">
                    <PlusIcon />
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* View All Case Studies Footer Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-forest text-bg-cream rounded-2xl border border-border-muted shadow-lg">
          <div className="flex flex-col gap-1.5 text-left w-full sm:w-auto">
            <div className="flex items-center gap-2 text-brand-amber text-xs font-bold uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              <span>Complete Portfolio</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Looking for more industry benchmarks & data?
            </h3>
            <p className="text-bg-cream/75 text-sm sm:text-base max-w-xl">
              Explore all {caseStudies.length} case studies covering B2B outreach, e-commerce, meal subscriptions, and real estate.
            </p>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center gap-3 bg-brand-amber text-forest hover:bg-white hover:text-forest px-6 sm:px-8 py-3.5 sm:py-4 rounded-custom font-bold uppercase tracking-[0.14em] text-xs sm:text-sm transition-all duration-300 shadow-md shrink-0 w-full sm:w-auto text-center"
          >
            <span>View All Case Studies</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
