"use client";

import { useState } from "react";
import Hero from "@/components/hero/Hero";
import BentoGrid from "@/components/bento/BentoGrid";
import DotBackground from "@/components/background/DotBackground";
import ProjectModal from "@/components/bento/ProjectModal";
import { Project } from "@/lib/types";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Hero />
      <BentoGrid onProjectClick={setSelectedProject} />
      <DotBackground />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <Footer />
    </>
  );
}
