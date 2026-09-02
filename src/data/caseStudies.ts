export type CaseStudyStat = {
  label: string;
  value: string;
};

export type CaseStudy = {
  title: string;
  category: string;
  image: string;
  summary: string;
  headline: string;
  metricBadge: string;
  icon: string;
  stats: CaseStudyStat[];
  highlights: string[];
  challengeBullets: string[];
  approachBullets: string[];
  resultBullets: string[];
  cta: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Matina’s Fashion Trunk",
    category: "Fashion / Meta Ads",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    summary: "Built the full Meta Ads, tracking, and funnel architecture from scratch to scale a premium ethnic brand into consistent daily profitability.",
    headline: "Zero to ₹10,000/Day Ad Spend at 5x ROAS",
    metricBadge: "5.0x ROAS Scale",
    icon: "trending_up",
    stats: [
      { label: "ROAS Multiplier", value: "5.0x" },
      { label: "Daily Ad Budget", value: "₹10,000" },
      { label: "Growth Velocity", value: "20x" }
    ],
    highlights: [
      "Engineered pixel tracking & audience segmentation tailored for ₹5,000+ AOV buyers.",
      "Scaled ad budget 20x from ₹500/day to ₹10,000/day with steady 5x return on ad spend."
    ],
    challengeBullets: [
      "The brand had no existing digital footprint or online sales engine.",
      "Audience quality needed to be discovered fast enough to avoid wasted spend.",
      "Initial campaigns required rapid testing to find the right creative + audience fit."
    ],
    approachBullets: [
      "Launched broad campaigns to collect early market data.",
      "Analyzed performance and narrowed targeting to high-income buyer groups.",
      "Optimized creatives, retargeting layers, and tracking for stable conversions."
    ],
    resultBullets: [
      "Budget scaled from ₹500/day to ₹10,000/day.",
      "Achieved a stable 5x ROAS after audience refinement.",
      "Built a complete digital presence and predictable daily sales flow."
    ],
    cta: "Scaled to 5x ROAS",
  },
  {
    title: "USA Furniture Brand",
    category: "E-commerce / Google + Meta",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: "Overhauled Google Merchant Center feeds and launched high-intent Shopping, PMax, and Meta catalog campaigns to unlock daily high-ticket revenue.",
    headline: "Multi-Channel Paid Engine with +180% Revenue Lift",
    metricBadge: "Google + Meta Scale",
    icon: "storefront",
    stats: [
      { label: "Search Revenue Lift", value: "+180%" },
      { label: "Feed Quality Score", value: "100%" },
      { label: "Channels Scaled", value: "2 Core" }
    ],
    highlights: [
      "Restructured product feeds with high-intent transactional search keywords.",
      "Combined Google Shopping + Meta catalog ads to drive reliable daily high-AOV orders."
    ],
    challengeBullets: [
      "The product feed was weak and lacked strong search intent signals.",
      "The brand needed paid channels to complement SEO and drive reliable revenue.",
      "Seasonality required a structure that could adapt quickly to promotions."
    ],
    approachBullets: [
      "Set up Google Merchant Center and launched Shopping + PMax campaigns.",
      "Reworked metadata to improve product discoverability.",
      "Used Meta catalogue and carousel ads for seasonal pushes."
    ],
    resultBullets: [
      "Google Shopping delivered consistent sales after feed improvements.",
      "Seasonal Meta campaigns drove strong revenue lifts.",
      "The acquisition system became a reliable complement to SEO."
    ],
    cta: "Feed fixes + multi-channel scale",
  },
  {
    title: "U.S. Regulatory Ratings Firm",
    category: "Cold Email / Compliance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary: "Deployed enterprise-grade cold-outreach infrastructure in 72 hours, delivering personalized sequences to 10,500 compliance leaders.",
    headline: "72-Hour Deployment Delivering 10,500 Targeted Inbounds",
    metricBadge: "~50% Open Rate",
    icon: "mail",
    stats: [
      { label: "Delivered Emails", value: "10,500" },
      { label: "Average Open Rate", value: "49.8%" },
      { label: "Click-Through Rate", value: "12.0%" }
    ],
    highlights: [
      "Configured dedicated warmup domains, SPF, DKIM, and DMARC in under 72 hours.",
      "Delivered 10,500 emails with near-zero bounce, achieving 49.8% open & 12% CTR."
    ],
    challengeBullets: [
      "The client had only a few weeks to launch high-volume compliance outreach.",
      "Recipients were spread across multiple time zones and service needs.",
      "Deliverability had to be bulletproof to prevent domain blacklisting."
    ],
    approachBullets: [
      "Configured domain warmup, SPF, DKIM, and DMARC for inbox health.",
      "Cleaned and segmented the database with Python for precision targeting.",
      "Created 3-step automated sequences with 12 personalized email variants."
    ],
    resultBullets: [
      "10,500 emails successfully delivered within 30 days.",
      "~50% overall open rate and 12% click-through rate.",
      "1.5% conversion rate for renewal and migration offers."
    ],
    cta: "72-hour launch to outreach engine",
  },
  {
    title: "U.S. Venture Capital Advisory",
    category: "Lead Gen / Global Outreach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "Built automated global B2B outreach pipeline generating qualified $5M+ funding seekers and institutional channel partners.",
    headline: "Predictable $5M+ Deal Pipeline via Programmatic Sequences",
    metricBadge: "500 Emails / Day",
    icon: "groups",
    stats: [
      { label: "Daily Outbound", value: "500/day" },
      { label: "Open Rate", value: "41.2%" },
      { label: "Positive Reply", value: "4.0%" }
    ],
    highlights: [
      "Segmented global database by geography, fund thesis, and deal-size criteria.",
      "Maintained 500 daily outbound touches with 41% opens and 4% positive responses."
    ],
    challengeBullets: [
      "The funnel required institutional prospects with funding needs above $5M.",
      "Global audience required timezone send-time automation.",
      "Needed predictable monthly pipeline without deliverability dips."
    ],
    approachBullets: [
      "Segmented databases by country, industry, and funding fit.",
      "Built 1 main email + 3 follow-ups with 3 variants per step.",
      "Integrated Instantly API with custom Python analytics."
    ],
    resultBullets: [
      "500 outbound emails/day sustained over 6 months.",
      "41% open rate and 14% CTR.",
      "4% positive response rate for high-ticket advisory."
    ],
    cta: "Predictable high-ticket pipeline",
  },
  {
    title: "Music Production Company",
    category: "YouTube Growth / Engagement",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    summary: "Engineered release-focused YouTube ad campaigns to slash subscriber acquisition costs and amplify organic algorithmic discovery.",
    headline: "Acquiring True Subscribers at ₹5–₹10 with 3.2x Engagement",
    metricBadge: "₹5–₹10 / Sub",
    icon: "smart_display",
    stats: [
      { label: "Cost Per Subscriber", value: "₹5 – ₹10" },
      { label: "Engagement Lift", value: "3.2x" },
      { label: "Organic Reach Lift", value: "+240%" }
    ],
    highlights: [
      "Optimized in-feed and custom intent targeting across competitor channels.",
      "Lowered subscriber acquisition cost to ₹5–₹10 while boosting organic impressions 240%."
    ],
    challengeBullets: [
      "Every new song launch needed an immediate audience push and engagement boost.",
      "Campaign needed to grow genuine subscribers without inflating costs.",
      "Organic visibility depended on rapid initial engagement signals."
    ],
    approachBullets: [
      "Combined in-feed, skippable, and discovery video placements.",
      "Ran rigorous A/B creative testing on thumbnails and ad hooks.",
      "Refined affinity and custom-intent musical segments."
    ],
    resultBullets: [
      "Subscribers acquired at ₹5–₹10 each.",
      "3.2x higher engagement on new track drops.",
      "Stronger organic algorithm recommendation after paid boost."
    ],
    cta: "Subscribers + organic lift",
  },
  {
    title: "Real Estate Lead Generation",
    category: "White-Label Meta Ads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    summary: "Reconstructed fragmented Meta campaigns into segregated project funnels powered by high-converting AI walkthrough video creatives.",
    headline: "77% Cost-Per-Lead Drop from ₹1,300 to ₹300",
    metricBadge: "CPL ₹1300 → ₹300",
    icon: "domain",
    stats: [
      { label: "CPL Reduction", value: "-77%" },
      { label: "Previous CPL", value: "₹1,300" },
      { label: "Optimized CPL", value: "₹300" }
    ],
    highlights: [
      "Segregated chaotic account structures into project-specific intent funnels.",
      "Replaced flat static ads with AI video walkthroughs, dropping CPL from ₹1300 to ₹300."
    ],
    challengeBullets: [
      "Audiences were broad and overlapping, wasting ad spend across projects.",
      "Existing campaign structure was cluttered and hard to optimize.",
      "Static creatives failed to convert luxury homebuyers."
    ],
    approachBullets: [
      "Separated campaigns by project with dedicated tracking pixels.",
      "Introduced AI-generated video walkthroughs and immersive angles.",
      "Cleaned up audience exclusion rules to prevent internal bidding wars."
    ],
    resultBullets: [
      "CPL dropped from ₹1300 to ~₹300.",
      "Lead-to-site-visit conversion rate doubled.",
      "Agency successfully retained and expanded developer accounts."
    ],
    cta: "CPL reduction at scale",
  },
  {
    title: "Miya Kebabs",
    category: "QSR / Store Visits",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    summary: "Executed hyper-local store visit campaigns combined with Reelo CRM automation to drive massive walk-in footfall across 4 outlets.",
    headline: "₹1 Crore+ Monthly Revenue Per Outlet at ₹50–₹100 Per Visit",
    metricBadge: "₹1 Cr+ / Month",
    icon: "restaurant",
    stats: [
      { label: "Monthly / Outlet", value: "₹1 Cr+" },
      { label: "Store Visit Cost", value: "₹50 – ₹100" },
      { label: "Outlets Scaled", value: "4 Hubs" }
    ],
    highlights: [
      "Targeted 3km radius competitor dining searches across Google and Meta.",
      "Integrated Reelo CRM loyalty automation to turn walk-ins into monthly repeat buyers."
    ],
    challengeBullets: [
      "Brand required higher daily walk-in volume across 4 prime outlets.",
      "Needed automated retention systems to convert one-off diners into regulars.",
      "Precise geo-targeting was essential to eliminate wasted impressions."
    ],
    approachBullets: [
      "Launched high-intent local store-visit ads on Google and Meta.",
      "Captured nearby competitor dining demand with geo-fenced keywords.",
      "Connected WhatsApp CRM loyalty flows for automated repeat offers."
    ],
    resultBullets: [
      "Generated store visits at ₹50–₹100 cost.",
      "Monthly revenue surpassed ₹1 crore per outlet.",
      "Repeat customer rate grew significantly via automated CRM remarketing."
    ],
    cta: "Footfall + repeat revenue",
  },
  {
    title: "The Saatvik Box",
    category: "Meal Subscriptions / Brand Setup",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    summary: "Constructed complete brand identity, high-conversion landing funnel, and automated WhatsApp subscription flow for a food startup.",
    headline: "300+ Paid Subscriptions Acquired at ₹10 Cost",
    metricBadge: "300+ Subs @ ₹10",
    icon: "inventory_2",
    stats: [
      { label: "Paid Subscriptions", value: "300+" },
      { label: "Cost Per Subscription", value: "₹10" },
      { label: "Funnel Automation", value: "100%" }
    ],
    highlights: [
      "Engineered automated WhatsApp + Payment gateway subscription flow.",
      "Acquired 300+ recurring meal subscribers at an unprecedented ₹10 acquisition cost."
    ],
    challengeBullets: [
      "Startup had no prior brand recognition, identity, or web presence.",
      "Subscription onboarding needed to be seamless and mobile-first.",
      "Operations required real-time integration with kitchen POS systems."
    ],
    approachBullets: [
      "Crafted brand identity, visual style, website, and ad creatives.",
      "Targeted corporate working professionals in key commercial corridors.",
      "Built automated WhatsApp subscription engine integrated with payments."
    ],
    resultBullets: [
      "300+ meal subscriptions acquired at ₹10 each.",
      "Operations streamlined with 100% automated renewals.",
      "Built a scalable local subscription model."
    ],
    cta: "Brand + automation + acquisition",
  },
];
