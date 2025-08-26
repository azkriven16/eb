"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { projectsData } from "@/constants/projects";
import Link from "next/link";
import { FadeIn } from "@/animations/fade-in";

// Available filters
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
      <section className="space-y-10">
        {/* Filter Buttons */}
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-card rounded-2xl overflow-hidden group cursor-pointer aspect-square">
        <div className="relative p-4">
          <div className="relative overflow-hidden rounded-xl">
            {/* Static image */}
            <img
              src={
                project.images.desktop ||
                "/placeholder.svg?height=400&width=400&query=project placeholder"
              }
              alt={project.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-500"
            />

            {/* Hover GIF overlay */}
            {project.images.gif && (
              <img
                src={project.images.gif}
                alt={`${project.title} preview`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {project.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
