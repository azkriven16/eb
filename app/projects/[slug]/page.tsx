import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Enhanced project data with full details
const projectsData = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
    longDescription:
      "This portfolio website showcases my work and skills through a clean, modern interface. Built with Next.js 14 and the App Router, it features server-side rendering for optimal SEO and performance. The design system uses Tailwind CSS with custom animations and a carefully crafted color palette that works seamlessly in both light and dark modes.",
    category: "Frontend",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    images: {
      desktop: "/modern-portfolio-website-desktop-mockup.png",
      mobile: "/modern-portfolio-website-mobile-mockup.png",
    },
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/user/portfolio",
    year: "2024",
  },
  {
    slug: "anime-app",
    title: "Anime Discovery App",
    description:
      "A full-stack application for discovering and tracking anime series with user authentication and personalized recommendations.",
    longDescription:
      "AnimeHub is a comprehensive platform for anime enthusiasts to discover new series, track their watching progress, and get personalized recommendations. The app integrates with multiple anime databases and features a sophisticated recommendation engine powered by machine learning algorithms.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Anime API"],
    images: {
      desktop: "/anime-discovery-app-desktop-interface.png",
      mobile: "/anime-discovery-app-mobile-interface.png",
    },
    liveUrl: "https://anime-app.example.com",
    githubUrl: "https://github.com/user/anime-app",
    year: "2024",
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant Chatbot",
    description:
      "An intelligent chatbot powered by OpenAI's GPT models with context awareness and conversation memory.",
    longDescription:
      "This AI assistant provides intelligent, context-aware responses using OpenAI's latest GPT models. Features include conversation memory, custom personality settings, and integration with various APIs for enhanced functionality. The backend is built with Node.js and includes rate limiting and user authentication.",
    category: "Backend",
    techStack: [
      "Node.js",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Docker",
    ],
    images: {
      desktop: "/ai-chatbot-interface-desktop.png",
      mobile: "/ai-chatbot-interface-mobile.png",
    },
    liveUrl: "https://ai-assistant.example.com",
    githubUrl: "https://github.com/user/ai-assistant",
    year: "2024",
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive design system with reusable React components built on top of Shadcn/UI and Radix primitives.",
    longDescription:
      "A production-ready design system that provides consistent, accessible components for modern web applications. Built with TypeScript and thoroughly documented with Storybook, it includes over 50 components with full theme customization and dark mode support.",
    category: "Frontend",
    techStack: [
      "React",
      "TypeScript",
      "Shadcn/UI",
      "Radix UI",
      "Storybook",
      "Tailwind CSS",
    ],
    images: {
      desktop: "/design-system-component-library-desktop.png",
      mobile: "/design-system-component-library-mobile.png",
    },
    liveUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/user/design-system",
    year: "2024",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.",
    longDescription:
      "A complete e-commerce solution featuring product catalog management, secure payment processing with Stripe, order tracking, and a comprehensive admin dashboard. The platform supports multiple payment methods, inventory tracking, and automated email notifications.",
    category: "Full Stack",
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    images: {
      desktop: "/e-commerce-platform-desktop-interface.png",
      mobile: "/e-commerce-platform-mobile-interface.png",
    },
    liveUrl: "https://shop.example.com",
    githubUrl: "https://github.com/user/e-commerce",
    year: "2024",
  },
  {
    slug: "api-service",
    title: "REST & GraphQL API Service",
    description:
      "A scalable API service supporting both REST and GraphQL endpoints with comprehensive documentation.",
    longDescription:
      "A robust API service that provides both REST and GraphQL interfaces for maximum flexibility. Features include automatic API documentation, rate limiting, caching with Redis, comprehensive logging, and monitoring. Built with microservices architecture for scalability.",
    category: "Backend",
    techStack: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "AWS"],
    images: {
      desktop: "/api-documentation-interface-desktop.png",
      mobile: "/api-documentation-interface-mobile.png",
    },
    liveUrl: "https://api.example.com",
    githubUrl: "https://github.com/user/api-service",
    year: "2024",
  },
];

// Device mockup components
function DesktopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Desktop frame */}
      <div className="relative bg-gray-800 rounded-t-lg p-2">
        {/* Top bar with buttons */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
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
        <div className="bg-white rounded-2xl overflow-hidden mt-4 aspect-[9/16]">
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
  const p = await params;
  const project = projectsData.find((p) => p.slug === p.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="shell mt-10 md:mt-20 mb10 md:mb-20">
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
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
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
            Category: <Badge variant="secondary">{project.category}</Badge>
          </span>
          <span>Year: {project.year}</span>
        </div>

        {/* Tech stack */}
        <div>
          <h3 className="font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Project images */}
      <div className="space-y-12 mb-12">
        <div>
          {/* <h3 className="heading mb-6">Project Preview</h3> */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-12">
            {/* Desktop mockup */}
            <div className="flex-1">
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

      {/* Project details */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="subheading">{project.longDescription}</p>
      </div>
    </main>
  );
}
