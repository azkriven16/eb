"use client";

import { FadeIn } from "@/animations/fade-in";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const projectsData = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js + Tailwind",
    category: "frontend",
    src: "/modern-portfolio-website-desktop-mockup.png",
  },
  {
    slug: "anime-app",
    title: "Anime Discovery App",
    description: "Discover and stream anime effortlessly",
    category: "fullstack",
    src: "/anime-discovery-app-desktop-interface.png",
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant Chatbot",
    description: "Chatbot powered by OpenAI GPT",
    category: "backend",
    src: "/ai-chatbot-interface-desktop.png",
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description: "Reusable components with Shadcn/UI",
    category: "frontend",
    src: "/design-system-component-library-desktop.png",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Fullstack shop with payments",
    category: "fullstack",
    src: "/e-commerce-platform-desktop-interface.png",
  },
  {
    slug: "api-service",
    title: "REST & GraphQL API Service",
    description: "REST + GraphQL backend",
    category: "backend",
    src: "/api-documentation-interface-desktop.png",
  },
];

// --- Available filters ---
const categories = ["all", "frontend", "fullstack", "backend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <FadeIn>
      <section>
        <div className="space-y-10 py-5 md:py-10">
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
  slug,
}: {
  src: string;
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="col-span-2 aspect-square border-2 rounded-md overflow-hidden relative group cursor-pointer block"
    >
      {/* Image */}
      <img
        src={
          src ||
          "/placeholder.svg?height=400&width=400&query=project placeholder"
        }
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
    </Link>
  );
}
