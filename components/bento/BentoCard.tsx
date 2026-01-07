'use client';

import { motion } from 'framer-motion';

export default function BentoCard({
  title,
  span,
}: {
  title: string;
  span: string;
}) {
  return (
    <motion.div
      className={`
        ${span}
        relative rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-6
        overflow-hidden
      `}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.96,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        scale: 1.03,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
    >
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-[radial-gradient(circle_at_top_left,rgba(0,255,170,0.25),transparent_60%)]
        "
      />

      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
}
