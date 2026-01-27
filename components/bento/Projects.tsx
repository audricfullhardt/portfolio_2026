"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Croustillant App",
    description:
      "Application mobile de commande en ligne pour une boulangerie. Interface intuitive avec système de panier, gestion des commandes et notifications push.",
    technologies: ["React Native", "TypeScript", "Expo", "Umami API"],
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
      "Application web météorologique avec prévisions détaillées, visualisation de données et géolocalisation automatique.",
    technologies: ["React.js", "TailwindCSS", "OpenWeather API", "Symfony"],
    demo: "https://weather.audric-fullhardt.fr",
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
      "Application mobile permettant de recevoir des notifications à chaque nouvel abonnement",
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
      "Suivi du cours de Three.js de Bruno Simon, exploration des possibilités de Three.js",
    technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
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
      "Site réalisé en 3jours pour le Festival MMI 2025",
    technologies: ["Three.js", "JavaScript", "Blender"],
    github: "https://github.com/audricfullhardt",
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
    <div className="mt-4 grid grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onProjectClick(project)}
          className="group relative rounded-xl bg-white/5 border border-white/10 p-4 hover:border-emerald-400/40 transition-all cursor-pointer"
        >
          <h4 className="text-white font-medium relative z-10">{project.title}</h4>
          <p className="text-white/50 text-sm mt-1 relative z-10">Voir le projet →</p>

          <motion.div
            className="absolute inset-0 rounded-xl bg-emerald-400/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
