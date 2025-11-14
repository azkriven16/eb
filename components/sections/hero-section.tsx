import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Experience } from "@/components/ui/experience";
import { ArrowRightIcon } from "lucide-react";
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiBluesky, SiThreads } from "react-icons/si"; // Adding any other needed icons
import { LinkPreview } from "../ui/link-preview";
import { ContactModal } from "../contact-modal";

export function HeroSection() {
  return (
    <section>
      <Experience />
      <HeroContent />
    </section>
  );
}

function HeroContent() {
  const work = [
    {
      name: "Digipay",
      icon: (
        <img
          src="https://digipay.ph/wp-content/uploads/2024/06/cropped-digipay-favicon.png"
          alt="Digipay logo"
          className="w-4 h-4"
        />
      ),
    },
    {
      name: "Rocketshyft",
      icon: (
        <img
          src="https://unicorn-images.b-cdn.net/d7de9df6-ba94-4678-93b9-e4acc292cf4f?optimizer=gif"
          alt="Rocketshyft logo"
          className="w-4 h-4"
        />
      ),
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub size={20} /> },
    { name: "Bluesky", icon: <SiBluesky size={20} /> },
    { name: "Threads", icon: <SiThreads size={20} /> },
    { name: "Discord", icon: <FaDiscord size={20} /> },
    { name: "YouTube", icon: <FaYoutube size={20} /> },
    { name: "Instagram", icon: <FaInstagram size={20} /> },
  ];

  return (
    <div className="mx-auto space-y-6 w-full text-muted-foreground font-inter font-medium text-base flex flex-col">
      <h1 className="text-3xl font-semibold font-work-sans">
        Euger Bonete Jr.
      </h1>
      <div>
        I specialize in react development, crafting beautiful and interactive
        digital experiences from creative concepts and business ideas. Currently
        working as a freelance developer. I also blog my coding
        <LinkPreview
          url="https://tailwindcss.com"
          className="ml-1 font-semibold underline underline-offset-4 "
        >
          view my blogs here.
        </LinkPreview>
      </div>
      <div className="text-muted-foreground flex flex-wrap items-center gap-2">
        <span>Previously worked on</span>
        <span className="flex flex-wrap gap-2">
          {work.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors"
            >
              <span className="text-base">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </span>
          ))}
        </span>
      </div>

      <div>
        Dreaming up cool ideas and making them come true is where my passion
        lies. I am enthusiastic about building tools that help myself and others
        to be more productive and enjoy the process of crafting. You can find my
        <LinkPreview
          url="https://tailwindcss.com"
          className="ml-1 font-semibold underline underline-offset-4 "
        >
          full projects list here.
        </LinkPreview>
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-2">
        <span className="text-base">Find me on</span>
        <div className="flex flex-wrap gap-2 sm:flex-row">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase()}`}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors sm:text-base text-sm"
            >
              {link.icon}
              <span className="text-sm font-medium sm:text-base">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div>
        Or contact me through
        <ContactModal />
      </div>

      <div>
        Meanwhile, you can ask
        <LinkPreview
          url="https://tailwindcss.com"
          className="mx-1 font-semibold underline underline-offset-4 "
        >
          my ai chatbot
        </LinkPreview>
        for more inquries and questions about me.
      </div>

      <div>
        If you enjoy my work and find them useful, this project is
        <LinkPreview
          url="https://tailwindcss.com"
          className="mx-1 font-semibold underline underline-offset-4 "
        >
          open source here.
        </LinkPreview>
        It would be nice if you also leave a star, Thank you!
      </div>
      {/* <Button
        size="lg"
        className="rounded-full pl-2 mt-10 w-fit self-center group"
      >
        <Avatar className="size-6">
          <AvatarImage
            src="http://github.com/azkriven16.png"
            alt="Hallie Richards"
          />
          <AvatarFallback className="text-foreground text-xs">
            EB
          </AvatarFallback>
        </Avatar>
        My Projects
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button> */}
    </div>
  );
}
