import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function AmbientGlow() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring physics for cursor tracking
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only enable on pointer fine devices (desktop/trackpad/mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 160);
      cursorY.set(e.clientY - 160);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1E50A2]/10 via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none z-30"
    />
  );
}
