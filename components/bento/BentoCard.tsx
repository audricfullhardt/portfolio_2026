'use client';

import { motion } from 'framer-motion';

export default function BentoCard({
  title,
  span,
  children,
}: {
  title: string;
  span: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className={`
        ${span}
        relative rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        hover:border-white/20
        p-6
        overflow-hidden
        transition-colors duration-300
      `}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: 'easeOut',
          },
        },
      }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {children}
    </motion.div>
  );
}
