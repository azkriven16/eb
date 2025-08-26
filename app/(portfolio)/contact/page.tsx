import { ChatbotCard } from "@/components/chatbot-card";
import { GuestbookSection } from "@/components/sections/guestbook";
import { ResumeCircle } from "@/components/resume-circle";
import { CtaSection } from "@/components/sections/cta";

export default function ContactPage() {
  return (
    <main className="shell mt-20 md:mt-30 space-y-10 mb-10 md:mb-20">
      <CtaSection />
      <div className="flex flex-col md:flex-row gap-6">
        <ResumeCircle />
        <ChatbotCard />
      </div>
      <GuestbookSection />
    </main>
  );
}
