import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Strategy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(leftColRef.current?.children || [],
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    gsap.fromTo(rightColRef.current,
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="strategy" className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 border-b border-border-muted relative bg-bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left Column */}
        <div ref={leftColRef} className="flex flex-col gap-10">
          <div className="flex items-center gap-4 text-rust">
            <span className="w-12 h-px bg-rust"></span>
            <span className="uppercase font-semibold tracking-widest text-sm">Our Strategy</span>
          </div>
          <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
            Architectural Precision in Marketing.
          </h2>
          <p className="text-[20px] leading-body text-ink/70 max-w-xl">
            We don't believe in "campaigns." We believe in systems. Every StratedgeX engagement starts with a structural audit of your market position, followed by the engineering of a data-driven growth blueprint.
          </p>
          
          {/* Plus marker at a specific intersection */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 w-full h-px bg-border-muted"></div>
            <div className="absolute top-[-8px] left-[-8px]">
              <PlusIcon />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-ink uppercase tracking-tight">01. Structural Audit</h4>
                <p className="text-ink/70">A deep-dive analysis of your current marketing infrastructure and competitive friction points.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-ink uppercase tracking-tight">02. Growth Blueprint</h4>
                <p className="text-ink/70">Designing a scalable acquisition engine that prioritizes unit economics and long-term LTV.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightColRef} className="relative">
          <div className="aspect-square bg-white border border-border-muted rounded-custom p-4 relative shadow-sm">
            <img 
              src="https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?w=1000&h=1000&fit=crop" 
              alt="Strategy Blueprint" 
              className="w-full h-full object-cover rounded-custom opacity-85"
            />
            {/* Floating Plus Icons */}
            <div className="absolute -top-[8px] -right-[8px]"><PlusIcon /></div>
            <div className="absolute -bottom-[8px] -left-[8px]"><PlusIcon /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
