import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Testimonial {
  logo: string;
  rating: string;
  quote: string;
  name: string;
  tiltClass: string;
}

const testimonialsData: Testimonial[] = [
  {
    logo: "NEXUS.CO",
    rating: "4.9",
    quote: "The strategic support from Servexa has been phenomenal. We reclaimed over 45% of our execution bandwidth and scaled custom operations smoothly.",
    name: "Kate Davis",
    tiltClass: "hover:-rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "ORBITAL",
    rating: "4.8",
    quote: "Their structured audit revealed major efficiency gaps. The engineered growth blueprint has significantly lowered our customer acquisition costs.",
    name: "Martin Kazlauskas",
    tiltClass: "hover:rotate-3 hover:scale-[1.05]"
  },
  {
    logo: "QUANTUM",
    rating: "4.9",
    quote: "Servexa represents the highest standards of professional execution. An indispensable partner for anyone serious about revenue operations.",
    name: "Sanjay Sharma",
    tiltClass: "hover:-rotate-3 hover:scale-[1.05]"
  },
  {
    logo: "VANTAGE",
    rating: "4.7",
    quote: "High-tier performance media at its best. They don't run generic campaigns; they construct high-precision marketing systems that scale.",
    name: "Tawanna Afumba",
    tiltClass: "hover:rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "EQUINOX",
    rating: "4.9",
    quote: "Architectural precision is the perfect description. Their sentiment audits transformed how we address brand positioning globally.",
    name: "Larry King",
    tiltClass: "hover:-rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "ZENITH",
    rating: "4.8",
    quote: "Automated funnels built by their team have streamlined our entire sales integration. Exceptional communication and unmatched speed.",
    name: "Fatima Mohamed",
    tiltClass: "hover:rotate-3 hover:scale-[1.05]"
  }
];

export const Testimonials: React.FC = () => {
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

    gsap.fromTo('.testimonial-card',
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

  return (
    <section ref={containerRef} id="testimonials" className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 border-b border-border-primary relative overflow-visible bg-white">
      {/* Corner decoration */}
      <div className="absolute top-[8px] right-[8px]">
        <PlusIcon />
      </div>

      {/* Heading Block */}
      <div ref={headerRef} className="flex flex-col items-center text-center gap-6 mb-20">
        <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-text-primary flex items-center justify-center flex-wrap gap-x-4">
          Our trusted <span className="bg-brand-primary text-brand-accent px-6 py-1 rounded-custom transform -rotate-1 text-[32px] md:text-[50px] font-bold">Partners</span>
        </h2>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          Our mission is to drive progress and enhance the bandwidth of enterprise leaders by delivering superior marketing engines that exceed structural expectations.
        </p>
      </div>

      {/* Grid Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((t, idx) => (
          <div
            key={idx}
            className={`testimonial-card bg-neutral-background border border-border-primary p-8 rounded-custom shadow-sm transition-all duration-300 transform ${t.tiltClass} flex flex-col justify-between min-h-[260px] cursor-default`}
          >
            <div>
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-brand-primary tracking-tighter uppercase">{t.logo}</span>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  <span>{t.rating}</span>
                  <span className="material-symbols-outlined text-[16px] fill-current text-brand-primary">star</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-[16px] leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
            </div>

            {/* Author */}
            <div>
              <h4 className="font-bold text-text-primary text-lg">{t.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Corner decoration */}
      <div className="absolute -bottom-[8px] -left-[8px]">
        <PlusIcon />
      </div>
    </section>
  );
};

export default Testimonials;
