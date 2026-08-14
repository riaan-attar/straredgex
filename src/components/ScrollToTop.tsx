import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-forest hover:bg-forest/90 text-brand-amber w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 z-[99] border border-border-muted"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-2xl font-bold">arrow_upward</span>
    </button>
  );
};

export default ScrollToTop;
