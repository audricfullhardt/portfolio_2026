"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="p-16 w-[70%] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <section className="flex items-center">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Audric
              <br />
              <span className="text-emerald-400">Développeur Web</span>
            </h1>

            <p className="text-white/70 max-w-md">
              Étudiant en BUT MMI, alternant chez Piscines Magiline. Je conçois
              des expériences web modernes, interactives et performantes.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-72 w-72 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <img src="/avatar2.png" alt="" className="w-full"/>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
