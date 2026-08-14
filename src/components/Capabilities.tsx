import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description }) => {
  return (
    <div className="capability-card bg-bg-cream p-10 hover:bg-forest transition-all duration-500 group relative">
      <div className="absolute top-[8px] right-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
        <PlusIcon />
      </div>
      <span className="material-symbols-outlined text-4xl text-rust group-hover:text-brand-amber mb-8 transition-colors">{icon}</span>
      <h3 className="text-2xl font-bold text-ink group-hover:text-brand-amber mb-4 tracking-tight transition-colors">{title}</h3>
      <p className="text-ink/70 group-hover:text-bg-cream/80 leading-relaxed transition-colors">{description}</p>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    gsap.fromTo('.capability-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const capabilities = [
    {
      icon: "search",
      title: "Google Ads",
      description: "Search intent capture and high-ROI campaign structuring to dominate the bottom of the funnel."
    },
    {
      icon: "campaign",
      title: "Meta Ads",
      description: "Creative-led social acquisition strategies designed to scale customer acquisition costs profitably."
    },
    {
      icon: "web",
      title: "Landing Page Development",
      description: "Custom, high-speed landing pages engineered specifically for maximum conversion rates."
    },
    {
      icon: "mail",
      title: "Email Marketing",
      description: "High-converting lifecycle flows and newsletter strategies designed to maximize customer lifetime value."
    }
  ];

  return (
    <section ref={containerRef} id="capabilities" className="bg-brand-amber py-24 lg:py-0 relative overflow-hidden border-b border-border-muted lg:h-screen z-0 flex flex-col justify-center">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 relative z-10 w-full">
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-forest">
              Core Capabilities
            </h2>
            <p className="text-xl text-forest/80 font-medium">
              Our specialized divisions operate with surgical precision to solve your most complex marketing bottlenecks.
            </p>
          </div>
          <a href="#contact" className="flex items-center gap-4 text-forest hover:text-rust group border-b border-forest pb-2 mb-2 transition-colors">
            <span className="text-xl font-bold">View Full Service List</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-muted border border-border-muted rounded-custom overflow-hidden shadow-sm">
          {capabilities.map((item, index) => (
            <CapabilityCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
