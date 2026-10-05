import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Strategy from './components/Strategy';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import CaseStudies from './components/CaseStudies';
import PortfolioPage from './components/PortfolioPage';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SwarmCursor from './components/SwarmCursor';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { CurrencyProvider } from './context/CurrencyContext';

import LeadQuoteCard from './components/LeadQuoteCard';

export const App: React.FC = () => {
  const [pathname, setPathname] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'));

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    // Client-side link interception for instant SPA navigation without full page reloads
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // Handle internal SPA routes like /case-studies, /case-study, /
      if (href.startsWith('/') && !href.startsWith('//') && !target.target && !target.download && !href.startsWith('/#')) {
        e.preventDefault();
        if (window.location.pathname !== href) {
          window.history.pushState({}, '', href);
          setPathname(href);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const cleanPath = pathname.toLowerCase().replace(/\/+$/, '');
  const isCaseStudiesPage = cleanPath === '/case-studies' || cleanPath === '/case-study' || cleanPath === '/portfolio';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isCaseStudiesPage) {
      document.title = 'Web Design & Performance Case Studies | Footfall Metrics Design';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Explore in-depth design, 3D web, and conversion rate optimization (CRO) case studies by Footfall Metrics Design Studio scaling ROAS and lowering acquisition costs.'
        );
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://design.footfallmetrics.in/case-studies');
      }
    } else {
      document.title = 'Footfall Metrics Design | High-Converting Web Design, CRO & Growth Architecture';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Footfall Metrics Design Studio, founded by Riaan Attar, is an elite performance design and conversion rate optimization (CRO) agency engineering bespoke high-speed landing pages, 3D web experiences, and paid acquisition growth systems.'
        );
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://design.footfallmetrics.in/');
      }
    }
  }, [isCaseStudiesPage]);

  return (
    <CurrencyProvider>
      <div className="font-primary bg-neutral-background text-text-primary overflow-x-clip min-h-screen flex flex-col w-full relative">
      <Analytics />
      <CustomCursor />
      <ScrollToTop />
      <SwarmCursor
        color="#FEBD59"
        accentColor="#FEBD59"
        count={4}
        size={3.4}
        merge={0.80}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        scatterOnClick
        targetElementId="bulb-anchor"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      <Navbar />
      <main className="flex-grow">
        {isCaseStudiesPage ? (
          <PortfolioPage />
        ) : (
          <>
            <Hero />
            <LeadQuoteCard />
            <LogoCloud />
            <Strategy />
            <Capabilities />
            <Impact />
            <CaseStudies />
            <CTASection />
            <Testimonials />
            <ContactForm />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
    </CurrencyProvider>
  );
};

export default App;
