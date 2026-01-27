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
      "Système de commande en temps réel",
      "Paiement sécurisé intégré",
      "Notifications push pour le suivi des commandes",
      "Interface utilisateur moderne et responsive",
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
      "Géolocalisation automatique",
      "Animations fluides et interactives",
      "Mode sombre/clair",
    ],
  },
  {
    id: "3",
    title: "ScaleTheme App",
    description:
      "Outil de gestion de thèmes pour développeurs, permettant de créer, personnaliser et exporter des palettes de couleurs.",
    technologies: ["React Native", "Node.js", "Express"],
    github: "https://github.com/audricfullhardt",
    demo: "https://scaletheme.audric-fullhardt.fr",
    features: [
      "Création de palettes personnalisées",
      "Export en différents formats (CSS, JSON, Tailwind)",
      "Prévisualisation en temps réel",
      "Bibliothèque de thèmes prédéfinis",
    ],
  },
  {
    id: "4",
    title: "ThreeJsJourney",
    description:
      "Portfolio interactif en 3D utilisant Three.js pour créer des expériences immersives et des animations complexes.",
    technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
    demo: "https://threejs.audric-fullhardt.fr",
    features: [
      "Scènes 3D interactives",
      "Animations fluides avec physics",
      "Optimisation des performances",
      "Support mobile et desktop",
    ],
  },
  {
    id: "5",
    title: "Odyssey42",
    description:
      "Plateforme éducative gamifiée pour l'apprentissage du code, avec des défis progressifs et un système de récompenses.",
    technologies: ["Three.js", "JavaScript", "Blender"],
    github: "https://github.com/audricfullhardt",
    features: [
      "Système de défis progressifs",
      "Éditeur de code intégré",
      "Système de points et badges",
      "Tableau de classement en temps réel",
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
