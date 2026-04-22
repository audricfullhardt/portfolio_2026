"use client";

import { useState } from "react";
import { LangProvider, LangSwitch } from "@/lib/LangContext";
import GridBackground from "@/components/background/GridBackground";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Timeline from "@/components/sections/Timeline";
import CTA from "@/components/sections/CTA";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/lib/types";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <LangProvider>
      <GridBackground />
      <LangSwitch />
      <Hero />
      <About />
      <Stack />
      <ProjectsList onOpen={setProject} />
      <Timeline />
      <CTA />
      <Footer />
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </LangProvider>
  );
}
