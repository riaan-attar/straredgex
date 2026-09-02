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
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    gsap.fromTo('.case-study-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 72%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    cards.forEach((card, index) => {
      gsap.to(card, {
        scale: 1 - index * 0.015,
        y: index * 16,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="case-studies" className="w-full bg-[#EEF2F5] border-b border-border-muted relative overflow-hidden">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 relative">
        <div className="absolute top-[8px] right-[8px]">
          <PlusIcon />
        </div>

        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-4 text-rust">
              <span className="w-12 h-px bg-rust"></span>
              <span className="uppercase font-semibold tracking-widest text-sm">Case Studies</span>
            </div>
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
              Real performance stories from across industries.
            </h2>
            <p className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              A curated snapshot of growth systems built for fashion, e-commerce, compliance, outreach, real estate, food, and subscription brands.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom px-6 py-4 font-bold uppercase tracking-[0.15em] text-[12px] transition-all duration-300 shadow-md"
            >
              View full portfolio
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
            <a
              href="https://github.com/SiddhantSali/Digital-Marketing-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-ink/60 text-sm hover:text-rust transition-colors"
            >
              Source portfolio on GitHub
            </a>
          </div>
        </div>

        <div className="relative pb-[30vh]">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="case-study-card group bg-white border border-border-muted rounded-custom overflow-hidden shadow-2xl flex flex-col min-h-[100%] sticky top-24 md:top-28 mb-10 will-change-transform"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/15 to-transparent"></div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 bg-bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase text-forest">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-ink leading-tight">{item.title}</h3>
                </div>

                <p className="text-ink/70 leading-relaxed text-[15px]">
                  {item.summary}
                </p>

                <div className="space-y-2">
                  {item.sectionBullets.map((point) => (
                    <div key={point} className="flex gap-3 items-start text-sm text-ink/75 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rust shrink-0"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2 border-t border-border-muted/70">
                  <p className="text-forest font-semibold text-[15px] leading-relaxed">
                    {item.cta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
