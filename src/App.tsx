import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Strategy from './components/Strategy';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="font-primary bg-neutral-background text-text-primary overflow-x-hidden min-h-screen flex flex-col w-full relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <Strategy />
        <Capabilities />
        <Impact />
        <FAQ />
        <CTASection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
