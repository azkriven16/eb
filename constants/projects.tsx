import {
  FaTwitter,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export const socialLinks = [
  {
    href: "https://x.com/EugerBonete",
    icon: <FaTwitter />,
    label: "Twitter @ EugerBonete",
  },
  {
    href: "https://www.facebook.com/euger.bonete.9/",
    icon: <FaFacebookMessenger />,
    label: "Facebook @ euger.bonete.9",
  },
  {
    href: "https://www.linkedin.com/in/euger-bonete/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn @ euger-bonete",
  },
  {
    href: "mailto:eugerbone@email.com",
    icon: <FaEnvelope />,
    label: "Email @ eugerbone@email.com",
  },
  {
    href: "https://github.com/azkriven16/",
    icon: <FaGithub />,
    label: "Github @ azkriven16",
  },
];

export const projectsData = [
  {
    slug: "new-portfolio",
    title: "New Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui, featuring animations, interactive components, and responsive design.",
    longDescription:
      "My latest portfolio built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. It highlights my projects and skills through a clean, responsive design with smooth animations powered by Motion and GSAP. Features include command menus, toast notifications, dark/light themes, and interactive 3D visuals using Three.js. Optimized with code-splitting and lazy loading, this site balances performance, interactivity, and design.",
    category: "Frontend",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Motion",
      "GSAP",
      "Three.js",
    ],
    images: {
      desktop: "/images/new-portfolio-desktop.png",
      mobile: "/images/new-portfolio-mobile.png",
      gif: "/images/new-portfolio.gif",
    },
    liveUrl: "https://euger.vercel.app/",
    githubUrl: "https://github.com/azkriven16/eb/",
    year: "2025",
  },
  {
    slug: "bye-anime",
    title: "Bye Anime",
    description:
      "An anime streaming and discovery website built with Next.js, TypeScript, and shadcn/ui for a modern, polished experience.",
    longDescription:
      "A full-featured anime streaming platform built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Users can browse, search, and watch anime with progress tracking, dark/light themes, and smooth animations. Powered by React Query and tRPC for fast, type-safe APIs, with carousels, toast notifications, and responsive design for a polished experience.",
    category: "Full Stack",
    techStack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "React Query",
      "TailwindCSS",
      "shadcn/ui",
    ],
    images: {
      desktop: "/images/bye-anime-desktop.png",
      mobile: "/images/bye-anime-mobile.png",
      gif: "/images/bye-anime.gif",
    },
    liveUrl: "https://shop.example.com", // replace with actual live demo link if available
    githubUrl: "https://github.com/user/e-commerce", // replace with actual repo link
    year: "2025",
  },
  {
    slug: "old-portfolio",
    title: "Old Portfolio Website",
    description:
      "A 3D interactive portfolio built with Next.js, Three.js, and Framer Motion, showcasing projects and contact features.",
    longDescription:
      "An earlier portfolio built with Next.js and Tailwind CSS, featuring 3D animations via Three.js and Framer Motion. Includes smooth transitions, responsive layouts, and a working contact form with EmailJS, showcasing interactive design and modern frontend practices.",
    category: "Frontend",
    techStack: [
      "Next.js",
      "Typescript",
      "Three.js",
      "Framer Motion",
      "EmailJS",
      "TailwindCSS",
    ],
    images: {
      desktop: "/images/old-portfolio-desktop.png",
      mobile: "/images/old-portfolio-mobile.png",
      gif: "/images/old-portfolio.gif",
    },
    liveUrl: "https://eb-p.vercel.app/",
    githubUrl: "https://github.com/azkriven16/ebp/",
    year: "2023",
  },
  {
    slug: "coffee-website",
    title: "Coffee Website",
    description:
      "A stylish coffee shop website built with HTML, CSS, and JavaScript, featuring smooth animations and responsive design.",
    longDescription:
      "A modern coffee shop website made with pure HTML, CSS, and JavaScript. It features smooth animations, responsive design, and interactive navigation. Sections highlight products, reviews, and brand identity, showing how core web technologies can create a polished, professional site.",
    category: "Frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: {
      desktop: "/images/coffee-desktop.png",
      mobile: "/images/coffee-mobile.png",
      gif: "/images/coffee.gif",
    },
    liveUrl: "https://ocoffee.netlify.app/",
    githubUrl: "https://github.com/azkriven16/coffee/",
    year: "2023",
  },
  {
    slug: "blog-app",
    title: "What The Blog",
    description:
      "A simple, modern blog app built with Next.js, TypeScript, and Tailwind CSS. Features MDX support for writing posts with both Markdown and React components.",
    longDescription:
      "A lightweight blog app built with Next.js 14, TypeScript, and Tailwind CSS. Supports MDX for writing posts with both Markdown and React components. Includes responsive design, light/dark mode, and typography enhancements, offering a clean and flexible way to publish content.",
    category: "Full Stack",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "MDX", "Next Themes"],
    images: {
      desktop: "/images/blog-app-desktop.png",
      mobile: "/images/blog-app-mobile.png",
      // gif: "/images/blog-app-preview.gif",
    },
    liveUrl: "https://what-the-blog.vercel.app/",
    githubUrl: "https://github.com/azkriven16/what-the-blog/",
    year: "2023",
  },
];
