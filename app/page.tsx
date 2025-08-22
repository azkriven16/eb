import { CtaSection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/techstack";

export default function Page() {
  return (
    <main className="container mx-auto px-4 max-w-6xl mt-10">
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <TechStackSection />
      <CtaSection />
    </main>
  );
}
