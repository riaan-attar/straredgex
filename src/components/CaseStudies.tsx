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
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-10 lg:py-14 relative">
        
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
          {caseStudies.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
                id={`case-study-card-${index}`}
                className="case-study-card-wrapper mb-12 sm:mb-16 lg:mb-20 last:mb-0"
              >
                <article className="group bg-white border border-border-muted rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)] hover:shadow-[0_30px_75px_rgba(0,0,0,0.2)] transition-all duration-500 relative">
                  
                  {/* Clean 2-Column Alternating Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] items-stretch">
                    
                    {/* Visual Image Column (Alternates Left on Even, Right on Odd) */}
                    <div className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] lg:min-h-full overflow-hidden flex flex-col justify-end p-8 sm:p-10 bg-forest ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/65 to-forest/20"></div>

                      {/* Image Overlay Highlights */}
                      <div className="relative z-10 text-bg-cream flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-bg-cream/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.16em] uppercase text-forest shadow-sm">
                            <span className="material-symbols-outlined text-sm">{item.icon}</span>
                            {item.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-brand-amber text-forest px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.14em] uppercase shadow-sm">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                            {item.metricBadge}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-amber">
                            Case Study {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (Alternates Right on Even, Left on Odd) */}
                    <div className={`lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-between gap-8 bg-white ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      
                      {/* Top Headline & Category Tag */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-rust flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust"></span>
                            {item.category}
                          </span>
                          <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-ink/40">
                            {String(index + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
                          </span>
                        </div>

                        <h4 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-ink leading-[1.15] tracking-tight">
                          {item.headline}
                        </h4>

                        <p className="text-base sm:text-lg text-ink/75 leading-relaxed mt-1">
                          {item.summary}
                        </p>
                      </div>

                      {/* Prominent Highlighted Numbers Grid */}
                      <div className="grid grid-cols-3 gap-4 p-5 sm:p-6 bg-[#F7F4EE] rounded-xl border border-border-muted">
                        {item.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="flex flex-col">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest tracking-tight">
                              {stat.value}
                            </span>
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Summarized Key Takeaways (2 Bullet Highlights) */}
                      <div className="space-y-3">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex gap-3.5 items-start text-sm sm:text-base text-ink/85 leading-relaxed font-medium">
                            <span className="mt-1 h-5 w-5 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-sm font-bold text-forest">check</span>
                            </span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-6 border-t border-border-muted flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-2 text-forest font-bold text-sm sm:text-base">
                          <span className="material-symbols-outlined text-lg text-rust">verified</span>
                          <span>{item.cta}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-ink hover:text-rust transition-colors px-3 py-2 rounded-md hover:bg-forest/5"
                          >
                            <span>Full Story</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </a>

                          <a
                            href="#contact-form-section"
                            className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-brand-amber px-5 py-2.5 rounded-custom font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
                          >
                            <span>Build Similar</span>
                            <span className="material-symbols-outlined text-sm">rocket_launch</span>
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

      </div>
    </section>
  );
};

export default CaseStudies;
