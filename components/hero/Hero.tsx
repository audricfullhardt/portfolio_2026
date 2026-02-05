"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 flex-1">
          <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-90 bg-white/10 backdrop-blur-xl border border-white/20" />
            <img
              src="/avatar2.png"
              alt="Audric Fullhardt"
              className="relative z-10 w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_60%)] opacity-60" />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Audric
                <span className="text-emerald-400">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-400 font-medium mt-2">
                Développeur web & mobile
              </p>
            </div>

            {/* Badge de disponibilité */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-sm font-medium text-emerald-400">
                Disponible pour des projets
              </span>
            </motion.div>
          </div>
        </div>

        {/* Section Contact améliorée */}
        <motion.div
          className="w-full lg:w-auto lg:min-w-[260px] p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-base font-semibold text-white mb-3">
            Me contacter
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:contact@audric-fullhardt.fr"
              className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                  E-mail
                </div>
                <div className="text-xs text-white/50 truncate">
                  contact@audric-fullhardt.fr
                </div>
              </div>
            </a>

            <a
              href="https://github.com/audricfullhardt"
              className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                  GitHub
                </div>
                <div className="text-xs text-white/50 truncate">@audricfullhardt</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/audric-fullhardt/"
              className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-white/50 truncate">Audric Fullhardt</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
