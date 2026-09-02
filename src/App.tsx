import React, { useEffect, useState } from 'react';
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
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <CurrencyProvider>
      <div className="font-primary bg-neutral-background text-text-primary overflow-x-clip min-h-screen flex flex-col w-full relative">
        <CustomCursor />
        <ScrollToTop />
        <SwarmCursor
          color="#FEBD59"
          accentColor="#FEBD59"
          count={4}
          size={5}
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
        
        {pathname === '/case-studies' ? (
          <>
            <main className="flex-grow">
              <PortfolioPage />
            </main>
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            <main className="flex-grow">
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
            </main>
            <Footer />
          </>
        )}
      </div>
    </CurrencyProvider>
  );
};

export default App;
