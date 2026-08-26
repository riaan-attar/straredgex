import React, { useEffect, useRef, useState } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useCurrency } from '../context/CurrencyContext';

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
      <div className="text-[64px] sm:text-[76px] lg:text-[110px] xl:text-[120px] font-medium tracking-heading text-sage leading-none flex items-baseline select-none">
        {prefix && <span className="mr-1">{prefix}</span>}
        <span>{count.toFixed(decimals)}</span>
        {suffix && <span className="ml-1">{suffix}</span>}
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

  const {
    currency,
    isIndia,
    setCurrency,
    detectionMethod,
    adSpendStat,
    cpaReductionStat,
    roasStat,
  } = useCurrency();

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
          <div className="flex flex-col gap-4">
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
              Measured Outcomes.
            </h2>
            
            {/* Currency Detector & Switcher Control */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center p-1 bg-border-muted/40 rounded-full border border-border-muted">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                    currency === 'INR'
                      ? 'bg-forest text-brand-amber shadow-sm'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                  title="Switch to Indian Rupee (₹)"
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                    currency === 'USD'
                      ? 'bg-forest text-brand-amber shadow-sm'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                  title="Switch to US Dollar ($)"
                >
                  $ USD
                </button>
              </div>

              <span className="text-xs text-ink/60 font-medium flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-full border border-border-muted/60">
                <span className={`w-1.5 h-1.5 rounded-full ${isIndia ? 'bg-forest' : 'bg-rust'}`}></span>
                {isIndia ? 'Region: India (₹)' : 'Region: Global ($)'}
                {detectionMethod !== 'storage' && detectionMethod !== 'url_param' && (
                  <span className="text-[10px] text-ink/40">({detectionMethod})</span>
                )}
              </span>
            </div>
          </div>

          <p className="text-ink/70 text-[20px] max-w-md">
            We quantify excellence. Our work is judged by the revenue impact and reduced acquisition costs it generates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <StatItem 
            key={`stat-adspend-${adSpendStat.prefix}-${adSpendStat.target}`}
            prefix={adSpendStat.prefix}
            target={adSpendStat.target}
            suffix={adSpendStat.suffix}
            title={adSpendStat.title}
            description={adSpendStat.description}
            isVisible={isVisible}
          />
          <StatItem 
            key="stat-cpa"
            target={cpaReductionStat.target}
            suffix={cpaReductionStat.suffix}
            title={cpaReductionStat.title}
            description={cpaReductionStat.description}
            isVisible={isVisible}
          />
          <StatItem 
            key="stat-roas"
            target={roasStat.target}
            decimals={roasStat.decimals}
            suffix={roasStat.suffix}
            title={roasStat.title}
            description={roasStat.description}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;

