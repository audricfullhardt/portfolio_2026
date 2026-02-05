"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "Croustillant App",
    description:
      "Application mobile pour consulter les menus des restaurants CROUS de France et d'outre-mer. Disponible sur Android et iOS.",
    technologies: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/audricfullhardt",
    features: [
      "Application mobile du site web CROUStillant",
      "CROUStillant permet de consulter les menus des restaurants CROUS de France et d'outre-mer",
      "Application disponible sur Android et iOS",
    ],
  },
  {
    id: "2",
    title: "Site météo",
    description:
      "Application web de météo avec prévisions à 7 jours, recherche par ville mondiale et géolocalisation automatique.",
    technologies: ["React.js", "TailwindCSS", "OpenWeather API"],
    demo: "https://sae401.audric-fullhardt.fr",
    features: [
      "Prévisions météo à 7 jours",
      "Animations fluides et interactives",
      "Recherche par ville dans le monde",
    ],
  },
  {
    id: "3",
    title: "ScaleTheme App",
    description:
      "Application mobile de notifications en temps réel pour les nouveaux abonnements via webhook Node.js.",
    technologies: ["React Native", "Node.js", "Express"],
    github: "https://github.com/audricfullhardt",
    demo: "https://scaletheme.audric-fullhardt.fr",
    features: [
      "Application mobile permettant de recevoir des notifications à chaque nouvel abonnement",
      "Utilisation d'un webhook en Node.js pour recevoir les notifications",
    ],
  },
  {
    id: "4",
    title: "ThreeJsJourney",
    description:
      "Exploration des possibilités de Three.js : scènes 3D interactives avec physics et optimisation des performances.",
    technologies: ["Three.js", "React Three Fiber", "WebGL"],
    demo: "https://threejs.audric-fullhardt.fr",
    features: [
      "Scènes 3D interactives",
      "Animations fluides avec physics",
      "Optimisation des performances",
    ],
  },
  {
    id: "5",
    title: "Odyssey42",
    description:
      "Aventure 3D spatiale réalisée en 3 jours pour le Festival MMI 2025. Personnage principal et interactions avec l'environnement.",
    technologies: ["Three.js", "JavaScript", "Blender"],
    github: "https://github.com/audricfullhardt",
    demo: "https://festival-mmi-2025.vercel.app/",
    features: [
      "Aventure en 3D avec un personnage principal",
      "Voyage dans l'espace avec un vaisseau spatial",
      "Interaction avec l'environnement",
    ],
  },
];

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 overflow-hidden transition-all"
        >
          {/* Image placeholder avec gradient */}
          <div className="relative h-40 bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-transparent overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/10">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies (top 3) */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-400/20 border border-emerald-400/40 hover:bg-emerald-400/30 text-emerald-400 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => onProjectClick(project)}
                className="flex items-center justify-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white/80 text-sm transition-colors"
              >
                Détails
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
