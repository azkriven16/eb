"use client";
import { Card, CardFooter, Chip, Image } from "@nextui-org/react";
import { Separator } from "./ui/separator";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { Button } from "./ui/button";
const Skills = [
  {
    text: "HTML",
    icon: SiHtml5,
  },
  {
    text: "CSS",
    icon: SiCss3,
  },
  {
    text: "Javascript",
    icon: SiJavascript,
  },
  {
    text: "React JS",
    icon: SiReact,
  },
  {
    text: "Next JS",
    icon: TbBrandNextjs,
  },
  {
    text: "Typescript",
    icon: SiTypescript,
  },
  {
    text: "Supabase",
    icon: SiSupabase,
  },
  {
    text: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

const Projects = [
  {
    text: "Ani10",
    href: "https://ani10.vercel.app/",
    img: "/ani102.png",
    libs: ["React JS", "Chakra UI", "Redux Toolkit", "Axios", "Video.JS"],
  },
];
export default function Works() {
  return (
    <section id="works" className="p-5 md:p-10 space-y-5">
      <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap">
        Skills
      </h1>
      <Separator />
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2">
        {Skills.map((skill) => (
          <Card radius="none" className="rounded-sm px-2 py-1">
            <div className="flex items-center text-sm gap-1">
              <skill.icon />
              {skill.text}
            </div>
          </Card>
        ))}
      </div>
      <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap pt-2">
        Works
      </h1>
      <div className="grid grid-cols-1 gap-5 pt-2">
        {Projects.map((project) => (
          <Card>
            <div className="flex flex-col md:flex-row p-5">
              <div className="flex-1 space-y-2 md:space-y-4">
                {project.libs.map((lib) => (
                  <Chip className="mr-2">{lib}</Chip>
                ))}
                <h3 className="font-bold text-2xl">Ani10</h3>
                <p className="text-sm">
                  Watching or streaming anime, it has the following features:
                  searching for anime, watching episodes, and accessing detailed
                  information about the anime series.
                </p>
                <div className="flex gap-5">
                  <Button>
                    <BiLinkExternal className="mr-2 h-4 w-4" /> Live Site
                  </Button>
                  <Button>
                    <BiLogoGithub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Created at : 2021
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={project.img}
                  alt=""
                  className="hidden md:block h-[220px] object-cover"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
