import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  logo: string;
  rating: string;
  quote: string;
  name: string;
  tiltClass: string;
}

const testimonialsData: Testimonial[] = [
  {
    logo: "American Ratings",
    rating: "4.9",
    quote: "StratedgeX completely transformed our Meta Ads. Combined with their custom landing pages, our acquisition costs dropped by 45% in the first month.",
    name: "Kate Davis",
    tiltClass: "hover:-rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "Namm Capital",
    rating: "4.8",
    quote: "Their Google Ads management is unmatched. The high-converting landing pages they built helped us achieve a 3.5x ROAS at scale.",
    name: "Martin Kazlauskas",
    tiltClass: "hover:rotate-3 hover:scale-[1.05]"
  },
  {
    logo: "Saatvik Box",
    rating: "4.9",
    quote: "StratedgeX represents the highest standards of performance marketing. An indispensable partner for anyone serious about revenue growth.",
    name: "Sanjay Sharma",
    tiltClass: "hover:-rotate-3 hover:scale-[1.05]"
  },
  {
    logo: "Sangvi Contractors",
    rating: "4.7",
    quote: "High-tier performance media at its best. They don't run generic campaigns; they construct high-precision conversion systems that scale rapidly.",
    name: "Tawanna Afumba",
    tiltClass: "hover:rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "Thinkstart Australia",
    rating: "4.9",
    quote: "Their landing page development team is incredible. Our conversion rates doubled within weeks of launching the new funnel.",
    name: "Larry King",
    tiltClass: "hover:-rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "ZOCO Mediaworks",
    rating: "4.8",
    quote: "Aggressive A/B testing and surgical ad buying by StratedgeX have allowed us to scale our ad spend profitably month over month.",
    name: "Fatima Mohamed",
    tiltClass: "hover:rotate-3 hover:scale-[1.05]"
  },
  {
    logo: "Abil Group",
    rating: "4.9",
    quote: "The team brought structure, speed, and clarity to our paid campaigns. Performance improved almost immediately.",
    name: "Nadia Patel",
    tiltClass: "hover:-rotate-6 hover:scale-[1.05]"
  },
  {
    logo: "Imperial Atria",
    rating: "4.8",
    quote: "Their strategic approach helped us unlock better lead quality and stronger ROI across every channel.",
    name: "Ethan Morgan",
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
          toggleActions: 'restart reverse restart reverse',
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
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'bottom bottom',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="testimonials" className="w-full bg-bg-cream relative overflow-hidden border-b border-border-muted z-0">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 relative z-10 w-full flex flex-col gap-20">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-4 text-rust">
              <span className="w-12 h-px bg-rust"></span>
              <span className="uppercase font-semibold tracking-widest text-sm">Testimonials</span>
            </div>
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
              Endorsed by Growth Leaders.
            </h2>
          </div>
          <p className="text-ink/70 text-[20px] max-w-md">
            Hear how StratedgeX helps aggressive brands scale their revenue through high-converting ads and landing pages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial-card bg-white border border-border-muted p-8 rounded-custom shadow-sm transition-all duration-300 transform ${t.tiltClass} flex flex-col justify-between min-h-[260px] cursor-default relative`}
            >
              <div className="absolute -top-[8px] -left-[8px]">
                <PlusIcon />
              </div>
              <div>
                {/* Card Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg text-forest tracking-tighter uppercase">{t.logo}</span>
                  <div className="flex items-center gap-1 text-sm font-semibold text-forest">
                    <span>{t.rating}</span>
                    <span className="material-symbols-outlined text-[16px] text-brand-amber">star</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-ink/80 text-[16px] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-bold text-forest text-lg">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
