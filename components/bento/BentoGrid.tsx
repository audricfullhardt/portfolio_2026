'use client';

import { motion } from 'framer-motion';
import BentoCard from './BentoCard';

const items = [
  { title: 'À propos', span: 'col-span-2 row-span-2' },
  { title: 'Compétences', span: 'col-span-1 row-span-2' },
  { title: 'Projets', span: 'col-span-2 row-span-1' },
  { title: 'Contact', span: 'col-span-1 row-span-1' },
];

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-3 grid-rows-3 gap-4 p-8 w-[70%] mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {items.map((item, i) => (
        <BentoCard key={i} title={item.title} span={item.span} />
      ))}
    </motion.div>
  );
}
