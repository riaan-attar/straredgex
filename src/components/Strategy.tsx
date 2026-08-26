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

    // Flowchart line animation
    gsap.to('.flowchart-line', {
      scaleX: 1,
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.flowchart-nodes',
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      }
    });

    // Flowchart nodes stagger animation
    gsap.to('.flowchart-node', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.flowchart-nodes',
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="strategy" className="max-w-[1820px] mx-auto px-6 md:px-20 pt-24 pb-4 lg:pt-32 lg:pb-6 border-b border-border-muted relative bg-bg-cream">
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
                <h4 className="text-xl font-bold text-ink uppercase tracking-tight">01. Audit & Architecture</h4>
                <p className="text-ink/70">Analyzing current ad accounts and identifying landing page friction to build a scalable foundation.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-ink uppercase tracking-tight">02. Infrastructure Build</h4>
                <p className="text-ink/70">Developing custom, high-speed landing pages and structuring aggressive ad campaigns on Google and Meta.</p>
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

      {/* The StratedgeX Flowchart */}
      <div className="mt-32 lg:mt-48 relative border-t border-border-muted/50 pt-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-rust mb-4">
            <span className="w-8 h-px bg-rust"></span>
            <span className="uppercase font-semibold tracking-widest text-xs">The Blueprint</span>
            <span className="w-8 h-px bg-rust"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-medium text-ink tracking-tight">Our Growth Architecture</h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-border-muted -z-10">
            {/* Animated Fill - handled by CSS/GSAP class if needed, or just let the dots pop */}
            <div className="h-full bg-rust w-full origin-left scale-x-0 transition-transform duration-1000 ease-out flowchart-line"></div>
          </div>
          
          {/* Connecting Line Background (Mobile) */}
          <div className="block lg:hidden absolute top-[10%] bottom-[10%] left-[50%] w-[2px] -translate-x-1/2 bg-border-muted -z-10"></div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-4 relative z-10 flowchart-nodes">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Deep dive into current ad accounts to identify friction and wasted spend.', icon: 'troubleshoot' },
              { step: '02', title: 'Strategic Blueprint', desc: 'Engineering a data-driven growth plan tailored to your unit economics.', icon: 'architecture' },
              { step: '03', title: 'Infrastructure Build', desc: 'Developing custom, high-speed landing pages and ad creatives.', icon: 'handyman' },
              { step: '04', title: 'Aggressive Scaling', desc: 'Launching campaigns with algorithmic precision to scale profitably.', icon: 'rocket_launch' }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full lg:w-1/4 flowchart-node opacity-0 translate-y-8">
                <div className="w-[120px] h-[120px] bg-white border border-border-muted rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 text-forest mb-8 group hover:border-rust hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-[48px] group-hover:text-rust transition-colors">{node.icon}</span>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-amber rounded-full flex items-center justify-center text-forest font-bold text-[15px] shadow-sm border-2 border-white">{node.step}</div>
                </div>
                <h4 className="text-[22px] font-bold text-ink mb-3 tracking-tight">{node.title}</h4>
                <p className="text-ink/60 text-[15px] leading-relaxed max-w-[240px] mx-auto">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
