import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
  description:
    "Portfolio of Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Showcasing projects, web development skills, and fullstack experience with React, Next.js, and TypeScript.",
  keywords: [
    "Euger Bonete",
    "Euger C. Bonete Jr.",
    "software engineer portfolio",
    "frontend developer",
    "fullstack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer philippines",
    "tech enthusiast",
  ],
  openGraph: {
    title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
    description:
      "Explore the portfolio of Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Discover projects, skills, and experience in React, Next.js, and modern web technologies.",
    url: "https://euger.vercel.app",
    siteName: "Euger C. Bonete Jr. Portfolio",
    images: [
      {
        url: "https://euger.vercel.app/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Euger C. Bonete Jr. Portfolio Preview",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
    description:
      "Check out the portfolio of Euger C. Bonete Jr., Software Engineer & Tech Enthusiast from the Philippines. Featuring React, Next.js, and TypeScript projects.",
    images: ["https://euger.vercel.app/images/og-preview.png"],
    creator: "@EugerBonete",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/**
 * Page-specific metadata
 */
export const pageMetadata = {
  about: {
    ...siteMetadata,
    title: "About - Euger C. Bonete Jr.",
    description:
      "Learn more about Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Discover his journey, skills, and passion for building web applications with React, Next.js, and TypeScript.",
    openGraph: {
      ...siteMetadata.openGraph,
      title: "About - Euger C. Bonete Jr.",
      description:
        "Get to know Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Learn about his skills, projects, and development experience.",
      url: "https://euger.vercel.app/about",
    },
    twitter: {
      ...siteMetadata.twitter,
      title: "About - Euger C. Bonete Jr.",
      description:
        "Discover more about Euger C. Bonete Jr., Software Engineer & Tech Enthusiast from the Philippines.",
    },
  },
  contact: {
    ...siteMetadata,
    title: "Contact - Euger C. Bonete Jr.",
    description:
      "Get in touch with Euger C. Bonete Jr., Software Engineer and Tech Enthusiast from the Philippines. Reach out for collaborations, freelance opportunities, or tech discussions.",
    openGraph: {
      ...siteMetadata.openGraph,
      title: "Contact - Euger C. Bonete Jr.",
      description:
        "Reach out to Euger C. Bonete Jr. for collaborations, freelance work, or tech conversations.",
      url: "https://euger.vercel.app/contact",
    },
    twitter: {
      ...siteMetadata.twitter,
      title: "Contact - Euger C. Bonete Jr.",
      description:
        "Reach out to Euger C. Bonete Jr. for collaborations, freelance projects, or tech discussions.",
    },
  },
  projects: {
    ...siteMetadata,
    title: "Projects - Euger C. Bonete Jr.",
    description:
      "Explore the projects of Euger C. Bonete Jr., showcasing skills in React, Next.js, TypeScript, and fullstack web development.",
    openGraph: {
      ...siteMetadata.openGraph,
      title: "Projects - Euger C. Bonete Jr.",
      description:
        "Discover the projects and works of Euger C. Bonete Jr., built with React, Next.js, and modern web technologies.",
      url: "https://euger.vercel.app/projects",
    },
    twitter: {
      ...siteMetadata.twitter,
      title: "Projects - Euger C. Bonete Jr.",
      description:
        "Explore the projects of Euger C. Bonete Jr., showcasing web development skills and fullstack experience.",
    },
  },
  chat: {
    ...siteMetadata,
    title: "AI Chat - Euger C. Bonete Jr.",
    description:
      "Chat with Euger C. Bonete Jr.’s AI-powered assistant. Ask questions, explore projects, and learn more about his work as a Software Engineer.",
    openGraph: {
      ...siteMetadata.openGraph,
      title: "AI Chat - Euger C. Bonete Jr.",
      description:
        "Interact with the AI Chat of Euger C. Bonete Jr., Software Engineer and Tech Enthusiast.",
      url: "https://euger.vercel.app/chat",
    },
    twitter: {
      ...siteMetadata.twitter,
      title: "AI Chat - Euger C. Bonete Jr.",
      description:
        "Talk with the AI Chat assistant of Euger C. Bonete Jr., Software Engineer from the Philippines.",
    },
  },
  guestbook: {
    ...siteMetadata,
    title: "Guestbook - Euger C. Bonete Jr.",
    description:
      "Leave a message in the guestbook of Euger C. Bonete Jr. Share your thoughts, feedback, or just say hi!",
    openGraph: {
      ...siteMetadata.openGraph,
      title: "Guestbook - Euger C. Bonete Jr.",
      description:
        "Sign the guestbook of Euger C. Bonete Jr. and leave your message or feedback.",
      url: "https://euger.vercel.app/guestbook",
    },
    twitter: {
      ...siteMetadata.twitter,
      title: "Guestbook - Euger C. Bonete Jr.",
      description:
        "Leave a message in the guestbook of Euger C. Bonete Jr. and share your thoughts.",
    },
  },
};
