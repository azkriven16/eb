"use client";

import { FadeIn } from "@/animations/fade-in";
import { techStack } from "@/constants/techstack";
import { SectionHeader } from "../section-header";

export function TechStackSection() {
  return (
    <FadeIn>
      <section className="space-y-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="space-y-5">
            <SectionHeader
              icon="🪔"
              title="A bit of my craftsmanship"
              highlight="tools and technologies"
              description=" These are the core tools and technologies I use to build,
                design, and ship projects—from frontend experiences to backend
                systems."
            />

            <div className="flex flex-col md:flex-row gap-5 mt-5 md:mt-10">
              {Object.entries(techStack).map(([category, items]) => (
                <div className="flex-1" key={category}>
                  <h3 className="text-xl font-bold capitalize">{category}</h3>
                  {items.map((item) => (
                    <div
                      className="flex items-center gap-3 subheading mt-3"
                      key={item.name}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs md:text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
