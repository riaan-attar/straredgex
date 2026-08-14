import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4" 
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lightbulb Outline */}
    <path d="M50 15 A25 25 0 0 0 25 40 C25 55 35 65 35 75 L35 80 C35 83 37 85 40 85 L60 85 C63 85 65 83 65 80 L65 75 C65 65 75 55 75 40 A25 25 0 0 0 50 15 Z" />
    
    {/* Lightbulb Base Lines */}
    <line x1="38" y1="89" x2="62" y2="89" />
    <line x1="42" y1="94" x2="58" y2="94" />
    <path d="M47 98 C47 101 53 101 53 98" />
    
    {/* Atom Orbits */}
    <ellipse cx="50" cy="45" rx="16" ry="6" transform="rotate(30 50 45)" />
    <ellipse cx="50" cy="45" rx="16" ry="6" transform="rotate(-30 50 45)" />
    <ellipse cx="50" cy="45" rx="16" ry="6" transform="rotate(90 50 45)" />
    
    {/* Atom Nucleus & Electrons */}
    <circle cx="50" cy="45" r="3" fill="currentColor" stroke="none" />
    <circle cx="36" cy="37" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="64" cy="53" r="2.5" fill="currentColor" stroke="none" />
    
    {/* Light Rays */}
    <line x1="50" y1="3" x2="50" y2="8" />
    <line x1="22" y1="14" x2="26" y2="18" />
    <line x1="78" y1="14" x2="74" y2="18" />
    <line x1="12" y1="35" x2="17" y2="36" />
    <line x1="88" y1="35" x2="83" y2="36" />
  </svg>
);

export default LogoIcon;
