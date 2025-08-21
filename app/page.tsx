import { HeroSection } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";
import { TechStack } from "@/components/sections/techstack";
import ScrollVelocity from "@/components/ui/scroll-velocity";

export default function Page() {
  return (
    <main className="container mx-auto px-4 max-w-6xl mb-52">
      <HeroSection />
      <ProfileSection />
      {/* <Separator /> */}
      <TechStack />
    </main>
  );
}

function Separator() {
  return (
    <div className="bg-primary mt-10  cursor-target">
      <ScrollVelocity
        texts={["Scroll Down  👇", "Scroll Down 👇"]}
        velocity={100}
        className="custom-scroll-text text-primary-foreground"
      />
    </div>
  );
}
