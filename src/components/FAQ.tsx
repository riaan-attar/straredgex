import React, { useRef, useState } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does StratedgeX integrate with our internal marketing team?",
    answer: "We act as a high-tier extension of your leadership. Instead of replacing your team, we manage the complex strategic layers and technical ecosystems that often cause bottlenecks, allowing your internal staff to focus on high-level innovation and brand vision."
  },
  {
    question: "What exactly does a 'Structural Audit' involve?",
    answer: "Our audit is a 30-day deep dive into your marketing infrastructure. We analyze your tech stack efficiency, competitive displacement vectors, data hygiene, and funnel friction. The result is a comprehensive report and a prioritized 12-month growth blueprint."
  },
  {
    question: "Do you work with startups or exclusively enterprise firms?",
    answer: "While our systems are engineered for enterprise scale, we partner with Series B+ startups that have achieved product-market fit and are ready to professionalize their marketing operations. We seek partners who value architectural precision over quick-fix tactics."
  },
  {
    question: "How do you measure success and ROI?",
    answer: "Success is quantified through two primary lenses: Efficiency Gains (recovered bandwidth and reduced CAC) and Strategic Growth (incremental revenue and market share). We establish custom North Star metrics for every engagement, tracked via real-time dashboards."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

    gsap.fromTo('.faq-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: containerRef });

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section ref={containerRef} id="faq" className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 border-b border-border-muted relative bg-[#EEF2F5]">
      <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-16 lg:gap-24">
        {/* FAQ Header */}
        <div ref={headerRef} className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-rust">
            <span className="w-12 h-px bg-rust"></span>
            <span className="uppercase font-semibold tracking-widest text-sm">Inquiries</span>
          </div>
          <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
            Common Questions.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed">
            Everything you need to know about our methodology, engagement models, and strategic integration.
          </p>
          <div className="pt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-rust font-bold uppercase tracking-widest border-b-2 border-rust pb-1 hover:text-forest hover:border-forest transition-all"
            >
              Still curious? Contact us
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col border-t border-border-muted">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item group border-b border-border-muted overflow-hidden transition-all duration-300 ${isOpen ? 'faq-open bg-border-muted/30' : 'hover:bg-border-muted/20'}`}
              >
                <button 
                  onClick={() => toggleIndex(index)}
                  className="faq-trigger w-full flex items-center justify-between py-8 px-4 text-left focus:outline-none"
                >
                  <span className="text-xl md:text-2xl font-bold text-ink tracking-tight pr-8">
                    {item.question}
                  </span>
                  <span 
                    className="material-symbols-outlined text-rust transition-transform duration-300 faq-icon"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>
                <div 
                  className="faq-content transition-all duration-500 ease-in-out overflow-hidden px-4"
                  style={{
                    maxHeight: isOpen ? '1000px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="text-ink/70 text-lg leading-relaxed pb-8 max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Plus Decoration */}
      <div className="absolute -bottom-[8px] -right-[8px]">
        <PlusIcon />
      </div>
    </section>
  );
};

export default FAQ;
