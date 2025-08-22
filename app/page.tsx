import { HeroSection } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/techstack";

export default function Page() {
  return (
    <main className="container mx-auto px-4 max-w-6xl mb-52">
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <TechStack />
    </main>
  );
}
