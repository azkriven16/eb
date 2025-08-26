import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiVercel,
  SiGithub,
  SiGit,
  SiPrisma,
  SiPostman,
  SiFirebase,
} from "react-icons/si";
import { TbDatabase, TbBrain } from "react-icons/tb"; // Drizzle + AI Assistant
import { RiStackshareFill } from "react-icons/ri"; // Convex (no official icon)

export const techStack = {
  frontend: [
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      description: "The foundation of web structure and content.",
    },
    {
      name: "CSS3",
      icon: <SiCss3 />,
      description: "Stylesheet language for designing modern, responsive UIs.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      description: "Dynamic scripting language powering interactivity.",
    },
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
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL database for flexible and scalable data storage.",
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      description: "Next-gen ORM for databases with type safety.",
    },
    {
      name: "Drizzle",
      icon: <TbDatabase />,
      description: "Lightweight TypeScript ORM for SQL databases.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      description: "Backend-as-a-Service for auth, database, and hosting.",
    },
    {
      name: "Convex",
      icon: <RiStackshareFill />,
      description: "Reactive backend framework for real-time apps.",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: <SiGit />,
      description: "Version control system for tracking changes.",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      description: "Collaboration and hosting platform for Git repositories.",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      description: "API testing and collaboration tool.",
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
    {
      name: "AI Assistant",
      icon: <TbBrain />,
      description: "ChatGPT and AI coding assistants for faster dev workflows.",
    },
  ],
};
