"use client";

import { FadeIn } from "@/animations/fade-in";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/constants/projects";

// --- Available filters ---
const categories = ["all", "frontend", "fullstack", "backend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(
          (p) => p.category.toLowerCase().replace(/\s+/g, "") === activeCategory
        );

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
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              desktop={project.images.desktop}
              gif={project.images.gif}
            />
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

function ProjectCard({
  desktop,
  gif,
  title,
  description,
  slug,
}: {
  desktop: string;
  gif?: string;
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="col-span-2 border-2 rounded-md overflow-hidden relative group cursor-pointer block aspect-video"
    >
      {/* Default static image */}
      <img
        src={
          desktop ||
          "/placeholder.svg?height=400&width=400&query=project placeholder"
        }
        alt={title}
        className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-105"
      />

      {/* GIF overlay (hidden until hover) */}
      {gif && (
        <img
          src={gif}
          alt={`${title} preview`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

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
