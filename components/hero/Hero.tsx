"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="p-16 w-[70%] mx-auto"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <section className="justify-center-safe">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div className="flex flex-col justify-left gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Audric test
              <span className="text-emerald-400">.</span>
              <br />
              <span className="text-emerald-400">web/mobile developer</span>
            </h1>
          </div>
          <div className="relative h-60 w-60 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-90 bg-white/10 backdrop-blur-xl border border-white/20" />
            <img
              src="/avatar2.png"
              alt="Avatar"
              className="relative z-10 w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_60%)] opacity-60" />
          </div>
        </div>
      </section>
    </motion.section>
  );
}
