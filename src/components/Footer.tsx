import React from 'react';
import PlusIcon from './PlusIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-background border-t border-border-primary pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1820px] mx-auto px-10 md:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-primary text-3xl">token</span>
              <span className="text-2xl font-bold tracking-tight text-text-primary uppercase italic">Servexa</span>
            </div>
            <p className="text-text-secondary text-[18px] leading-relaxed max-w-xs">
              Engineering high-tier marketing strategies for the world's most ambitious enterprises.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-semibold text-lg uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li><a href="#strategy" className="hover:text-brand-primary hover:translate-x-1 inline-block transition-all">Our Strategy</a></li>
              <li><a href="#capabilities" className="hover:text-brand-primary hover:translate-x-1 inline-block transition-all">Capabilities</a></li>
              <li><a href="#impact" className="hover:text-brand-primary hover:translate-x-1 inline-block transition-all">Impact Studies</a></li>
              <li><a href="#faq" className="hover:text-brand-primary hover:translate-x-1 inline-block transition-all">Common Inquiries</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-semibold text-lg uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li>HQ: London, UK</li>
              <li>partnerships@servexa.io</li>
              <li>+44 20 7946 0123</li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-semibold text-lg uppercase tracking-wider">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p className="text-text-secondary text-sm">Get our monthly digest on operational excellence.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white border border-border-primary rounded-custom px-4 py-3 w-full focus:outline-none focus:border-brand-primary text-sm"
                />
                <button type="submit" className="bg-brand-primary text-brand-accent p-3 rounded-custom flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-primary gap-6">
          <p className="text-text-secondary text-sm">© {new Date().getFullYear()} Servexa Marketing Consultants. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-text-secondary">
            <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary">Terms of Service</a>
          </div>
        </div>

        {/* Bottom Left Plus */}
        <div className="absolute bottom-[8px] left-[8px]">
          <PlusIcon />
        </div>
        {/* Bottom Right Plus */}
        <div className="absolute bottom-[8px] right-[8px]">
          <PlusIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
