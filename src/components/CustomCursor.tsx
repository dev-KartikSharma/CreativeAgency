import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isFinePointer, setIsFinePointer] = useState(true);

  // Mouse position values (start offscreen)
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth springs for the trailing pill badge
  const springConfig = { damping: 24, stiffness: 340, mass: 0.45 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on devices that have a mouse
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(pointer: fine)');
      setIsFinePointer(mediaQuery.matches);

      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsFinePointer(e.matches);
      };

      mediaQuery.addEventListener('change', handleMediaChange);
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    // Add class to hide default OS cursor on desktop
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect clickable and interactive elements for contextual text badges
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor], [data-project-card], .cursor-pointer'
      );

      if (interactive) {
        setIsHovered(true);

        // Contextual badge text detection
        const explicitText = interactive.getAttribute('data-cursor-text');
        if (explicitText) {
          setHoverText(explicitText);
        } else if (interactive.closest('#works') || interactive.closest('[data-project-card]')) {
          setHoverText('VIEW ↗');
        } else if (interactive.closest('#capabilities')) {
          setHoverText('EXPLORE');
        } else if (interactive.tagName === 'BUTTON' || interactive.getAttribute('role') === 'button') {
          const btnText = interactive.textContent?.trim().toUpperCase();
          if (btnText?.includes('CLOSE') || btnText?.includes('✕') || btnText?.includes('ESC')) {
            setHoverText('CLOSE ✕');
          } else if (btnText?.includes('CONTACT') || btnText?.includes("LET'S WORK") || btnText?.includes('TALK')) {
            setHoverText('TALK ↗');
          } else {
            setHoverText('CLICK');
          }
        } else if (interactive.tagName === 'A') {
          const href = interactive.getAttribute('href') || '';
          if (href.includes('instagram')) {
            setHoverText('CONNECT ↗');
          } else {
            setHoverText('VISIT ↗');
          }
        } else {
          setHoverText(null);
        }
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isFinePointer, mouseX, mouseY]);

  if (!isFinePointer) return null;

  return createPortal(
    <>
      {/* ======================================================== */}
      {/* PERMANENT ORANGE PILL CURSOR                              */}
      {/* Mounted directly to <body> for zero stacking context lag */}
      {/* ======================================================== */}

      {/* Trailing Interactive Electric Orange Pill Badge */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[9999] mix-blend-difference bg-[#E63B19] shadow-[0_0_20px_rgba(230,59,25,0.4)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered && hoverText ? 92 : 18,
          height: isHovered && hoverText ? 36 : 18,
          borderRadius: isHovered && hoverText ? 18 : 9,
          scale: isHovered && !hoverText ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 350 }}
      >
        {isHovered && hoverText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-[11px] font-black uppercase tracking-wider text-white whitespace-nowrap px-3"
          >
            {hoverText}
          </motion.span>
        ) : null}
      </motion.div>

      {/* Instant Micro Precision Center Dot (When resting) */}
      {(!isHovered || !hoverText) && (
        <motion.div
          className="fixed left-0 top-0 rounded-full bg-[#E63B19] pointer-events-none z-[9999] mix-blend-difference"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            width: 5,
            height: 5,
          }}
        />
      )}
    </>,
    document.body
  );
};

export default CustomCursor;
