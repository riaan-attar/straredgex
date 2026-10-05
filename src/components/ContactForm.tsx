import React, { useRef, useState } from 'react';
import PlusIcon from './PlusIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: 'Strategy Audit',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(infoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
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

    gsap.fromTo(formCardRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
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
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6960654d-0a42-4faf-b031-6a8ab56e0b59',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          inquiry_type: formData.inquiryType,
          message: formData.message,
          subject: `New Lead: ${formData.name} (${formData.company || 'Direct Inquiry'}) - StratedgeX`,
          from_name: 'StratedgeX Leads Desk',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          inquiryType: 'Strategy Audit',
          message: '',
        });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again or reach out via email.');
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setErrorMessage('Unable to send your inquiry at this moment. Please check your network or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} id="contact-form-section" className="w-full bg-[#EEF2F5] relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-b border-border-muted overflow-visible">
      <div className="max-w-[1820px] mx-auto px-6 md:px-20 py-24 lg:py-32 relative">
        {/* Corner decorations */}
        <div className="absolute top-[8px] right-[8px]">
          <PlusIcon />
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side Info */}
        <div ref={infoRef} className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-rust">
            <span className="w-12 h-px bg-rust"></span>
            <span className="uppercase font-semibold tracking-widest text-sm">Get in Touch</span>
          </div>
          <h2 className="text-[38px] md:text-[60px] font-medium leading-heading tracking-heading text-ink">
            Initiate Your Structural Audit.
          </h2>
          <p className="text-[20px] leading-body text-ink/70 max-w-xl">
            We partner with startups and global enterprises ready to build acquisition engines with surgical precision. Complete the form to connect with our operations team.
          </p>
          <div className="flex flex-col gap-4 text-ink font-medium mt-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-rust">mail</span>
              <a href="mailto:partnerships@stratedgex.co" className="hover:text-rust transition-colors">partnerships@stratedgex.co</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-rust">call</span>
              <a href="tel:+919152253699" className="hover:text-rust transition-colors">+91 9152253699</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-rust">location_on</span>
              <span>HQ: Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div ref={formCardRef} className="bg-white border border-border-muted rounded-custom p-8 md:p-12 shadow-xl relative">
          {/* Top Left Plus on form card */}
          <div className="absolute -top-[8px] -left-[8px]">
            <PlusIcon />
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <span className="material-symbols-outlined text-6xl text-forest animate-bounce">check_circle</span>
              <h3 className="text-2xl font-bold text-ink">Inquiry Received</h3>
              <p className="text-ink/70 max-w-sm">
                Our strategic operations desk has received your submission and will review your details within 24 business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-rust hover:text-forest transition-colors underline"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="flex flex-col gap-6"
            >
              <input type="hidden" name="access_key" value="6960654d-0a42-4faf-b031-6a8ab56e0b59" />
              
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-custom flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ink/70">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g., Sarah Jenkins" 
                    className="border border-border-muted rounded-custom px-4 py-3 bg-bg-cream focus:bg-white focus:outline-none focus:border-rust text-ink transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ink/70">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="E.g., Nexus Corp" 
                    className="border border-border-muted rounded-custom px-4 py-3 bg-bg-cream focus:bg-white focus:outline-none focus:border-rust text-ink transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink/70">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="s.jenkins@nexus.co" 
                  className="border border-border-muted rounded-custom px-4 py-3 bg-bg-cream focus:bg-white focus:outline-none focus:border-rust text-ink transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink/70">Inquiry Focus</label>
                <select 
                  name="inquiry_type"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  className="border border-border-muted rounded-custom px-4 py-3 bg-bg-cream focus:bg-white focus:outline-none focus:border-rust text-ink transition-colors text-sm cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(34, 34, 31)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}
                >
                  <option value="Strategy Audit">Structural Strategy Audit</option>
                  <option value="Brand Engineering">Brand Engineering</option>
                  <option value="Performance Media">Performance Media / ROAS</option>
                  <option value="SEO & Organic Search">SEO & Organic Search</option>
                  <option value="Revenue Operations">Revenue Operations Integration</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink/70">Message / Growth Friction Points</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your current bottlenecks or market objectives..." 
                  className="border border-border-muted rounded-custom px-4 py-3 bg-bg-cream focus:bg-white focus:outline-none focus:border-rust text-ink transition-colors text-sm resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-amber text-forest hover:bg-forest hover:text-brand-amber border border-border-muted rounded-custom flex items-center justify-center gap-3 h-14 transition-all duration-300 font-bold uppercase tracking-wider text-sm mt-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Transmitting Details...' : 'Submit Inquiry'}</span>
                <span className="material-symbols-outlined text-lg">
                  {isSubmitting ? 'sync' : 'arrow_forward'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>

        {/* Corner decorations */}
        <div className="absolute -bottom-[8px] -right-[8px]">
          <PlusIcon />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
