"use client";

import { FadeIn } from "@/animations/fade-in";
import { SectionHeader } from "../section-header";
import Lanyard from "../ui/lanyard";

export function ProfileSection() {
  return (
    <FadeIn>
      <section className="flex flex-col-reverse lg:flex-row h-full w-full">
        <div className="flex-1 pt-[350px] sm:pt-[450px] md:pt-[700px] lg:pt-0">
          <div className="space-y-5">
            <SectionHeader
              icon="🙋‍♂️"
              title="A bit about myself"
              highlight="4 years ago"
              description="  I started coding about 4 years ago
                — and recently graduated with a Bachelor of Science in
                Information Technology degree in 2025. Over the years, I’ve
                gained hands-on experience through internships and part-time
                roles at various tech companies and startups."
            />
            <div className="space-y-3"></div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Bio</h3>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2003</p>
                <p>Born in Roxas City, Philippines</p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2022</p>
                <p>
                  Software Engineering Intern at{" "}
                  <a
                    target="_blank"
                    href="https://www.digipay.ph/"
                    className="cursor-target external-link"
                  >
                    Digipay
                  </a>
                </p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2024</p>
                <p>
                  Part-time Software Developer at{" "}
                  <a
                    target="_blank"
                    href="https://rocketshyft.com/"
                    className="cursor-target external-link"
                  >
                    Rocketshyft
                  </a>
                </p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2025</p>
                <p>
                  Graduated with a Bachelor of Science in Information Technology
                  at{" "}
                  <a
                    target="_blank"
                    href="https://rocketshyft.com/"
                    className="cursor-target external-link"
                  >
                    Northern Iloilo State University
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative hover:grayscale-0 md:grayscale transition duration-300">
          <Lanyard />
        </div>
      </section>
    </FadeIn>
  );
}
