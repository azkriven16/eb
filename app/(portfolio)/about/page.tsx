import { CtaSection } from "@/components/sections/cta";
import { OthersSection } from "@/components/sections/others";
import { ProfileSection } from "@/components/sections/profile";

export default function AboutPage() {
  return (
    <main className="shell mt-20 md:mt-30 space-y-10 mb-10 md:mb-20">
      <ProfileSection />
      <OthersSection />
      <CtaSection />
    </main>
  );
}
