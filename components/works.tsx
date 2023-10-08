"use client";

import { Card, Chip } from "@nextui-org/react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { Button } from "./ui/button";
import Link from "next/link";
import { Projects } from "@/constants/projects";
import Skills from "./skills";

export default function Works() {
  return (
    <section className="p-5 md:p-10 space-y-5" id="works">
      <div className="my-10"></div>
      <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap pt-2">
        Works
      </h1>

      <div className="grid grid-cols-1 gap-5 pt-2">
        {Projects.map((project) => (
          <Card key={project.text}>
            <div className="flex flex-col md:flex-row p-5">
              <div className="flex-1 space-y-2 md:space-y-4">
                {project.libs.map((lib) => (
                  <Chip key={lib} size="sm" className="mr-2">
                    {lib}
                  </Chip>
                ))}
                <h3 className="font-bold text-2xl">Ani10</h3>
                <p className="text-sm">
                  Watching or streaming anime, it has the following features:
                  searching for anime, watching episodes, and accessing detailed
                  information about the anime series.
                </p>
                <div className="flex gap-5">
                  <Link href={project.href} target="_blank">
                    <Button>
                      <BiLinkExternal className="mr-2 h-4 w-4" /> Live Site
                    </Button>
                  </Link>
                  <Link href={project.source} target="_blank">
                    <Button variant="secondary">
                      <BiLogoGithub className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                  </Link>
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
