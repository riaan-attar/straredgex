import React, { useRef, useEffect } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial spotlight coordinates to center
    const setCenterSpotlight = () => {
      const rect = container.getBoundingClientRect();
      container.style.setProperty('--mouse-x', `${rect.width / 2}px`);
      container.style.setProperty('--mouse-y', `${rect.height / 2}px`);
      container.style.setProperty('--spotlight-opacity', '0.35');
    };

    setCenterSpotlight();

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
      container.style.setProperty('--spotlight-opacity', '1');
    };

    const handlePointerEnter = () => {
      container.style.setProperty('--spotlight-opacity', '1');
    };

    const handlePointerLeave = () => {
      container.style.setProperty('--spotlight-opacity', '0.25');
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
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
    
    tl.fromTo(contentRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(leftCardRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.6'
    )
    .fromTo(rightCardRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.7'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="max-w-[1820px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-24 lg:pt-24 lg:pb-36 min-h-[920px] flex items-center justify-center relative overflow-hidden border-b border-border-muted bg-bg-cream select-none transition-colors duration-300"
      style={{
        ['--mouse-x' as string]: '50%',
        ['--mouse-y' as string]: '50%',
        ['--spotlight-opacity' as string]: '0.35',
      }}
    >
      {/* Anchor for Swarm Cursor */}
      <div id="bulb-anchor" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0" />

      {/* Decorative Grid Corner Plus Icons */}
      <div className="absolute top-[8px] right-[8px] z-30"><PlusIcon /></div>
      <div className="absolute top-[8px] left-[8px] z-30"><PlusIcon /></div>
      <div className="absolute bottom-[8px] right-[8px] z-30"><PlusIcon /></div>
      <div className="absolute bottom-[8px] left-[8px] z-30"><PlusIcon /></div>

      {/* Modern Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8D3C7_1.2px,transparent_1.2px)] [background-size:40px_40px] opacity-45 pointer-events-none -z-10" />

      {/* ================= BACKGROUND BULB & SPOTLIGHT GLOW ================= */}
      {/* 1. Large Ambient Radial Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out z-0"
        style={{
          opacity: 'var(--spotlight-opacity, 0.35)',
          background: `radial-gradient(750px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(254, 189, 89, 0.38) 0%, rgba(201, 120, 46, 0.16) 45%, rgba(30, 58, 46, 0.03) 70%, transparent 100%)`,
        }}
      />

      {/* 2. Concentrated Incandescent Bulb Aura Behind Text */}
      <div 
        className="pointer-events-none absolute w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ease-out z-0 flex items-center justify-center"
        style={{
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          opacity: 'var(--spotlight-opacity, 0.35)',
        }}
      >
        {/* Soft Radial Glow Body */}
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(255,245,210,0.9)_0%,rgba(254,189,89,0.55)_35%,rgba(201,120,46,0.2)_60%,transparent_80%)] blur-[45px]" />
        
        {/* Intense Filament Light Center */}
        <div className="absolute w-[110px] h-[110px] rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#FEBD59_65%,transparent_100%)] blur-[14px] shadow-[0_0_70px_25px_rgba(254,189,89,0.85)]" />
      </div>

      {/* ================= HERO CONTENT WRAPPER ================= */}
      <div className="relative w-full max-w-[1500px] mx-auto flex flex-col items-center justify-center text-center z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-3 bg-white/85 backdrop-blur-md px-5 py-2 rounded-full border border-border-muted/80 shadow-sm mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-rust animate-pulse"></span>
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-forest">Performance Engine // 2026</span>
          <span className="text-xs text-ink/40 font-mono">v3.2</span>
        </div>

        {/* Center Main Headline & Subtitle */}
        <div ref={contentRef} className="relative w-full flex flex-col items-center justify-center max-w-5xl mx-auto">
          {/* Headline */}
          <h1 className="text-[48px] sm:text-[68px] md:text-[88px] lg:text-[104px] xl:text-[116px] font-bold leading-[0.98] md:leading-[1.0] tracking-[-0.04em] text-ink mb-8">
            Scaling Revenue with <br className="hidden sm:block" />
            <span className="relative inline-block text-forest mt-2">
              Precision Performance
              <span className="absolute bottom-2 left-0 w-full h-4 sm:h-5 bg-brand-amber/70 -z-10 rounded-sm shadow-[0_0_20px_rgba(254,189,89,0.5)]"></span>
            </span> Marketing.
          </h1>

          {/* Subtext */}
          <p className="text-[19px] sm:text-[22px] md:text-[26px] leading-relaxed md:leading-[36px] tracking-subheading text-ink/75 max-w-[880px] mb-4">
            StratedgeX is a data-driven performance agency specializing in Google Ads, Meta Ads, and high-converting landing pages to engineer predictable, profitable growth.
          </p>
        </div>

        {/* ================= FLOATING PERFORMANCE CARDS & IMAGERY ================= */}
        {/* Left Floating Card: Live Campaign ROAS */}
        <div 
          ref={leftCardRef}
          className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-3 p-5 bg-white/90 backdrop-blur-xl border border-border-muted rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-[280px] text-left hover:-translate-y-[52%] transition-transform duration-300 z-20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rust flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rust"></span> Live ROAS Metric
            </span>
            <span className="text-[11px] font-mono text-sage font-bold bg-sage/10 px-2 py-0.5 rounded-full">+420%</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-forest">4.85x</span>
            <span className="text-xs text-ink/60 font-medium">Avg. Multiplier</span>
          </div>

          {/* Mini Sparkline Chart */}
          <div className="h-12 w-full bg-border-muted/20 rounded-lg p-1.5 flex items-end justify-between gap-1 overflow-hidden">
            {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((val, idx) => (
              <div 
                key={idx} 
                className="w-full bg-brand-amber rounded-t-sm group-hover:bg-rust transition-colors" 
                style={{ height: `${val}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] text-ink/60 border-t border-border-muted/50 pt-2 font-medium">
            <span>Google & Meta Ads</span>
            <span className="text-forest font-bold">Verified</span>
          </div>
        </div>

        {/* Right Floating Card: Generated Revenue & Client Results */}
        <div 
          ref={rightCardRef}
          className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-3 p-5 bg-white/90 backdrop-blur-xl border border-border-muted rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-[290px] text-left hover:-translate-y-[52%] transition-transform duration-300 z-20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-forest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-forest"></span> Scaled Revenue
            </span>
            <span className="text-[11px] font-mono text-rust font-bold bg-rust/10 px-2 py-0.5 rounded-full">↑ +184% MoM</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-ink">+$4.85M</span>
            <span className="text-xs text-ink/60 font-medium">Client Output</span>
          </div>

          {/* Image Thumbnail Preview */}
          <div className="relative rounded-lg overflow-hidden h-20 w-full border border-border-muted/60">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3N8ZW58MHx8fHwxNzc0MjQyNzYyfDA&ixlib=rb-4.1.0&w=600&h=300&fit=crop&fm=jpg&q=80" 
              alt="Analytics Growth" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent flex items-end p-2">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Algorithmic Funnels</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-ink/60 border-t border-border-muted/50 pt-2 font-medium">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <span className="text-[10px] text-ink/70">Trusted by 40+ Brands</span>
          </div>
        </div>

        {/* ================= INTERACTIVE CTA & PARTNER TAGS ================= */}
        <div ref={ctaRef} className="flex flex-col gap-10 items-center mt-6 w-full relative z-30">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-max bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-rust/40 rounded-custom flex items-center justify-between sm:justify-start gap-[26px] overflow-hidden group/btn h-[62px] pr-0 transition-all duration-300 shadow-[0_10px_35px_rgba(254,189,89,0.4)] hover:shadow-[0_14px_45px_rgba(30,58,46,0.45)] font-bold relative cursor-pointer"
            >
              <span className="pl-[28px] text-[17px] md:text-[19px] tracking-cta font-bold">Scale Your Revenue</span>
              <div className="flex items-center h-full">
                <div className="w-px h-full bg-forest opacity-20 group-hover/btn:bg-brand-amber group-hover/btn:opacity-20"></div>
                <div className="px-[18px]">
                  <span className="material-symbols-outlined text-[26px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>

            <a 
              href="#strategy" 
              className="w-full sm:w-max bg-white/80 hover:bg-white text-ink border border-border-muted rounded-custom flex items-center justify-center gap-2 h-[62px] px-8 transition-all duration-300 font-bold shadow-sm hover:shadow-md"
            >
              <span>Explore Strategy</span>
              <span className="material-symbols-outlined text-[20px] text-rust">tune</span>
            </a>
          </div>

          {/* Partner Badges (Centered) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 bg-white/85 backdrop-blur-xl px-10 py-5 rounded-2xl border border-border-muted/80 shadow-xl relative">
            {/* Google Ads */}
            <div className="flex items-center gap-3 text-ink">
              <svg viewBox="0 0 24 24" className="h-8 w-8 drop-shadow-sm">
                <path fill="#FBBC05" d="M12.4,3.2L1.8,21.5c-0.6,1-0.3,2.4,0.7,3c1,0.6,2.4,0.3,3-0.7l10.6-18.3c0.6-1,0.3-2.4-0.7-3C14.4,1.9,13,2.2,12.4,3.2z"/>
                <path fill="#4285F4" d="M18.8,14.6l-5.3-9.1l-2.6,4.5l5.3,9.1c0.6,1,2,1.3,3,0.7C20.1,19.2,20.5,17.8,18.8,14.6z"/>
                <circle fill="#34A853" cx="4.8" cy="21.5" r="2.5" />
              </svg>
              <span className="font-bold text-[18px] md:text-[22px] tracking-tight">Google Ads</span>
            </div>
            
            {/* Meta */}
            <div className="flex items-center gap-2 text-ink">
              <svg viewBox="0 0 36 36" className="h-7 md:h-8 w-auto -ml-1 drop-shadow-sm">
                <path fill="#0668E1" d="M28.5,13.7c-2.3,0-4.3,1-5.9,2.6c-1.6-1.6-3.6-2.6-5.9-2.6c-4.4,0-8.1,3.6-8.1,8s3.7,8,8.1,8c2.3,0,4.3-1,5.9-2.6
                  c1.6,1.6,3.6,2.6,5.9,2.6c4.4,0,8.1-3.6,8.1-8S32.9,13.7,28.5,13.7z M16.7,25.6c-2.1,0-3.9-1.8-3.9-3.9c0-2.1,1.8-3.9,3.9-3.9
                  c1.2,0,2.3,0.5,3,1.4C18.9,21,17.9,23.3,16.7,25.6z M28.5,25.6c-1.2,0-2.3-0.5-3-1.4c0.8-1.9,1.8-4.2,3-6.4
                  c2.1,0,3.9,1.8,3.9,3.9C32.4,23.8,30.6,25.6,28.5,25.6z"/>
              </svg>
              <span className="font-bold text-[18px] md:text-[22px] tracking-tight -ml-1">Meta</span>
            </div>

            {/* Google Partner */}
            <div className="flex items-center gap-3.5 text-ink">
              <div className="w-[7px] h-[34px] bg-[#4285F4] rounded-[2px] shadow-sm"></div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-[11px] font-extrabold tracking-[0.05em] leading-none mb-1">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="font-bold text-[18px] md:text-[22px] tracking-tight leading-none text-ink/80">Partner</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



