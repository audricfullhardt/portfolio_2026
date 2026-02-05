"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-400/40 transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Image */}
                {project.image && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Fonctionnalités
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <span className="text-emerald-400 mt-1">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 rounded-xl bg-emerald-400/20 border border-emerald-400/40 hover:bg-emerald-400/30 text-emerald-400 text-center font-medium transition-all"
                    >
                      Voir la démo →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-400/10 text-white text-center font-medium transition-all"
                    >
                      Voir sur GitHub →
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
