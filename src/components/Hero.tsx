import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
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
    <section ref={containerRef} className="max-w-[1820px] mx-auto px-6 md:px-20 py-20 lg:py-32 min-h-[600px] flex items-center relative overflow-visible border-b border-border-primary">
      {/* Top Right Plus for Section */}
      <div className="absolute top-[8px] right-[8px]">
        <PlusIcon />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,503px] gap-16 lg:gap-10 w-full items-center">
        
        {/* Left Content Block */}
        <div className="flex flex-col gap-[40px] md:gap-[50px] max-w-[857px]">
          <div className="flex flex-col gap-5">
            <h1 ref={headlineRef} className="text-[42px] sm:text-[54px] md:text-[74px] font-medium leading-[1.1] md:leading-heading tracking-[-1.5px] md:tracking-heading text-text-primary">
              Redefining Efficiency for Global Leaders.
            </h1>
            <p ref={subtextRef} className="text-[18px] md:text-[22px] leading-relaxed md:leading-body tracking-subheading text-text-secondary max-w-[700px]">
              Servexa provides high-tier marketing support, managing your complex strategy and digital ecosystems so your core team can focus on innovation.
            </p>
          </div>

          <div ref={ctaRef} className="flex">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-brand-primary text-brand-accent hover:bg-brand-accent hover:text-brand-primary border border-brand-primary/10 rounded-custom flex items-center justify-between sm:justify-start gap-[26px] overflow-hidden group h-[59px] pr-0 transition-all duration-300 shadow-md"
            >
              <span className="pl-[26px] text-[16px] md:text-[18px] tracking-cta font-medium">Elevate Your Strategy</span>
              <div className="flex items-center h-full">
                <div className="w-px h-full bg-current opacity-20"></div>
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

            {/* Main Card Content */}
            <div className="bg-brand-accent p-6 md:p-[30px] flex flex-col gap-16 md:gap-[100px] rounded-custom shadow-2xl">
              <div className="flex flex-col gap-[30px]">
                {/* Overlapping Portraits */}
                <div className="flex relative h-[50px] md:h-[70px] w-full">
                  <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border-2 border-brand-accent overflow-hidden z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1692105944201-e893a1ac8044?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8Mnx8fDE3NzM4MDg4MTB8MA&ixlib=rb-4.1.0&w=140&h=140&fit=crop&fm=jpg&q=80" 
                      alt="Executive Support Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border-2 border-brand-accent overflow-hidden -ml-[15px] md:-ml-[20px] z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxNYXJrZXRpbmclMjBzdHJhdGVnaXN0JTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc3MzgwODgxMHww&ixlib=rb-4.1.0&w=140&h=140&fit=crop&fm=jpg&q=80" 
                      alt="Operations Manager" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border-2 border-brand-accent overflow-hidden -ml-[15px] md:-ml-[20px] z-20">
                    <img 
                      src="https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxDcmVhdGl2ZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MHwyfHx8MTc3MzgwODgxMHww&ixlib=rb-4.1.0&w=140&h=140&fit=crop&fm=jpg&q=80" 
                      alt="Technical Lead" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border-2 border-brand-accent overflow-hidden -ml-[15px] md:-ml-[20px] z-30">
                    <img 
                      src="https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg?w=140&h=140&fit=crop" 
                      alt="Customer Success" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[22px] md:text-[26px] font-medium leading-tight md:leading-card tracking-card-text text-brand-primary">
                  "Efficiency is our obsession. We help the world's most ambitious firms reclaim 40% of their strategic bandwidth."
                </p>
              </div>

              {/* Footer Link */}
              <div className="flex">
                <a href="#strategy" className="flex items-center gap-[10px] group">
                  <span className="text-[20px] font-medium leading-[26px] tracking-[-0.8px] text-brand-primary group-hover:text-text-primary transition-colors">Explore Our Methodology</span>
                  <span className="material-symbols-outlined text-brand-primary text-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-text-primary transition-all">north_east</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
