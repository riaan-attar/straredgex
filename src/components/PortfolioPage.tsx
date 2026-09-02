import React, { useRef } from 'react';
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
      <section className="max-w-[1820px] mx-auto px-6 md:px-20 pt-10 md:pt-14 pb-16 relative">
        <div className="absolute top-[8px] right-[8px]">
          <PlusIcon />
        </div>

        <div className="flex items-center justify-between gap-4 mb-10">
          <a href="/" className="inline-flex items-center gap-2 text-ink font-bold uppercase tracking-[0.15em] text-[12px] hover:text-rust transition-colors">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back Home
          </a>
          <a
            href="https://github.com/SiddhantSali/Digital-Marketing-Portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom px-5 py-3 font-bold uppercase tracking-[0.15em] text-[11px] transition-all duration-300 shadow-md"
          >
            Open source portfolio
            <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
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
        <div className="space-y-10">
          {caseStudies.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={item.title}
                className={`portfolio-study grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-border-muted rounded-custom overflow-hidden shadow-sm ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative min-h-[320px] lg:min-h-[560px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent"></div>
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase text-forest">
                    {item.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-bg-cream">
                    <div className="max-w-xl">
                      <h2 className="text-3xl md:text-5xl font-medium leading-tight">{item.title}</h2>
                      <p className="mt-4 text-bg-cream/85 text-base md:text-lg leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-10 lg:p-12 flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-rust font-bold">Case Study Breakdown</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-ink">Strategy, execution, and outcome</h3>
                    </div>
                    <div className="hidden md:flex flex-col items-end text-right text-xs uppercase tracking-[0.15em] text-ink/45">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span>of {String(caseStudies.length).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-custom bg-[#EEF2F5] border border-border-muted p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest mb-4">Challenge</div>
                      <ul className="space-y-3">
                        {item.challengeBullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rust shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-custom bg-[#EEF2F5] border border-border-muted p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest mb-4">Approach</div>
                      <ul className="space-y-3">
                        {item.approachBullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-amber shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-custom bg-[#EEF2F5] border border-border-muted p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest mb-4">Results</div>
                      <ul className="space-y-3">
                        {item.resultBullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center gap-2 bg-brand-amber/15 text-forest px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]">
                      <span className="material-symbols-outlined text-sm">rocket_launch</span>
                      {item.cta}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-forest/10 text-forest px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]">
                      <span className="material-symbols-outlined text-sm">photo_library</span>
                      Visual-led storytelling
                    </span>
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
