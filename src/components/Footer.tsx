import React from 'react';
import PlusIcon from './PlusIcon';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest border-t border-border-muted pt-24 pb-12 relative overflow-hidden text-bg-cream">
      <div className="max-w-[1820px] mx-auto px-10 md:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
            <a href="/" className="inline-block group">
              <Logo imgClassName="h-11 sm:h-12 w-auto object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform" />
            </a>
            <p className="text-bg-cream/80 text-[18px] leading-relaxed max-w-xs">
              Engineering high-converting performance marketing systems for ambitious brands.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-4 text-bg-cream/80">
              <li><a href="#strategy" className="hover:text-brand-amber hover:translate-x-1 inline-block transition-all text-bg-cream">Our Strategy</a></li>
              <li><a href="#capabilities" className="hover:text-brand-amber hover:translate-x-1 inline-block transition-all text-bg-cream">Capabilities</a></li>
              <li><a href="#impact" className="hover:text-brand-amber hover:translate-x-1 inline-block transition-all text-bg-cream">Impact Studies</a></li>
              <li><a href="#faq" className="hover:text-brand-amber hover:translate-x-1 inline-block transition-all text-bg-cream">Common Inquiries</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-4 text-bg-cream/80">
              <li>HQ: London, UK</li>
              <li>partnerships@stratedgex.io</li>
              <li>+44 20 7946 0123</li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p className="text-bg-cream/80 text-sm">Get our monthly digest on performance marketing tactics.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-forest/60 border border-border-muted/30 rounded-custom px-4 py-3 w-full focus:outline-none focus:border-brand-amber text-sm text-white placeholder:text-bg-cream/50"
                />
                <button type="submit" className="bg-brand-amber text-forest p-3 rounded-custom flex items-center justify-center hover:bg-white transition-colors">
                  <span className="material-symbols-outlined font-bold">chevron_right</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-muted/30 gap-6">
          <p className="text-bg-cream/70 text-sm">© {new Date().getFullYear()} StratedgeX Performance Agency. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-bg-cream/70">
            <a href="#" className="hover:text-brand-amber transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-amber transition-colors">Terms of Service</a>
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
