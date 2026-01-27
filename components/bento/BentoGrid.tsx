"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import TechStack from "./TechStack";
import Projects from "./Projects";
import { Project } from "@/lib/types";

const items = [
  { title: "About", span: "col-span-2 row-span-2" },
  { title: "Tech Stack", span: "col-span-2 row-span-2" },
  { title: "Projects", span: "col-span-3 row-span-1" },
  { title: "Get in touch", span: "col-span-1 row-span-1" },
];

interface BentoGridProps {
  onProjectClick: (project: Project) => void;
}

export default function BentoGrid({ onProjectClick }: BentoGridProps) {
  return (
    <motion.div
      className="grid grid-cols-4 grid-rows-2 gap-4 w-[70%] mx-auto mb-10"
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
      <BentoCard title="About" span="col-span-2 row-span-1">
        <p className="mt-4 text-white/70 leading-relaxed">
          Étudiant en 3e année de BUT MMI parcours Développement Web &
          Dispositifs Interactifs à l’IUT de Troyes.
          <br />
          <br />
          Actuellement en alternance chez{" "}
          <span className="text-emerald-400">Piscines Magiline</span>, je
          conçois des interfaces modernes, interactives et performantes, avec
          une attention particulière portée à l’expérience utilisateur.
        </p>
      </BentoCard>

      <BentoCard title="Tech Stack" span="col-span-2 row-span-1">
        <TechStack />
      </BentoCard>

      <BentoCard title="Projects" span="col-span-3 row-span-1">
        <Projects onProjectClick={onProjectClick} />
      </BentoCard>

      <BentoCard title="Contact" span="col-span-1 row-span-1">
        <div className="mt-4 flex flex-col gap-3 text-white/70">
          <a
            href="mailto:contact@audric-fullhardt.fr"
            className="hover:text-emerald-400 transition"
            target="_blank"
          >
            E-Mail →
          </a>
          <a
            href="https://github.com/audricfullhardt"
            className="hover:text-emerald-400 transition"
            target="_blank"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/audric-fullhardt/"
            className="hover:text-emerald-400 transition"
            target="_blank"
          >
            LinkedIn →
          </a>
        </div>
      </BentoCard>
    </motion.div>
  );
}
