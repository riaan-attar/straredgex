export type CaseStudy = {
  title: string;
  category: string;
  image: string;
  summary: string;
  sectionBullets: string[];
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
    summary: "Scaled a premium ethnic-fashion brand from zero online presence by building the full Meta Ads and tracking stack.",
    sectionBullets: [
      "Premium ethnic-fashion brand with no prior online presence.",
      "Built Meta Ads, pixel tracking, and campaign structure from scratch.",
      "Refined targeting to working women, mid-aged buyers, and high-income segments.",
      "Scaled budget from ₹500/day to ₹10,000/day while stabilizing performance.",
    ],
    challengeBullets: [
      "The brand had no existing digital footprint or online sales engine.",
      "Audience quality needed to be discovered fast enough to avoid wasted spend.",
      "Initial campaigns required rapid testing to find the right creative + audience fit.",
    ],
    approachBullets: [
      "Launched broad campaigns to collect early market data.",
      "Analyzed the first week of performance and detected a sales drop.",
      "Narrowed targeting to buyer groups aligned with the ₹5,000 AOV.",
      "Optimized creatives, retargeting layers, and tracking for stable conversions.",
    ],
    resultBullets: [
      "Budget scaled from ₹500/day to ₹10,000/day.",
      "Achieved a stable 5x ROAS after audience refinement.",
      "Built a complete digital presence and predictable daily sales flow.",
    ],
    cta: "Built digital presence + daily sales",
  },
  {
    title: "USA Furniture Brand",
    category: "E-commerce / Google + Meta",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: "Optimized a dropshipping furniture brand by fixing product feed quality and scaling multi-channel acquisition.",
    sectionBullets: [
      "Previously relied only on SEO and lacked paid acquisition scale.",
      "Improved Merchant Center, Shopping, PMax, and Meta catalog performance.",
      "Rewrote product titles and descriptions with high-intent keywords.",
      "Built a multi-channel paid strategy that stabilized daily sales.",
    ],
    challengeBullets: [
      "The product feed was weak and the catalog lacked strong search intent signals.",
      "The brand needed paid channels to complement SEO and drive reliable revenue.",
      "Seasonality required a structure that could adapt quickly to promotions.",
    ],
    approachBullets: [
      "Set up Google Merchant Center and launched Shopping + PMax campaigns.",
      "Reworked metadata to improve product discoverability.",
      "Used Meta catalogue and carousel ads for seasonal and festive pushes.",
      "Aligned budget distribution across channels based on sales quality.",
    ],
    resultBullets: [
      "Google Shopping delivered consistent sales after feed improvements.",
      "Seasonal Meta campaigns drove strong revenue lifts.",
      "The acquisition system became a reliable complement to SEO.",
    ],
    cta: "Feed fixes + multi-channel scale",
  },
  {
    title: "U.S.-Based Regulatory Ratings Firm",
    category: "Cold Email / Compliance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary: "Built cold-email infrastructure from scratch in 72 hours and segmented 10,500 contacts across time zones.",
    sectionBullets: [
      "Built cold-email infrastructure from scratch within 72 hours.",
      "Segmented 10,500 contacts across time zones and business categories.",
      "Designed 3-step automated sequences with 12 tailored email variants.",
      "Delivered 10,500 emails with a ~50% open rate and 12% CTR.",
    ],
    challengeBullets: [
      "The client started late and only had a few weeks to launch the campaign.",
      "Recipients were spread across multiple time zones and service needs.",
      "Deliverability had to be strong enough to support a high-volume rollout.",
    ],
    approachBullets: [
      "Configured domain warmup, SPF, DKIM, and DMARC for inbox health.",
      "Cleaned and segmented the database with Python for better targeting.",
      "Created one main email plus follow-ups with multiple variants.",
      "Tracked opens, clicks, bounce control, and inbox placement continuously.",
    ],
    resultBullets: [
      "10,500 emails successfully delivered within 30 days.",
      "~50% overall open rate.",
      "12% click-through rate.",
      "1.5% conversion rate for renewal and migration offers.",
    ],
    cta: "72-hour launch to outreach engine",
  },
  {
    title: "U.S.-Based Venture Capital Advisory",
    category: "Lead Gen / Global Outreach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "Generated high-quality global leads for funding seekers and onboarded channel partners through structured outreach.",
    sectionBullets: [
      "Targeted funding seekers and channel partners across global markets.",
      "Built segmentation by geography, industry, and timezone.",
      "Ran 500 outbound emails/day with a strong performance baseline.",
      "Kept outreach quality high through staged follow-ups and analytics.",
    ],
    challengeBullets: [
      "The funnel needed high-ticket prospects with funding requirements above $5M.",
      "The audience was global, so send-time optimization mattered.",
      "The team needed predictable pipeline volume without deliverability collapse.",
    ],
    approachBullets: [
      "Segmented databases by country, industry, and funding fit.",
      "Built 1 main email + 3 follow-ups with 3 variants per step.",
      "Used Instantly and integrated its API into Python for analysis.",
      "Delivered fortnightly reporting on performance and country-level insights.",
    ],
    resultBullets: [
      "500 outbound emails/day.",
      "~41% open rate.",
      "~14% CTR.",
      "~4% positive response rate.",
    ],
    cta: "Predictable high-ticket pipeline",
  },
  {
    title: "Music Production Company",
    category: "YouTube Growth / Engagement",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    summary: "Ran launch-focused YouTube ads to increase subscribers, engagement, and visibility for new music drops.",
    sectionBullets: [
      "Built a structured YouTube Ads strategy for each release.",
      "Optimized ad formats, placements, thumbnails, and audience segments.",
      "Targeted competitor and similar-genre music channels.",
      "Lowered subscriber acquisition cost while raising organic reach.",
    ],
    challengeBullets: [
      "Every new song launch needed a fresh audience push and engagement lift.",
      "The campaign had to grow subscribers without wasting budget.",
      "Organic visibility depended on improving engagement signals fast.",
    ],
    approachBullets: [
      "Used in-feed, skippable, and non-skippable video placements.",
      "Ran A/B testing across audiences, thumbnails, and ad formats.",
      "Refined affinity, custom intent, and remarketing segments.",
      "Adjusted bids based on cost per subscriber and engagement quality.",
    ],
    resultBullets: [
      "Subscribers acquired at ₹5–₹10 each.",
      "Stronger engagement rates on every launch.",
      "Organic impressions improved after paid activation.",
    ],
    cta: "Subscribers + organic lift",
  },
  {
    title: "Real Estate Lead Generation",
    category: "White-Label Meta Ads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    summary: "Rebuilt a cluttered campaign structure for a Mumbai agency handling multiple real-estate clients.",
    sectionBullets: [
      "White-label support for a Mumbai-based agency serving multiple projects.",
      "Rebuilt segregated Meta campaigns for better structure and tracking.",
      "Replaced static creatives with AI-generated video ads.",
      "Dropped CPL from ~₹1300 to ~₹300.",
    ],
    challengeBullets: [
      "Audiences were broad and overlapping, wasting spend across projects.",
      "The existing campaign structure was unclear and hard to optimize.",
      "Static creatives failed to communicate project value properly.",
    ],
    approachBullets: [
      "Separated campaigns by project to control budget and messaging.",
      "Narrowed to intent-driven audience segments.",
      "Introduced AI-generated video creatives for stronger communication.",
      "Cleaned up pixel/data tracking and performance analysis.",
    ],
    resultBullets: [
      "CPL dropped from ₹1300 to ~₹300.",
      "Lead quality improved across all projects.",
      "The agency retained clients thanks to dramatically better results.",
    ],
    cta: "CPL reduction at scale",
  },
  {
    title: "Miya Kebabs",
    category: "QSR / Store Visits",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    summary: "Drove walk-ins with geo-targeted store-visit campaigns and loyalty automation across four outlets.",
    sectionBullets: [
      "Ran store-visit campaigns around four Mumbai and Pune outlets.",
      "Used competitor keyword targeting to capture nearby demand.",
      "Connected Reelo CRM to turn walk-ins into repeat customers.",
      "Produced store-visit costs of ₹50–₹100 and monthly revenue of ₹1 crore+ per outlet.",
    ],
    challengeBullets: [
      "The brand needed more daily walk-ins from high-intent local audiences.",
      "The campaign had to support repeat visits, not just one-time traffic.",
      "Multiple outlet locations required precise geo targeting.",
    ],
    approachBullets: [
      "Launched high-intent store visit campaigns on Google and Meta.",
      "Captured competitor search demand with location-focused keywords.",
      "Added Reelo CRM and loyalty automation for retention.",
      "Optimized spend to reduce wasted impressions and increase footfall.",
    ],
    resultBullets: [
      "₹50–₹100 per store visit.",
      "₹1 crore+ monthly revenue per outlet.",
      "Increased repeat customers through CRM-led remarketing.",
    ],
    cta: "Footfall + repeat revenue",
  },
  {
    title: "The Saatvik Box",
    category: "Meal Subscriptions / Brand Setup",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    summary: "Created the brand identity, website, social presence, and automated ordering flow for a meal startup.",
    sectionBullets: [
      "Built the complete brand identity and online presence from scratch.",
      "Ran Meta Ads to drive subscription acquisition.",
      "Automated ordering with WhatsApp, Razorpay, PhonePe, and Petpooja.",
      "Generated ~300 subscriptions at ₹10 each.",
    ],
    challengeBullets: [
      "The startup had no digital foundation or brand recognition.",
      "Orders had to be streamlined into a simple subscription experience.",
      "The operations stack needed to be connected end-to-end.",
    ],
    approachBullets: [
      "Created logo, colors, messaging, website, and social assets.",
      "Targeted professionals, hostel-goers, and people living away from home.",
      "Built an automated WhatsApp ordering flow with payments.",
      "Connected the system to restaurant management for smooth operations.",
    ],
    resultBullets: [
      "~300 meal subscriptions acquired at ₹10 each.",
      "Operations became simpler and more reliable.",
      "The brand gained a strong, scalable local-market system.",
    ],
    cta: "Brand + automation + acquisition",
  },
];
