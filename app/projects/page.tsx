import { CtaSection } from "@/components/sections/cta";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/techstack";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Projects() {
  return (
    <main className="container mx-auto px-4 max-w-6xl pt-20 lg:mt-[350px] xl:mt-0">
      <div className="flex flex-col gap-2 relative w-fit">
        <div className="flex gap-2 items-center mt-10">
          <p className="heading">🏆</p>
          <h1 className="heading">
            <SparklesText>Projects Section</SparklesText>
          </h1>
        </div>
      </div>
      <ProjectsSection />
      <TechStackSection />
      <CtaSection />
    </main>
  );
}
