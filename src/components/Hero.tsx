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
              Escape Invisibility, Embrace Impact
            </h1>
            <p ref={subtextRef} className="text-[18px] md:text-[22px] leading-relaxed md:leading-body tracking-subheading text-ink/70 max-w-[700px]">
              StratedgeX is a data-driven performance agency specializing in Google Ads, Meta Ads, and high-converting landing pages to engineer predictable growth.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-col gap-8">
            <a 
              href="#contact" 
              className="w-full sm:w-max bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom flex items-center justify-between sm:justify-start gap-[26px] overflow-hidden group h-[59px] pr-0 transition-all duration-300 shadow-md font-bold"
            >
              <span className="pl-[26px] text-[16px] md:text-[18px] tracking-cta font-bold">Scale Your Revenue</span>
              <div className="flex items-center h-full">
                <div className="w-px h-full bg-forest opacity-20"></div>
                <div className="px-[16px]">
                  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>

            {/* Partner Tags */}
            <div className="flex flex-wrap items-center gap-10 md:gap-14 mt-4">
              {/* Google Ads */}
              <div className="flex items-center gap-3 text-ink">
                <svg viewBox="0 0 24 24" className="h-8 w-8">
                  <path fill="#FBBC05" d="M12.4,3.2L1.8,21.5c-0.6,1-0.3,2.4,0.7,3c1,0.6,2.4,0.3,3-0.7l10.6-18.3c0.6-1,0.3-2.4-0.7-3C14.4,1.9,13,2.2,12.4,3.2z"/>
                  <path fill="#4285F4" d="M18.8,14.6l-5.3-9.1l-2.6,4.5l5.3,9.1c0.6,1,2,1.3,3,0.7C20.1,19.2,20.5,17.8,18.8,14.6z"/>
                  <circle fill="#34A853" cx="4.8" cy="21.5" r="2.5" />
                </svg>
                <span className="font-bold text-[20px] md:text-[24px] tracking-tight">Google Ads</span>
              </div>
              
              {/* Meta */}
              <div className="flex items-center gap-2 text-ink">
                <svg viewBox="0 0 36 36" className="h-7 md:h-8 w-auto -ml-1">
                  <path fill="#0668E1" d="M28.5,13.7c-2.3,0-4.3,1-5.9,2.6c-1.6-1.6-3.6-2.6-5.9-2.6c-4.4,0-8.1,3.6-8.1,8s3.7,8,8.1,8c2.3,0,4.3-1,5.9-2.6
                    c1.6,1.6,3.6,2.6,5.9,2.6c4.4,0,8.1-3.6,8.1-8S32.9,13.7,28.5,13.7z M16.7,25.6c-2.1,0-3.9-1.8-3.9-3.9c0-2.1,1.8-3.9,3.9-3.9
                    c1.2,0,2.3,0.5,3,1.4C18.9,21,17.9,23.3,16.7,25.6z M28.5,25.6c-1.2,0-2.3-0.5-3-1.4c0.8-1.9,1.8-4.2,3-6.4
                    c2.1,0,3.9,1.8,3.9,3.9C32.4,23.8,30.6,25.6,28.5,25.6z"/>
                </svg>
                <span className="font-bold text-[20px] md:text-[24px] tracking-tight -ml-1">Meta</span>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-3.5 text-ink">
                <div className="w-[7px] h-[36px] bg-[#4285F4] rounded-[2px]"></div>
                <div className="flex flex-col justify-center h-full">
                  <span className="text-[12px] font-extrabold tracking-[0.05em] leading-none mb-1">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span className="font-bold text-[20px] md:text-[24px] tracking-tight leading-none text-ink/80">Partner</span>
                </div>
              </div>
            </div>
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
