import React, { useRef } from 'react';
import Navbar from './Navbar';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { caseStudies } from '../data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

export const PortfolioPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(heroRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );

    gsap.fromTo('.portfolio-stat',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
    );

    gsap.fromTo('.portfolio-study',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 65%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="min-h-screen bg-bg-cream text-ink overflow-hidden">
      <Navbar />

      <section className="max-w-[1820px] mx-auto px-6 md:px-20 pt-12 md:pt-16 pb-16 relative">
        <div className="absolute top-[8px] right-[8px]">
          <PlusIcon />
        </div>

        <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 items-end">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex items-center gap-4 text-rust">
              <span className="w-12 h-px bg-rust"></span>
              <span className="uppercase font-semibold tracking-widest text-sm">Portfolio View</span>
            </div>
            <h1 className="text-[42px] md:text-[72px] font-medium leading-[0.98] tracking-[-1.5px] md:tracking-heading text-ink">
              Case Studies <span className="relative inline-block">Built for Outcomes<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-amber/40 -z-10 rounded-sm"></span></span>
            </h1>
            <p className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              An expanded portfolio view of the work behind the brand — detailed, visual, and structured to match the rest of the site.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {[
              { value: '8', label: 'Case studies' },
              { value: '7', label: 'Industries' },
              { value: '2', label: 'Acquisition channels' },
              { value: '1', label: 'Unified system' },
            ].map((stat) => (
              <div key={stat.label} className="portfolio-stat bg-white border border-border-muted rounded-custom p-5 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-forest">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1820px] mx-auto px-6 md:px-20 pb-24 lg:pb-32 relative">
        <div className="space-y-12">
          {caseStudies.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={item.title}
                className={`portfolio-study grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-border-muted rounded-custom overflow-hidden shadow-md ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual Column */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[560px] overflow-hidden flex flex-col justify-end p-6 md:p-10 bg-forest">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/65 to-forest/20"></div>
                  
                  <div className="relative z-10 text-bg-cream flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-bg-cream/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase text-forest">
                        <span className="material-symbols-outlined text-xs">{item.icon}</span>
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-brand-amber text-forest px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase">
                        <span className="material-symbols-outlined text-xs">bolt</span>
                        {item.metricBadge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white">{item.title}</h2>
                      <p className="mt-3 text-bg-cream/85 text-base md:text-lg leading-relaxed">{item.summary}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
                      {item.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-sm md:text-base font-bold text-brand-amber">{stat.value}</span>
                          <span className="text-[10px] uppercase tracking-wider text-bg-cream/70 mt-0.5">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2 text-rust text-xs font-bold uppercase tracking-[0.2em]">
                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                        <span>Case Study Breakdown</span>
                      </div>
                      <div className="text-right text-xs uppercase tracking-[0.15em] text-ink/45 font-semibold">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span> / {String(caseStudies.length).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">{item.headline}</h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-2 border-t border-border-muted pt-8">
                    {/* Left Col: Challenge & Approach */}
                    <div className="space-y-8">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-rust mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rust"></span>
                          The Challenge
                        </div>
                        <ul className="space-y-3">
                          {item.challengeBullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm md:text-base leading-relaxed text-ink/80">
                              <span className="material-symbols-outlined text-rust text-base mt-0.5">remove</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-forest mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                          Our Approach
                        </div>
                        <ul className="space-y-3">
                          {item.approachBullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm md:text-base leading-relaxed text-ink/80">
                              <span className="material-symbols-outlined text-forest text-base mt-0.5">add</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Col: High-Impact Results Card */}
                    <div className="bg-forest rounded-2xl p-6 md:p-8 text-bg-cream shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col justify-center">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-amber mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse"></span>
                        Key Outcomes
                      </div>
                      <ul className="space-y-4">
                        {item.resultBullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-base md:text-[17px] leading-relaxed font-medium">
                            <span className="material-symbols-outlined text-brand-amber shrink-0 mt-0.5">check_circle</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-white/10">
                         <div className="text-[10px] uppercase tracking-widest text-brand-amber/80 mb-2 font-bold">Strategic Impact</div>
                         <div className="text-lg md:text-xl font-medium text-white italic leading-relaxed">
                            "{item.highlights[0]}"
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-muted/70">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 bg-brand-amber/15 text-forest px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]">
                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                        {item.cta}
                      </span>
                    </div>

                    <a
                      href="/#contact-form-section"
                      className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-brand-amber px-5 py-2.5 rounded-custom font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      <span>Inquire For Similar Scale</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
