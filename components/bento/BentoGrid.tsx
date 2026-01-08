"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import TechStack from "./TechStack";

const items = [
  { title: "About", span: "col-span-2 row-span-2" },
  { title: "Tech Stack", span: "col-span-2 row-span-2" },
  { title: "Projects", span: "col-span-3 row-span-1" },
  { title: "Get in touch", span: "col-span-1 row-span-1" },
];

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-4 grid-rows-2 gap-4 w-[70%] mx-auto"
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
        <div className="mt-4 grid grid-cols-3 gap-4">
          {["Croustillant App", "Site météo", "ScaleTheme App"].map((project) => (
            <div
              key={project}
              className="
          group relative rounded-xl
          bg-white/5 border border-white/10
          p-4
          hover:border-emerald-400/40
          transition
        "
            >
              <h4 className="text-white font-medium">{project}</h4>
              <p className="text-white/50 text-sm mt-1">Voir le projet →</p>

              <div
                className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          bg-emerald-400/10
          transition
        "
              />
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="Get in touch" span="col-span-1 row-span-1">
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
