'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      setScale(speed > 4 ? 1.6 : 1.1);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{ x, y }}
      animate={{ scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="
          h-8 w-8 rounded-full
          border border-white
          bg-transparent
          mix-blend-difference
        "
      />
    </motion.div>
  );
}
