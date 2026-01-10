"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import TechStack from "./TechStack";
import Projects from "./Projects";

const items = [
  { title: "About", span: "col-span-2 row-span-2" },
  { title: "Tech Stack", span: "col-span-2 row-span-2" },
  { title: "Projects", span: "col-span-3 row-span-1" },
  { title: "Get in touch", span: "col-span-1 row-span-1" },
];

export default function BentoGrid() {
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
        <Projects/>
      </BentoCard>

      <BentoCard title="Contact" span="col-span-1 row-span-1">
        <div className="mt-4 flex flex-col gap-3 text-white/70">
          <a
            href="mailto:audric.fullhardt.pro@gmail.com"
            className="hover:text-emerald-400 transition"
          >
            E-Mail →
          </a>
          <a
            href="https://github.com/audricfullhardt"
            className="hover:text-emerald-400 transition"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/audric-fullhardt/"
            className="hover:text-emerald-400 transition"
          >
            LinkedIn →
          </a>
        </div>
      </BentoCard>
    </motion.div>
  );
}
