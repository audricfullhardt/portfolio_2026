"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import Projects from "./Projects";
import { Project } from "@/lib/types";

interface BentoGridProps {
  onProjectClick: (project: Project) => void;
}

export default function BentoGrid({ onProjectClick }: BentoGridProps) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 mb-16"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Projects en pleine largeur */}
      <BentoCard title="Projets" span="col-span-full">
        <Projects onProjectClick={onProjectClick} />
      </BentoCard>
    </motion.div>
  );
}
