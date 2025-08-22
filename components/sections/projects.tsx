"use client";

import { FadeIn } from "@/animations/fade-in";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ScrollVelocity from "../ui/scroll-velocity";

// --- Mock Projects ---
const projects = [
  {
    src: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js + Tailwind",
    category: "frontend",
  },
  {
    src: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    title: "Anime App",
    description: "Discover and stream anime effortlessly",
    category: "fullstack",
  },
  {
    src: "https://media.giphy.com/media/l0HlQ7LRal6rQ9XEA/giphy.gif",
    title: "AI Assistant",
    description: "Chatbot powered by OpenAI GPT",
    category: "backend",
  },
  {
    src: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
    title: "Design System",
    description: "Reusable components with Shadcn/UI",
    category: "frontend",
  },
  {
    src: "https://media.giphy.com/media/l0HlQ7LRal6rQ9XEA/giphy.gif",
    title: "E-Commerce Platform",
    description: "Fullstack shop with payments",
    category: "fullstack",
  },
  {
    src: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    title: "API Service",
    description: "REST + GraphQL backend",
    category: "backend",
  },
];

// --- Available filters ---
const categories = ["all", "frontend", "fullstack", "backend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <FadeIn>
      <section>
        <div className="space-y-10 my-12">
          <ScrollVelocity
            texts={["Scroll Down 👇", "Projects Section ✦"]}
            velocity={100}
            className="custom-scroll-text text-foreground"
          />

          {/* --- Filter Buttons --- */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* --- Project Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

function ProjectCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="col-span-2 aspect-square border-2 rounded-md overflow-hidden relative group cursor-pointer">
      {/* Image */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
      />

      {/* Overlay text (desktop hover) */}
      <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center text-center text-white p-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>

      {/* Mobile text (always visible below image) */}
      <div className="md:hidden p-2 text-center">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
