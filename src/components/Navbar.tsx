import React, { useState } from 'react';
import PlusIcon from './PlusIcon';
import Logo from './Logo';

type MegaMenuKey = 'strategy' | 'capabilities' | null;



interface MenuContent {
  title: string;
  desc: string;
  img: string;
  c1t: string;
  c1l: { label: string; href: string }[];
  c2t: string;
  c2l: { label: string; href: string }[];
}

const menuData: Record<'strategy' | 'capabilities', MenuContent> = {
  strategy: {
    title: "Our Strategy",
    desc: "Architectural precision in performance marketing. We engineer high-converting systems.",
    img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0fGVufDB8fHx8MTc3NDI0Mjc2Mnww&ixlib=rb-4.1.0&w=800&h=450&fit=crop&fm=jpg&q=80",
    c1t: "Methodology",
    c1l: [
      { label: "Ad Strategy", href: "#strategy" },
      { label: "Funnel Design", href: "#contact-form-section" },
      { label: "Budget Scaling", href: "#impact" },
      { label: "Audience Targeting", href: "#capabilities" },
    ],
    c2t: "Insights",
    c2l: [
      { label: "Case Studies", href: "#testimonials" },
      { label: "Strategic Whitepapers", href: "#faq" },
      { label: "System Design Theory", href: "#strategy" },
      { label: "Success Metrics", href: "#impact" },
    ]
  },
  capabilities: {
    title: "Core Capabilities",
    desc: "Specialized divisions operating with surgical precision to scale your revenue.",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixid=M3w4NjU0NDF8MHwxfHNlYXJjaHwxfHxDbGVhbnxlbnwwfHx8fDE3NzQyNDI3NjJ8MA&ixlib=rb-4.1.0&w=800&h=450&fit=crop&fm=jpg&q=80",
    c1t: "Solutions",
    c1l: [
      { label: "Google Ads Management", href: "#capabilities" },
      { label: "Meta Ads Management", href: "#capabilities" },
      { label: "Landing Page Dev", href: "#contact-form-section" },
      { label: "Email Marketing", href: "#contact-form-section" },
    ],
    c2t: "Integration",
    c2l: [
      { label: "API Connectivity", href: "#contact-form-section" },
      { label: "CRM Optimization", href: "#contact-form-section" },
      { label: "Funnel Automation", href: "#strategy" },
      { label: "Data Visualization", href: "#impact" },
    ]
  }
};

export const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentContent = activeMenu ? menuData[activeMenu] : null;


  return (
    <header className="w-full flex flex-col items-center pt-6 md:pt-12 relative z-50 px-4 md:px-6" id="nav-container">
      <div className="w-full max-w-[1440px] relative" id="nav-wrapper" onMouseLeave={() => setActiveMenu(null)}>
        <nav className="flex items-center justify-between border border-border-muted h-nav-height bg-bg-cream overflow-visible transition-colors duration-300">
          
          {/* Brand Section */}
          <div className="flex items-center h-full border-r border-border-muted shrink-0 relative bg-bg-cream">
            <a href="/" className="flex items-center h-full group overflow-hidden" aria-label="StratedgeX Home">
              <Logo 
                className="h-full"
                imgClassName="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
            <div className="absolute -bottom-[8px] -left-[8px] z-10 pointer-events-none">
              <PlusIcon />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-grow h-full items-center overflow-visible">
            
            {/* Strategy item */}
            <div 
              className="h-full flex items-center group cursor-pointer border-r border-border-muted nav-item" 
              onMouseEnter={() => setActiveMenu('strategy')}
            >
              <a href="#strategy" className="h-full flex items-center px-[30px] relative z-10 overflow-hidden w-full">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-rust group-hover:-translate-y-full transition-all duration-500 ease-in-out">Strategy</span>
                <div className="absolute inset-0 bg-forest flex items-center px-[30px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-amber">Strategy</span>
                </div>
              </a>
            </div>

            {/* Capabilities item */}
            <div 
              className="h-full flex items-center group cursor-pointer border-r border-border-muted nav-item"
              onMouseEnter={() => setActiveMenu('capabilities')}
            >
              <a href="#capabilities" className="h-full flex items-center px-[30px] relative z-10 overflow-hidden w-full">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-rust group-hover:-translate-y-full transition-all duration-500 ease-in-out">Capabilities</span>
                <div className="absolute inset-0 bg-forest flex items-center px-[30px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-amber">Capabilities</span>
                </div>
              </a>
            </div>

            {/* Impact item */}
            <div className="h-full flex items-center group cursor-pointer border-r border-border-muted" onMouseEnter={() => setActiveMenu(null)}>
              <a href="#impact" className="h-full flex items-center px-[30px] relative z-10 overflow-hidden w-full">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-rust group-hover:-translate-y-full transition-all duration-500 ease-in-out">Impact</span>
                <div className="absolute inset-0 bg-forest flex items-center px-[30px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-amber">Impact</span>
                </div>
              </a>
            </div>

            {/* FAQ item */}
            <div className="h-full flex items-center group cursor-pointer border-r border-border-muted" onMouseEnter={() => setActiveMenu(null)}>
              <a href="#faq" className="h-full flex items-center px-[30px] relative z-10 overflow-hidden w-full">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-rust group-hover:-translate-y-full transition-all duration-500 ease-in-out">FAQ</span>
                <div className="absolute inset-0 bg-forest flex items-center px-[30px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-amber">FAQ</span>
                </div>
              </a>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center h-full shrink-0 relative">
            <a href="#contact" className="hidden xl:flex items-center px-8 h-full text-[13px] font-bold uppercase tracking-[0.1em] text-ink border-l border-border-muted hover:text-rust transition-colors">
              CASE STUDY
            </a>
            
            <div className="h-full hidden sm:flex items-center group cursor-pointer overflow-hidden border-l border-border-muted min-w-0 md:min-w-[180px]">
              <a href="#contact-form-section" className="h-full w-full flex items-center justify-center px-6 md:px-0 relative z-10 overflow-hidden bg-brand-amber">
                <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-forest group-hover:-translate-y-full transition-transform duration-500 ease-in-out whitespace-nowrap">Inquire Now</span>
                <div className="absolute inset-0 bg-forest flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-amber whitespace-nowrap">Inquire Now</span>
                </div>
              </a>
            </div>

            <button 
              id="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden px-4 md:px-6 border-l border-border-muted h-full flex items-center text-ink focus:outline-none"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            
            <div className="absolute -bottom-[8px] -right-[8px]">
              <PlusIcon />
            </div>
          </div>
        </nav>

        {/* Mega Menu Content */}
        {activeMenu && currentContent && (
          <div className="absolute left-0 right-0 z-40 bg-bg-cream border-x border-b border-border-muted overflow-hidden origin-top transition-all duration-300 opacity-100 transform translate-y-0 shadow-2xl">
            <div className="grid grid-cols-12 gap-0 overflow-hidden">
              {/* Left Sidebar */}
              <div className="col-span-4 bg-border-muted/20 p-12 border-r border-border-muted flex flex-col justify-between">
                <div className="space-y-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70">{currentContent.title}</h3>
                  <div className="space-y-6">
                    <div 
                      className="aspect-[16/9] bg-forest/10 rounded-sm overflow-hidden bg-cover bg-center border border-border-muted"
                      style={{ backgroundImage: `url('${currentContent.img}')` }}
                    ></div>
                    <p className="text-2xl font-normal leading-tight tracking-tight text-ink">{currentContent.desc}</p>
                    <a href="#strategy" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest border-b-2 border-rust text-rust pb-1 hover:text-forest hover:border-forest transition-colors">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="col-span-8 p-0 bg-bg-cream">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-border-muted py-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70 mb-8 px-10">{currentContent.c1t}</h4>
                    <ul className="flex flex-col">
                      {currentContent.c1l.map((item, idx) => (
                        <li key={idx} className="relative h-[48px] border-b border-border-muted last:border-b-0 overflow-hidden w-full">
                          <a href={item.href} className="group block h-full w-full">
                            <div className="h-full flex items-center px-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-full">
                              <span className="text-[12px] uppercase tracking-[0.05em] text-ink font-bold group-hover:text-rust">{item.label}</span>
                            </div>
                            <div className="absolute inset-0 bg-forest h-full flex items-center px-10 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                              <span className="text-[12px] uppercase tracking-[0.05em] text-brand-amber font-bold flex justify-between w-full items-center">
                                {item.label}
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="py-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70 mb-8 px-10">{currentContent.c2t}</h4>
                    <ul className="flex flex-col">
                      {currentContent.c2l.map((item, idx) => (
                        <li key={idx} className="relative h-[48px] border-b border-border-muted last:border-b-0 overflow-hidden w-full">
                          <a href={item.href} className="group block h-full w-full">
                            <div className="h-full flex items-center px-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-full">
                              <span className="text-[12px] uppercase tracking-[0.05em] text-ink font-bold group-hover:text-rust">{item.label}</span>
                            </div>
                            <div className="absolute inset-0 bg-forest h-full flex items-center px-10 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                              <span className="text-[12px] uppercase tracking-[0.05em] text-brand-amber font-bold flex justify-between w-full items-center">
                                {item.label}
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg-cream z-[60] flex flex-col p-10 transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>
            <Logo imgClassName="h-11 w-auto object-contain rounded-md shadow-sm" />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-ink focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          <a href="#strategy" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium text-ink hover:text-rust">Our Strategy</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium text-ink hover:text-rust">Capabilities</a>
          <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium text-ink hover:text-rust">Client Impact</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium text-ink hover:text-rust">FAQ</a>
          <hr className="border-border-muted" />
          <a href="#contact-form-section" onClick={() => setMobileMenuOpen(false)} className="bg-brand-amber text-forest h-16 rounded-custom flex items-center justify-center text-xl font-bold">
            Partner With Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
