import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      }
    });

    tl.fromTo(contentRef.current?.children || [],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="max-w-[1820px] mx-auto px-6 md:px-20 pt-24 lg:pt-40 pb-12 lg:pb-16 relative overflow-visible">
      <div className="bg-forest rounded-custom p-10 md:p-24 flex flex-col items-center text-center gap-12 relative overflow-hidden shadow-2xl">
        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full border-[20px] border-brand-amber rounded-custom scale-110 rotate-3"></div>
        </div>

        <div ref={contentRef} className="flex flex-col gap-6 max-w-4xl relative z-10">
          <h2 className="text-[38px] md:text-[68px] font-medium leading-heading tracking-heading text-bg-cream">
            Ready to Build a High-Converting Growth Engine?
          </h2>
          <p className="text-[20px] md:text-[24px] text-bg-cream/80 max-w-2xl mx-auto">
            Partner with StratedgeX to scale your paid acquisition and dominate your market.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-10">
          <a 
            href="mailto:partners@stratedgex.io" 
            className="bg-brand-amber text-forest px-10 h-16 rounded-custom flex items-center justify-center text-xl font-bold tracking-cta hover:bg-white transition-all duration-300 shadow-lg"
          >
            Inquire for Partnership
          </a>
          <a 
            href="#strategy" 
            className="bg-transparent border border-brand-amber text-bg-cream px-10 h-16 rounded-custom flex items-center justify-center text-xl font-bold tracking-cta hover:bg-brand-amber hover:text-forest transition-all duration-300"
          >
            View Methodology
          </a>
        </div>

        {/* Corner Pluses */}
        <div className="absolute top-[16px] left-[16px]"><PlusIcon /></div>
        <div className="absolute top-[16px] right-[16px]"><PlusIcon /></div>
        <div className="absolute bottom-[16px] left-[16px]"><PlusIcon /></div>
        <div className="absolute bottom-[16px] right-[16px]"><PlusIcon /></div>
      </div>
    </section>
  );
};

export default CTASection;
