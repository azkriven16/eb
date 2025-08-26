import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export const techStack = {
  frontend: [
    {
      name: "React",
      icon: <SiReact />,
      description: "Modern UI framework for building interactive web apps.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      description: "Fullstack framework with SSR, routing, and optimizations.",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      description: "Utility-first CSS framework for rapid UI styling.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      description: "Strongly typed JavaScript for safer, scalable code.",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      description: "JavaScript runtime for scalable backend services.",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      description: "Lightweight web framework for REST APIs.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      description: "Reliable relational database for structured data.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL database for flexible and scalable data storage.",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      icon: <SiGithub />,
      description: "Version control and collaboration platform.",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      description: "Containerization for consistent deployments.",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      description: "Design and prototyping for UI/UX.",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      description: "Fast hosting & deployment for Next.js apps.",
    },
  ],
};
