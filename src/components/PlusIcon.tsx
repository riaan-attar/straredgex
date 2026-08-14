import React from 'react';

interface PlusIconProps {
  className?: string;
}

export const PlusIcon: React.FC<PlusIconProps> = ({ className = '' }) => {
  return <div className={`plus-icon ${className}`}></div>;
};

export default PlusIcon;
