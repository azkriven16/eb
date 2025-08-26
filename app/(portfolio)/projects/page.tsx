import { SectionHeader } from "@/components/section-header";
import { CtaSection } from "@/components/sections/cta";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/techstack";

export default function Projects() {
  return (
    <main className="shell mt-20 md:mt-30 space-y-10 md:space-y-20 mb-10 md:mb-20">
      <SectionHeader
        icon="📂"
        title="Projects"
        highlight="side projects"
        description="A collection of side projects I’ve built to explore new tools, experiment with ideas, and grow as a developer."
      />
      <ProjectsSection />
      <TechStackSection />
      <CtaSection />
    </main>
  );
}
