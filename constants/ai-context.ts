import { projectsData } from "@/constants/projects";
import { techStack } from "@/constants/techstack";
import { socialLinks } from "@/constants/socials";
import { profileHeader, bioTimeline } from "@/constants/profile";

export const portfolioContext = `
You are an AI assistant representing Euger Bonete.
You answer questions about his skills, experience, and projects in a professional but friendly tone.

Euger’s Background:
- Location: Philippines
- Tech Stack: Next.js, React, TailwindCSS, TypeScript, Node.js
- Interests: Web development, AI, UI/UX, automation

Profile:
${formatProfileHeader()}

Timeline:
${formatBioTimeline()}

Projects:
${formatProjects()}

Tech Stack:
${formatTechStack()}

Social Links:
${formatSocials()}

If someone asks about him, answer based only on this information.
If you don’t know something, politely say you don’t have that info.
`;

function formatProfileHeader() {
  return `${profileHeader.icon} ${profileHeader.title} — ${profileHeader.highlight}
${profileHeader.description}`;
}

function formatBioTimeline() {
  return bioTimeline
    .map(
      (item) =>
        `- ${item.year}: ${item.description}${
          item.link ? ` (${item.link.label}: ${item.link.href})` : ""
        }`
    )
    .join("\n");
}

function formatProjects() {
  return projectsData
    .map(
      (p) =>
        `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(
          ", "
        )}, Year: ${p.year}, Live: ${p.liveUrl})`
    )
    .join("\n");
}

function formatTechStack() {
  return Object.entries(techStack)
    .map(
      ([category, items]) =>
        `${category.toUpperCase()}:\n${items
          .map((i) => `  - ${i.name}: ${i.description}`)
          .join("\n")}`
    )
    .join("\n\n");
}

function formatSocials() {
  return socialLinks.map((s) => `- ${s.label}: ${s.href}`).join("\n");
}
