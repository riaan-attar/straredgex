import React, { useRef } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  title: string;
  category: string;
  image: string;
  summary: string;
  outcome: string;
  cta: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Matina’s Fashion Trunk",
    category: "Fashion / Meta Ads",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    summary: "Scaled a premium ethnic-fashion brand from zero online presence by building the full Meta Ads and tracking stack.",
    outcome: "Budget grew from ₹500/day to ₹10,000/day and stabilized at 5x ROAS after audience refinement.",
    cta: "Built digital presence + daily sales"
  },
  {
    title: "USA Furniture Brand",
    category: "E-commerce / Google + Meta",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: "Optimized a dropshipping furniture brand by fixing product feed quality and scaling multi-channel acquisition.",
    outcome: "Google Shopping and PMax delivered consistent sales, while seasonal Meta campaigns unlocked revenue lifts.",
    cta: "Feed fixes + multi-channel scale"
  },
  {
    title: "U.S.-Based Regulatory Ratings Firm",
    category: "Cold Email / Compliance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary: "Built cold-email infrastructure from scratch in 72 hours and segmented 10,500 contacts across time zones.",
    outcome: "10,500 emails delivered, ~50% open rate, 12% CTR, and 1.5% conversion rate on renewal offers.",
    cta: "72-hour launch to outreach engine"
  },
  {
    title: "Venture Capital & Funding Advisory",
    category: "Lead Gen / Global Outreach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "Generated high-quality global leads for funding seekers and onboarded channel partners through structured outreach.",
    outcome: "500 outbound emails/day, ~41% open rate, ~14% CTR, and ~4% positive response rate.",
    cta: "Predictable high-ticket pipeline"
  },
  {
    title: "Music Production Company",
    category: "YouTube Growth / Engagement",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    summary: "Ran launch-focused YouTube ads to increase subscribers, engagement, and visibility for new music drops.",
    outcome: "Subscribers acquired at ₹5–₹10 each with stronger engagement and improved organic impressions.",
    cta: "Subscribers + organic lift"
  },
  {
    title: "Real Estate Lead Generation",
    category: "White-Label Meta Ads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    summary: "Rebuilt a cluttered campaign structure for a Mumbai agency handling multiple real-estate clients.",
    outcome: "Cost per lead dropped from ~₹1300 to ~₹300 with better tracking and project segmentation.",
    cta: "CPL reduction at scale"
  },
  {
    title: "Miya Kebabs",
    category: "QSR / Store Visits",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    summary: "Drove walk-ins with geo-targeted store-visit campaigns and loyalty automation across four outlets.",
    outcome: "Achieved ₹50–₹100 per store visit and generated ₹1 crore+ monthly revenue per outlet.",
    cta: "Footfall + repeat revenue"
  },
  {
    title: "The Saatvik Box",
    category: "Meal Subscriptions / Brand Setup",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    summary: "Created the brand identity, website, social presence, and automated ordering flow for a meal startup.",
    outcome: "~300 subscriptions at ₹10 each, powered by Meta Ads and automated WhatsApp + payment integrations.",
    cta: "Brand + automation + acquisition"
  }
];

export const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: 40, opacity: 0 },
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

    gsap.fromTo('.case-study-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 72%',
          toggleActions: 'restart reverse restart reverse',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="case-studies" className="w-full bg-[#EEF2F5] border-b border-border-muted relative overflow-hidden">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 relative">
        <div className="absolute top-[8px] right-[8px]">
          <PlusIcon />
        </div>

        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-4 text-rust">
              <span className="w-12 h-px bg-rust"></span>
              <span className="uppercase font-semibold tracking-widest text-sm">Case Studies</span>
            </div>
            <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
              Real performance stories from across industries.
            </h2>
            <p className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              A curated snapshot of growth systems built for fashion, e-commerce, compliance, outreach, real estate, food, and subscription brands.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href="https://github.com/SiddhantSali/Digital-Marketing-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom px-6 py-4 font-bold uppercase tracking-[0.15em] text-[12px] transition-all duration-300 shadow-md"
            >
              View full portfolio
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
            <p className="text-ink/60 text-sm max-w-sm lg:text-right">
              Source portfolio: Digital-Marketing-Portfolio
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {caseStudies.map((item) => (
            <article key={item.title} className="case-study-card group bg-white border border-border-muted rounded-custom overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col min-h-[100%]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/15 to-transparent"></div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 bg-bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase text-forest">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-ink leading-tight">{item.title}</h3>
                </div>

                <p className="text-ink/70 leading-relaxed text-[15px]">
                  {item.summary}
                </p>

                <div className="mt-auto pt-2 border-t border-border-muted/70">
                  <p className="text-forest font-semibold text-[15px] leading-relaxed">
                    {item.outcome}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-rust font-bold text-[12px] uppercase tracking-[0.15em]">
                    {item.cta}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
