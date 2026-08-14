import React, { useEffect, useRef, useState } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface StatItemProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  title: string;
  description: string;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  title,
  description,
  isVisible
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * target;
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <div className="stat-item flex flex-col gap-6">
      <div className="text-[80px] lg:text-[120px] font-medium tracking-heading text-sage leading-none flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <span>{count.toFixed(decimals)}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="h-px w-full bg-border-muted relative">
        <div className="absolute -top-[8px] -left-[8px]">
          <PlusIcon />
        </div>
      </div>
      <p className="text-xl font-bold text-ink">{title}</p>
      <p className="text-ink/70">{description}</p>
    </div>
  );
};

export const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    gsap.fromTo('.stat-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: sectionRef });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="w-full bg-bg-cream relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-b border-border-muted">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 flex flex-col gap-20">
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
            Measured Outcomes.
          </h2>
          <p className="text-ink/70 text-[20px] max-w-md">
            We quantify excellence. Our work is judged by the revenue impact and reduced acquisition costs it generates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <StatItem 
            prefix="$"
            target={50}
            suffix="M+"
            title="Ad Spend Managed"
            description="Aggressively optimized across Google and Meta platforms."
            isVisible={isVisible}
          />
          <StatItem 
            target={40}
            suffix="%"
            title="Average CPA Reduction"
            description="Our custom landing pages drastically reduce cost per acquisition."
            isVisible={isVisible}
          />
          <StatItem 
            target={3.5}
            decimals={1}
            suffix="x"
            title="Average ROAS"
            description="Measured across our top-tier performance portfolio."
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
