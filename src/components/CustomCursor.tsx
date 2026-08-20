import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Don't render custom cursor on touch devices
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    if (isTouchDevice) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    // We use a slight lag using requestAnimationFrame for a smoother feel, 
    // or just direct translation. Direct translation is faster.
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: -16, // Offset by half the width/height to center on pointer
        left: -16,
        width: 32,
        height: 32,
        backgroundColor: '#1E3A2E', // Solid forest color to avoid expensive blend modes
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        willChange: 'transform',
      }}
    />
  );
};

export default CustomCursor;
