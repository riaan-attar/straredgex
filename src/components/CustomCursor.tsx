import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDown, setIsDown] = useState(false);

  // Don't render custom cursor on touch devices
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    if (isTouchDevice) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX - 18.5}px, ${e.clientY - 18.5}px, 0)`;

      // Detect if hovering over clickable/interactive targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, .nav-item')
        );
        setIsHovering(isInteractive);
      }
    };

    const onMouseDown = () => setIsDown(true);
    const onMouseUp = () => setIsDown(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 37,
        height: 37,
        pointerEvents: 'none',
        zIndex: 10000,
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'filter 0.2s ease, transform 0.05s linear',
      }}
    >
      <img
        src="/images/cursor-bulb.png"
        alt=""
        width={37}
        height={37}
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: isDown ? 'scale(0.88)' : isHovering ? 'scale(1.25) rotate(-6deg)' : 'scale(1)',
          transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease',
          filter: isHovering
            ? 'drop-shadow(0 0 10px rgba(254, 189, 89, 1)) drop-shadow(0 0 20px rgba(254, 189, 89, 0.6))'
            : 'drop-shadow(0 0 6px rgba(254, 189, 89, 0.75)) drop-shadow(0 0 12px rgba(254, 189, 89, 0.3))',
        }}
      />
    </div>
  );
};

export default CustomCursor;
