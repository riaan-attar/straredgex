import React from 'react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  showCard?: boolean;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  imgClassName = "h-full w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]",
  showCard = false,
  alt = "StratedgeX"
}) => {
  return (
    <div className={`flex items-center h-full select-none ${className}`}>
      <img 
        src="/logo.png" 
        alt={alt} 
        className={`${imgClassName} ${showCard ? 'shadow-sm border border-brand-amber/30' : ''}`}
      />
    </div>
  );
};

export default Logo;
