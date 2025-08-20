"use client";
import { HeroSection } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";

export default function Page() {
  return (
    <main className="container mx-auto px-4 max-w-6xl space-y-5">
      <HeroSection />
      <ProfileSection />
    </main>
  );
}
