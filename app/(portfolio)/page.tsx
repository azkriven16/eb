import { ChatbotCard } from "@/components/chatbot-card";
import { ResumeCircle } from "@/components/resume-circle";
import { CtaSection } from "@/components/sections/cta";
import { GuestbookSection } from "@/components/sections/guestbook";
import { HeroSection } from "@/components/sections/hero";
import { OthersSection } from "@/components/sections/others";
import { ProfileSection } from "@/components/sections/profile";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/techstack";

export default function Page() {
  return (
    <main className="shell mt-10 space-y-10 md:space-y-20">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ProfileSection />
      <OthersSection />
      <div className="flex flex-col md:flex-row gap-6">
        <ResumeCircle />
        <ChatbotCard />
      </div>
      <GuestbookSection />
      <CtaSection />
    </main>
  );
}
