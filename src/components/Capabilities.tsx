import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description }) => {
  return (
    <div className="capability-card bg-brand-accent p-10 hover:bg-white transition-colors duration-500 group relative">
      <div className="absolute top-[8px] right-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
        <PlusIcon />
      </div>
      <span className="material-symbols-outlined text-4xl text-brand-primary mb-8">{icon}</span>
      <h3 className="text-2xl font-bold text-brand-primary mb-4 tracking-tight">{title}</h3>
      <p className="text-brand-primary opacity-70 leading-relaxed">{description}</p>
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
        }
      }
    );
  }, { scope: containerRef });

  const capabilities = [
    {
      icon: "insights",
      title: "Market Intelligence",
      description: "Advanced sentiment analysis and competitive displacement strategies based on hard data."
    },
    {
      icon: "architecture",
      title: "Brand Engineering",
      description: "Developing institutional-grade visual languages and high-authority positioning systems."
    },
    {
      icon: "ads_click",
      title: "Performance Media",
      description: "Surgical-grade paid acquisition focused on ROAS and scalable CAC across global markets."
    },
    {
      icon: "auto_graph",
      title: "Revenue Ops",
      description: "Optimizing the marketing-to-sales handoff with automated, high-precision funnel management."
    }
  ];

  return (
    <section ref={containerRef} id="capabilities" className="bg-brand-accent py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 relative z-10">
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-brand-primary">
              Core Capabilities
            </h2>
            <p className="text-xl text-brand-primary opacity-80">
              Our specialized divisions operate with surgical precision to solve your most complex marketing bottlenecks.
            </p>
          </div>
          <a href="#contact" className="flex items-center gap-4 text-brand-primary group border-b border-brand-primary pb-2 mb-2">
            <span className="text-xl font-medium">View Full Service List</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-custom overflow-hidden">
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
