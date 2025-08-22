import { FadeIn } from "@/animations/fade-in";
import { Highlighter } from "../ui/highlighter";
import ScrollVelocity from "../ui/scroll-velocity";

export const ProjectsSection = () => {
  return (
    <FadeIn>
      <section>
        <div className="space-y-10 my-20">
          <ScrollVelocity
            texts={["Scroll Down 👇", "Projects Section👇"]}
            velocity={100}
            className="custom-scroll-text text-foreground"
          />
          <p className="subheading">
            I specialize in{" "}
            <Highlighter
              className="px-1 text-foreground"
              action="box"
              color="oklch(63.7% 0.237 25.331)"
            >
              fullstack development
            </Highlighter>
            , crafting beautiful and interactive digital experiences from
            creative concepts and business ideas. I leverage{" "}
            <Highlighter
              className="text-foreground"
              action="underline"
              color="oklch(79.5% 0.184 86.047)"
            >
              React, Next.js, and Typescript
            </Highlighter>{" "}
            to write clean and maintainable code 🌻.
            <br />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <ProjectCard
            src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
            title="Portfolio Website"
            description="A modern portfolio built with Next.js + Tailwind"
          />
          <ProjectCard
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            title="Anime App"
            description="Discover and stream anime effortlessly"
          />
          <ProjectCard
            src="https://media.giphy.com/media/l0HlQ7LRal6rQ9XEA/giphy.gif"
            title="AI Assistant"
            description="Chatbot powered by OpenAI GPT"
          />
          <ProjectCard
            src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
            title="Design System"
            description="Reusable components with Shadcn/UI"
          />
          <ProjectCard
            src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
            title="Design System"
            description="Reusable components with Shadcn/UI"
          />
          <ProjectCard
            src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
            title="Design System"
            description="Reusable components with Shadcn/UI"
          />
        </div>
      </section>
    </FadeIn>
  );
};

function ProjectCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="col-span-2 aspect-square border-2 rounded-md overflow-hidden relative group cursor-target">
      {/* Image */}
      <img
        src={src}
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
    </div>
  );
}
