import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/constants/projects";

// Device mockup components
function DesktopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto">
      {/* Desktop frame */}
      <div className="relative bg-gray-800 rounded-t-lg p-2">
        <div className="flex items-center space-x-2 mb-2"></div>
        <div className="bg-white rounded-sm overflow-hidden aspect-video">
          <img
            src={
              src ||
              "/placeholder.svg?height=600&width=1200&query=desktop app interface"
            }
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Base */}
      <div className="w-full h-6 bg-gray-700 rounded-b-lg"></div>
      <div className="w-32 h-2 bg-gray-600 mx-auto rounded-b-sm"></div>
    </div>
  );
}

function MobileMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-64">
      {/* Phone frame */}
      <div className="relative bg-gray-800 rounded-3xl p-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-800 rounded-b-xl z-10"></div>
        <div className="bg-white rounded-2xl overflow-hidden mt-4 aspect-[325/703]">
          <img
            src={
              src ||
              "/placeholder.svg?height=800&width=400&query=mobile app interface"
            }
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Home indicator */}
        <div className="w-32 h-1 bg-gray-600 mx-auto mt-2 rounded-full"></div>
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="shell mt-20 mb-10 md:mb-20">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      {/* Project header */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="subheading">{project.description}</p>
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project meta */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>
            Category:{" "}
            <Badge variant="secondary">
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Badge>
          </span>
          <span>Year: {project.year}</span>
        </div>

        {/* Tech stack */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-base px-4 py-2 rounded-lg"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <p className="subheading">{project.longDescription}</p>
      </div>

      {/* Project images */}
      <div className="space-y-12">
        <div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
            {/* Desktop mockup */}
            <div className="flex-2">
              <DesktopMockup
                src={project.images.desktop}
                alt={`${project.title} desktop view`}
              />
            </div>

            {/* Mobile mockup */}
            <div className="flex-1 flex flex-col items-center">
              <MobileMockup
                src={project.images.mobile}
                alt={`${project.title} mobile view`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
