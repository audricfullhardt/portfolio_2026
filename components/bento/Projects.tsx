"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects from "../../public/projects/projects.json";

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project: any, index: number) => (
        <motion.article
          key={project.id.toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 overflow-hidden transition-all"
        >
          <div className="relative h-40 bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-transparent overflow-hidden">
            {project.pictures ? (
              <img
                src={project.pictures[0]}
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

          <div className="p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech: any) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

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
