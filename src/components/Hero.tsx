import React, { useRef, useEffect } from 'react';
import PlusIcon from './PlusIcon';
import AtomBulbHero from './AtomBulbHero';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set default spotlight: anchored directly behind the 3D bulb's nucleus on both desktop and mobile
    const setDefaultSpotlight = () => {
      if (!containerRef.current) return;
      const secRect = containerRef.current.getBoundingClientRect();

      let nucleusX = secRect.width * 0.72;
      let nucleusY = secRect.height * 0.48;

      if (cardRef.current) {
        const cRect = cardRef.current.getBoundingClientRect();
        // Exact center of the nucleus in the 3D bulb relative to the hero section:
        nucleusX = (cRect.left - secRect.left) + cRect.width / 2;
        nucleusY = (cRect.top - secRect.top) + cRect.height * 0.48;
      }

      containerRef.current.style.setProperty('--mouse-x', `${nucleusX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${nucleusY}px`);
      containerRef.current.style.setProperty('--spotlight-opacity', '0.5');
    };

    setDefaultSpotlight();
    // Re-verify after layout settling
    const timer = setTimeout(setDefaultSpotlight, 150);

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;

      // On mobile view (< 1024px) with touch, keep the glow locked to the bulb nucleus
      if (window.innerWidth < 1024 && e.pointerType === 'touch') {
        return;
      }

      const secRect = containerRef.current.getBoundingClientRect();
      let targetX = secRect.width * 0.72;
      let targetY = secRect.height * 0.48;

      if (cardRef.current) {
        const cRect = cardRef.current.getBoundingClientRect();
        targetX = (cRect.left - secRect.left) + cRect.width / 2;
        targetY = (cRect.top - secRect.top) + cRect.height * 0.48;
      }

      // Subtle, organic parallax drift (max 20px) around the bulb nucleus
      const mouseX = e.clientX - secRect.left;
      const mouseY = e.clientY - secRect.top;
      const dx = mouseX - targetX;
      const dy = mouseY - targetY;
      const dist = Math.hypot(dx, dy);
      const maxDrift = 20;
      const factor = Math.min(1, dist / 600) * maxDrift;
      const angle = Math.atan2(dy, dx);
      const offsetX = Math.cos(angle) * factor;
      const offsetY = Math.sin(angle) * factor;

      containerRef.current.style.setProperty('--mouse-x', `${targetX + offsetX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${targetY + offsetY}px`);
      containerRef.current.style.setProperty('--spotlight-opacity', '0.65');
    };

    const handlePointerEnter = () => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--spotlight-opacity', '0.65');
      }
    };

    const handlePointerLeave = () => {
      setDefaultSpotlight();
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', setDefaultSpotlight);
    window.addEventListener('orientationchange', setDefaultSpotlight);

    return () => {
      clearTimeout(timer);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', setDefaultSpotlight);
      window.removeEventListener('orientationchange', setDefaultSpotlight);
    };
  }, []);

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
    <section 
      ref={containerRef} 
      className="max-w-[1820px] mx-auto px-6 md:px-20 py-20 lg:py-32 min-h-[600px] flex items-center relative isolate overflow-hidden border-b border-border-muted bg-bg-cream select-none transition-colors duration-300"
      style={{
        ['--mouse-x' as string]: '72%',
        ['--mouse-y' as string]: '48%',
        ['--spotlight-opacity' as string]: '0.5',
      }}
    >
      {/* Top Right Plus for Section */}
      <div className="absolute top-[8px] right-[8px] z-20">
        <PlusIcon />
      </div>

      {/* Modern Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8D3C7_1.2px,transparent_1.2px)] [background-size:40px_40px] opacity-40 pointer-events-none z-0" />

      {/* ================= ONE UNIFIED HERO GLOW SECTION (CONNECTING TEXT & BULB) ================= */}
      {/* 1. Seamless Full-Width Ambient Glow Field (Gentle, elegant base wash) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 1500px 750px at var(--mouse-x, 50%) var(--mouse-y, 48%), rgba(254, 189, 89, 0.22) 0%, rgba(201, 120, 46, 0.09) 45%, rgba(30, 58, 46, 0.01) 75%, transparent 100%)`,
        }}
      />

      {/* 2. Unified Interactive Radial Spotlight across the Entire Section */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out z-0 overflow-hidden"
        style={{
          opacity: 'var(--spotlight-opacity, 0.45)',
          background: `radial-gradient(850px circle at var(--mouse-x, 50%) var(--mouse-y, 45%), rgba(254, 189, 89, 0.28) 0%, rgba(201, 120, 46, 0.12) 45%, rgba(30, 58, 46, 0.02) 70%, transparent 100%)`,
        }}
      />

      {/* 3. Unified Incandescent Filament Aura that glides across Text & Bulb */}
      <div 
        className="pointer-events-none absolute w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ease-out z-0 flex items-center justify-center"
        style={{
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 45%)',
          opacity: 'var(--spotlight-opacity, 0.45)',
        }}
      >
        {/* Soft Radial Glow Body */}
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(255,245,210,0.8)_0%,rgba(254,189,89,0.42)_35%,rgba(201,120,46,0.15)_60%,transparent_80%)] blur-[55px]" />
        
        {/* Intense Filament Light Center */}
        <div className="absolute w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#FEBD59_65%,transparent_100%)] blur-[14px] shadow-[0_0_60px_20px_rgba(254,189,89,0.65)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,540px] xl:grid-cols-[1.12fr,580px] gap-14 lg:gap-8 xl:gap-12 w-full items-center relative z-10">
        
        {/* Left Content Block */}
        <div 
          ref={textBlockRef} 
          className="flex flex-col gap-[40px] md:gap-[50px] max-w-[920px] relative"
        >
          <div className="flex flex-col gap-6 relative">
            <div className="flex items-center gap-3.5">
              <span className="w-14 h-1.5 bg-brand-amber rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-rust">Performance Engine</span>
            </div>
            <h1 ref={headlineRef} className="text-[46px] sm:text-[62px] md:text-[80px] lg:text-[86px] xl:text-[94px] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
              Escape Invisibility,{' '}
              <span className="relative inline-block text-forest mt-1">
                Embrace Impact
                <span className="absolute bottom-2 left-0 w-full h-3.5 sm:h-4 md:h-5 bg-brand-amber/70 -z-10 rounded-sm shadow-[0_0_20px_rgba(254,189,89,0.55)]"></span>
              </span>
            </h1>
            <p ref={subtextRef} className="text-[20px] sm:text-[23px] md:text-[26px] lg:text-[28px] leading-relaxed md:leading-[1.42] tracking-subheading text-ink/75 max-w-[760px]">
              <strong className="font-bold text-ink">StratedgeX</strong> is a data-driven performance agency specializing in Google Ads, Meta Ads, and high-converting landing pages to engineer predictable growth.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-col gap-8">
            <a 
              href="#contact" 
              className="w-full sm:w-max bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom flex items-center justify-between sm:justify-start gap-[28px] overflow-hidden group h-[64px] pr-0 transition-all duration-300 shadow-md font-bold"
            >
              <span className="pl-[28px] text-[18px] md:text-[20px] tracking-cta font-bold">Scale Your Revenue</span>
              <div className="flex items-center h-full">
                <div className="w-px h-full bg-forest opacity-20"></div>
                <div className="px-[18px]">
                  <span className="material-symbols-outlined text-[26px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
                <span className="font-bold text-[20px] md:text-[25px] tracking-tight">Google Ads</span>
              </div>
              
              {/* Meta */}
              <div className="flex items-center gap-2 text-ink">
                <svg viewBox="0 0 36 36" className="h-7 md:h-8 w-auto -ml-1">
                  <path fill="#0668E1" d="M28.5,13.7c-2.3,0-4.3,1-5.9,2.6c-1.6-1.6-3.6-2.6-5.9-2.6c-4.4,0-8.1,3.6-8.1,8s3.7,8,8.1,8c2.3,0,4.3-1,5.9-2.6
                    c1.6,1.6,3.6,2.6,5.9,2.6c4.4,0,8.1-3.6,8.1-8S32.9,13.7,28.5,13.7z M16.7,25.6c-2.1,0-3.9-1.8-3.9-3.9c0-2.1,1.8-3.9,3.9-3.9
                    c1.2,0,2.3,0.5,3,1.4C18.9,21,17.9,23.3,16.7,25.6z M28.5,25.6c-1.2,0-2.3-0.5-3-1.4c0.8-1.9,1.8-4.2,3-6.4
                    c2.1,0,3.9,1.8,3.9,3.9C32.4,23.8,30.6,25.6,28.5,25.6z"/>
                </svg>
                <span className="font-bold text-[20px] md:text-[25px] tracking-tight -ml-1">Meta</span>
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
                  <span className="font-bold text-[20px] md:text-[25px] tracking-tight leading-none text-ink/80">Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="relative flex flex-col justify-end items-center h-full mt-8 lg:mt-0">
          {/* Decorative Card with Bulb */}
          <div 
            ref={cardRef} 
            className="relative w-full max-w-[580px] rounded-custom overflow-visible group/bulb-card"
          >
            {/* Top Left Plus on Card */}
            <div className="absolute -top-[8px] -left-[8px] z-20">
              <PlusIcon />
            </div>

            {/* Bulb Canvas Container */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <AtomBulbHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
