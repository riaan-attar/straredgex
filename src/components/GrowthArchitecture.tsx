import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export const GrowthArchitecture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      '.arch-header-item',
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        },
      }
    );

    // Cards Stagger
    gsap.fromTo(
      '.arch-step-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pipelineRef.current,
          start: 'top 85%',
          toggleActions: 'restart reverse restart reverse',
        },
      }
    );

    // Outcomes Panel
    gsap.fromTo(
      outcomesRef.current,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: outcomesRef.current,
          start: 'top 90%',
          toggleActions: 'restart reverse restart reverse',
        },
      }
    );
  }, { scope: containerRef });

  const businessInputs = [
    {
      name: 'Website',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="6" cy="7" r="1" fill="currentColor" />
          <circle cx="9" cy="7" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Ad Accounts',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Analytics',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      name: 'Market Data',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
  ];

  const pipelineSteps = [
    {
      number: '01',
      title: 'Audit & Research',
      tag: 'Discovery Phase',
      deliverable: 'Funnels & Data Audit',
      desc: 'We analyze your market, audience, competitors & existing funnels to find growth opportunities.',
      isHero: false,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="21" cy="21" r="13" />
          <line x1="31" y1="31" x2="42" y2="42" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="25" x2="15" y2="21" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="21" y1="25" x2="21" y2="17" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="27" y1="25" x2="27" y2="13" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strategy & Blueprint',
      tag: 'Architecture',
      deliverable: 'Custom Growth Roadmap',
      desc: 'We craft a data-driven marketing strategy and customer journey tailored to your goals.',
      isHero: false,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="7" y="7" width="34" height="34" rx="4" strokeDasharray="3 3" />
          <path d="M15 17 L21 23 M21 17 L15 23" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M27 27 L33 33 M33 27 L27 33" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M21 20 Q27 20 28 27" strokeWidth="2" strokeDasharray="2 2" />
          <polygon points="30,25 33,30 27,29" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Infrastructure Build',
      tag: 'Core Engine',
      deliverable: 'High-Converting Assets',
      desc: 'We build high-speed landing pages, configure tracking systems & set up conversion-focused campaigns.',
      isHero: true,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="5" y="8" width="38" height="32" rx="4" />
          <line x1="5" y1="16" x2="43" y2="16" />
          <circle cx="10" cy="12" r="1.5" fill="currentColor" />
          <circle cx="15" cy="12" r="1.5" fill="currentColor" />
          <rect x="10" y="21" width="13" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
          <line x1="27" y1="22" x2="38" y2="22" strokeWidth="2" />
          <line x1="27" y1="27" x2="35" y2="27" strokeWidth="1.5" />
          <rect x="27" y="31" width="10" height="4" rx="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Traffic Acquisition',
      tag: 'Scale Engine',
      deliverable: 'Targeted Paid Traffic',
      desc: 'We launch and scale high-performing campaigns on Google, Meta & other channels to drive quality traffic.',
      isHero: false,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="24" cy="17" r="6" />
          <path d="M12 36 C12 29 17 26 24 26 C31 26 36 29 36 36" strokeLinecap="round" />
          <circle cx="11" cy="20" r="3.5" opacity="0.7" />
          <path d="M5 33 C5 29 8 27 12 27" strokeLinecap="round" opacity="0.7" />
          <circle cx="37" cy="20" r="3.5" opacity="0.7" />
          <path d="M43 33 C43 29 40 27 36 27" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Optimize & Scale',
      tag: 'Compounding',
      deliverable: 'ROAS Maximization',
      desc: 'We continuously analyze, optimize and scale what works to maximize ROAS & grow your business.',
      isHero: false,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <line x1="8" y1="40" x2="42" y2="40" strokeLinecap="round" />
          <rect x="11" y="27" width="5" height="13" rx="1" fill="currentColor" fillOpacity="0.3" />
          <rect x="21" y="20" width="5" height="20" rx="1" fill="currentColor" fillOpacity="0.5" />
          <rect x="31" y="12" width="5" height="28" rx="1" fill="currentColor" />
          <path d="M10 24 L21 16 L31 9 L40 5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 5 H40 V12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const outcomes = [
    {
      title: 'More Qualified Leads',
      image: '/images/outcomes/leads.jpg',
    },
    {
      title: 'Higher Conversions',
      image: '/images/outcomes/conversions.jpg',
    },
    {
      title: 'Lower Cost Per Acquisition',
      image: '/images/outcomes/cpa.jpg',
    },
    {
      title: 'Scalable & Sustainable Growth',
      image: '/images/outcomes/growth.jpg',
    },
    {
      title: 'Measurable ROI',
      image: '/images/outcomes/roi.jpg',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="mt-16 lg:mt-24 relative bg-white border border-border-muted rounded-[24px] lg:rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden"
    >
      {/* Architectural Corner Plus Markers */}
      <div className="absolute top-[12px] left-[12px] pointer-events-none">
        <PlusIcon />
      </div>
      <div className="absolute top-[12px] right-[12px] pointer-events-none">
        <PlusIcon />
      </div>
      <div className="absolute bottom-[12px] left-[12px] pointer-events-none">
        <PlusIcon />
      </div>
      <div className="absolute bottom-[12px] right-[12px] pointer-events-none">
        <PlusIcon />
      </div>

      {/* Architectural Dot Grid Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8D3C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>

      {/* Top Header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-12 lg:mb-16">
        <div className="arch-header-item inline-flex items-center gap-3 text-rust mb-4">
          <span className="w-10 sm:w-14 h-px bg-rust"></span>
          <span className="uppercase font-bold tracking-[0.22em] text-xs">
            The Blueprint • Our Strategy
          </span>
          <span className="w-10 sm:w-14 h-px bg-rust"></span>
        </div>

        <h3 className="arch-header-item text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-ink uppercase leading-[1.08] max-w-5xl">
          Engineered for <span className="text-rust font-semibold">Growth</span>. Built for{' '}
          <span className="text-forest font-semibold underline decoration-brand-amber decoration-4 underline-offset-4">
            Results
          </span>
          .
        </h3>

        <p className="arch-header-item text-base sm:text-lg text-ink/70 max-w-2xl mt-4 font-normal leading-relaxed">
          A systematic approach that turns data into a{' '}
          <span className="text-rust font-medium">predictable growth engine</span>.
        </p>

        {/* Decorative Divider */}
        <div className="arch-header-item flex items-center justify-center gap-2 mt-6">
          <span className="w-12 h-px bg-border-muted"></span>
          <span className="w-2 h-2 rounded-full bg-rust"></span>
          <span className="w-12 h-px bg-border-muted"></span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP ARCHITECTURE VIEW (Laptops & Desktops: 1024px+)       */}
      {/* ============================================================ */}
      <div ref={pipelineRef} className="hidden lg:flex items-stretch justify-between gap-1.5 xl:gap-2 relative z-10 w-full mb-12">
        {/* Left: YOUR BUSINESS Input Stack */}
        <div className="flex flex-col items-center justify-between p-4 rounded-2xl bg-[#F7F4EE]/90 border border-border-muted min-w-[115px] xl:min-w-[140px] shrink-0 text-center shadow-sm hover:border-rust/40 transition-colors">
          <div className="flex flex-col items-center w-full">
            <span className="text-[11px] xl:text-xs font-black tracking-[0.18em] text-ink uppercase leading-tight mb-3">
              Your<br />Business
            </span>
            <div className="flex flex-col gap-2 w-full">
              {businessInputs.map((src) => (
                <div
                  key={src.name}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-border-muted/80 text-[10px] xl:text-[11px] text-ink/80 font-medium shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-rust/50 hover:text-rust transition-colors"
                >
                  <span className="text-rust shrink-0">{src.icon}</span>
                  <span className="truncate">{src.name}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[9.5px] text-ink/40 uppercase tracking-widest mt-3 font-bold">
            Raw Inputs
          </span>
        </div>

        {/* Directional Connector Arrow */}
        <div className="flex items-center justify-center px-1 text-rust shrink-0 self-center">
          <svg className="w-6 xl:w-8 h-4" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#C9782E" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="22,3 30,8 22,13" fill="#C9782E" />
          </svg>
        </div>

        {/* 5 Connected Process Cards */}
        <div className="flex-1 flex items-stretch relative gap-1.5 xl:gap-2">
          {pipelineSteps.map((step, idx) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div
                className={`arch-step-card relative flex-1 flex flex-col items-center text-center p-4 xl:p-5 transition-all duration-300 rounded-2xl group ${
                  step.isHero
                    ? 'bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF6EE] border-2 border-rust shadow-[0_12px_32px_rgba(201,120,46,0.14)] z-20 scale-[1.03]'
                    : 'bg-white border border-border-muted hover:border-rust/40 hover:shadow-md hover:-translate-y-1 z-10'
                }`}
              >
                {/* Floating Badge for Hero */}
                {step.isHero && (
                  <span className="absolute -top-3 px-2.5 py-0.5 bg-rust text-white text-[9.5px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    Core Engine
                  </span>
                )}

                {/* Top Number & Tag */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      step.isHero ? 'bg-rust text-white' : 'bg-rust/10 text-rust'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[9.5px] uppercase font-bold tracking-wider text-ink/40">
                    {step.tag}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xs xl:text-[13px] font-bold uppercase tracking-tight text-ink min-h-[32px] flex items-center justify-center leading-tight">
                  {step.title}
                </h4>

                {/* Icon */}
                <div
                  className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center my-3 transition-all duration-300 ${
                    step.isHero
                      ? 'bg-rust/10 text-rust group-hover:scale-110'
                      : 'bg-[#F7F4EE] text-rust group-hover:bg-rust/10 group-hover:scale-105'
                  }`}
                >
                  {step.icon}
                </div>

                {/* Separator */}
                <div className="w-8 h-px bg-border-muted my-2"></div>

                {/* Description */}
                <p className="text-[10.5px] xl:text-[11.5px] text-ink/70 leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Deliverable Badge */}
                <span
                  className={`mt-auto pt-2.5 text-[9px] xl:text-[10px] font-bold tracking-wider uppercase w-full border-t text-center ${
                    step.isHero
                      ? 'border-rust/20 text-rust'
                      : 'border-border-muted/60 text-forest/70 group-hover:text-rust'
                  }`}
                >
                  {step.deliverable}
                </span>
              </div>

              {/* Chevron Connector Badge */}
              {idx < pipelineSteps.length - 1 && (
                <div className="relative z-30 -mx-3 flex items-center justify-center self-center shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white border border-border-muted text-rust flex items-center justify-center font-bold text-xs shadow-sm select-none hover:bg-rust hover:text-white transition-colors">
                    ›
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Directional Connector Arrow */}
        <div className="flex items-center justify-center px-1 text-rust shrink-0 self-center">
          <svg className="w-6 xl:w-8 h-4" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#C9782E" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="22,3 30,8 22,13" fill="#C9782E" />
          </svg>
        </div>

        {/* Right: PREDICTABLE GROWTH Destination */}
        <div className="flex flex-col items-center justify-between p-4 rounded-2xl bg-[#F7F4EE]/90 border border-rust/40 min-w-[115px] xl:min-w-[140px] shrink-0 text-center shadow-sm hover:border-rust transition-colors group">
          <div className="flex flex-col items-center w-full">
            <span className="text-[11px] xl:text-xs font-black tracking-[0.18em] text-rust uppercase leading-tight mb-2">
              Predictable<br />Growth
            </span>
            <div className="relative mt-2 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-14 h-14 xl:w-16 xl:h-16 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#D8D3C7" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="32" cy="32" r="21" stroke="#1E3A2E" strokeWidth="2" opacity="0.3" />
                <circle cx="32" cy="32" r="14" stroke="#C9782E" strokeWidth="2.5" />
                <circle cx="32" cy="32" r="5" fill="#C9782E" />
                <path
                  d="M50 14 L35 29 M50 14 L45 22 M50 14 L42 19"
                  stroke="#C9782E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M55 9 L50 14" stroke="#C9782E" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <span className="text-[9.5px] text-forest font-bold uppercase tracking-widest mt-2 px-2 py-0.5 bg-forest/10 rounded-full">
            Target ROI
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TABLET VIEW: (Medium Screens: 768px - 1023px)                */}
      {/* ============================================================ */}
      <div className="hidden md:flex lg:hidden flex-col gap-6 relative z-10 mb-12">
        {/* Source Inputs Bar */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F7F4EE] border border-border-muted">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-ink uppercase tracking-wider">Your Inputs:</span>
            <div className="flex flex-wrap gap-2">
              {businessInputs.map((src) => (
                <span
                  key={src.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border-muted text-xs text-ink/80 font-medium"
                >
                  <span className="text-rust">{src.icon}</span>
                  {src.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 pl-4 border-l border-border-muted shrink-0">
            <span className="text-xs font-bold text-rust uppercase tracking-wider">Target Outcome:</span>
            <span className="text-xs font-black text-forest px-2.5 py-0.5 bg-forest/10 rounded-full">
              Predictable Growth 🎯
            </span>
          </div>
        </div>

        {/* 5 Process Cards in a clean 3 + 2 Grid */}
        <div className="grid grid-cols-3 gap-4">
          {pipelineSteps.slice(0, 3).map((step, idx) => (
            <div
              key={step.number}
              className={`p-5 rounded-2xl flex flex-col items-center text-center relative ${
                step.isHero
                  ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] border-2 border-rust shadow-md'
                  : 'bg-white border border-border-muted'
              }`}
            >
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-rust/10 text-rust mb-2">
                {step.number}
              </span>
              <h4 className="text-xs font-bold uppercase text-ink min-h-[30px] flex items-center">
                {step.title}
              </h4>
              <div className="my-3 text-rust">{step.icon}</div>
              <p className="text-xs text-ink/70 mb-3">{step.desc}</p>
              <span className="mt-auto text-[10px] font-bold text-rust uppercase">{step.deliverable}</span>
              {idx < 2 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-border-muted text-rust flex items-center justify-center font-bold text-xs shadow z-20">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
          {pipelineSteps.slice(3, 5).map((step, idx) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl flex flex-col items-center text-center bg-white border border-border-muted relative"
            >
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-rust/10 text-rust mb-2">
                {step.number}
              </span>
              <h4 className="text-xs font-bold uppercase text-ink min-h-[30px] flex items-center">
                {step.title}
              </h4>
              <div className="my-3 text-rust">{step.icon}</div>
              <p className="text-xs text-ink/70 mb-3">{step.desc}</p>
              <span className="mt-auto text-[10px] font-bold text-rust uppercase">{step.deliverable}</span>
              {idx === 0 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-border-muted text-rust flex items-center justify-center font-bold text-xs shadow z-20">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE ARCHITECTURE VIEW (< 768px)                           */}
      {/* ============================================================ */}
      <div className="flex md:hidden flex-col gap-5 relative z-10 mb-10">
        {/* Source Inputs Card */}
        <div className="p-4 rounded-2xl bg-[#F7F4EE] border border-border-muted text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-3">
            Business Growth Inputs
          </span>
          <div className="grid grid-cols-2 gap-2">
            {businessInputs.map((src) => (
              <div
                key={src.name}
                className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white border border-border-muted/70 text-xs text-ink/80 font-medium"
              >
                <span className="text-rust">{src.icon}</span>
                <span>{src.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Downward Connector */}
        <div className="flex justify-center text-rust">
          <span className="text-base font-bold">↓</span>
        </div>

        {/* 5 Process Steps */}
        <div className="flex flex-col gap-4">
          {pipelineSteps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div
                className={`p-5 rounded-2xl flex flex-col items-center text-center ${
                  step.isHero
                    ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] border-2 border-rust shadow-md'
                    : 'bg-white border border-border-muted'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-rust/10 text-rust">
                    {step.number}
                  </span>
                  <h4 className="text-ink font-bold text-sm uppercase">{step.title}</h4>
                </div>
                <div className="my-2 text-rust">{step.icon}</div>
                <p className="text-xs text-ink/70 mb-3">{step.desc}</p>
                <span className="text-[10px] font-bold text-rust uppercase">{step.deliverable}</span>
              </div>

              {idx < pipelineSteps.length - 1 && (
                <div className="flex justify-center text-rust -my-2 z-10">
                  <div className="w-6 h-6 rounded-full bg-white border border-border-muted text-rust flex items-center justify-center font-bold text-xs shadow">
                    ↓
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Downward Connector */}
        <div className="flex justify-center text-rust">
          <span className="text-base font-bold">↓</span>
        </div>

        {/* Destination Card */}
        <div className="p-6 rounded-2xl bg-[#F7F4EE] border-2 border-rust flex flex-col items-center text-center gap-2">
          <span className="text-xs font-black tracking-widest text-rust uppercase">
            Predictable Growth Target
          </span>
          <div className="w-12 h-12 rounded-full bg-rust/10 flex items-center justify-center text-rust text-2xl">
            🎯
          </div>
          <span className="text-xs text-ink/70">Engineered Compound Revenue</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM PANEL: Outcomes That Matter                           */}
      {/* ============================================================ */}
      <div
        ref={outcomesRef}
        className="relative z-10 rounded-2xl bg-[#F7F4EE] border border-border-muted p-6 sm:p-8 shadow-sm"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-px bg-rust/50"></span>
          <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-rust uppercase">
            Outcomes That Matter
          </span>
          <span className="w-8 sm:w-12 h-px bg-rust/50"></span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white border border-border-muted/80 hover:border-rust/50 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-sm border border-border-muted/60 bg-white shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                <img
                  src={outcome.image}
                  alt={outcome.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-[12.5px] font-bold text-ink group-hover:text-rust transition-colors leading-snug tracking-tight">
                {outcome.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthArchitecture;
