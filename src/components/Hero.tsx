import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import AtomBulbHero from './AtomBulbHero';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      }
    });
    
    tl.fromTo(headlineRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(cardRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="max-w-[1820px] mx-auto px-6 md:px-20 py-20 lg:py-32 min-h-[600px] flex items-center relative overflow-visible border-b border-border-muted bg-bg-cream">
      {/* Top Right Plus for Section */}
      <div className="absolute top-[8px] right-[8px]">
        <PlusIcon />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,503px] gap-16 lg:gap-10 w-full items-center">
        
        {/* Left Content Block */}
        <div className="flex flex-col gap-[40px] md:gap-[50px] max-w-[857px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-12 h-1 bg-brand-amber rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rust">Performance Engine</span>
            </div>
            <h1 ref={headlineRef} className="text-[42px] sm:text-[54px] md:text-[74px] font-medium leading-[1.1] md:leading-heading tracking-[-1.5px] md:tracking-heading text-ink">
              Scaling Revenue with <span className="relative inline-block">Precision Performance<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-amber/40 -z-10 rounded-sm"></span></span> Marketing.
            </h1>
            <p ref={subtextRef} className="text-[18px] md:text-[22px] leading-relaxed md:leading-body tracking-subheading text-ink/70 max-w-[700px]">
              StratedgeX is a data-driven performance agency specializing in Google Ads, Meta Ads, and high-converting landing pages to engineer predictable growth.
            </p>
          </div>

          <div ref={ctaRef} className="flex">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom flex items-center justify-between sm:justify-start gap-[26px] overflow-hidden group h-[59px] pr-0 transition-all duration-300 shadow-md font-bold"
            >
              <span className="pl-[26px] text-[16px] md:text-[18px] tracking-cta font-bold">Scale Your Revenue</span>
              <div className="flex items-center h-full">
                <div className="w-px h-full bg-forest opacity-20"></div>
                <div className="px-[16px]">
                  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="relative flex flex-col justify-end items-center h-full mt-8 lg:mt-0">
          {/* Decorative Card */}
          <div ref={cardRef} className="relative w-full max-w-[503px] rounded-custom overflow-visible">
            
            {/* Top Left Plus on Card */}
            <div className="absolute -top-[8px] -left-[8px] z-20">
              <PlusIcon />
            </div>

            {/* Bulb Canvas Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AtomBulbHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
