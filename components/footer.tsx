import React from "react";
import Logo from "./logo";
import { Projects } from "@/constants/projects";
import { menuItems } from "@/constants/navItems";
import { Social } from "@/constants/social";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto p-5 md:p-9 flex flex-col md:flex-row justify-between gap-10 my-10">
      <div className="space-y-3 flex-1">
        <Logo />
        <p className="text-medium font-semibold">
          Simplifying Complexity, Embracing Progress.
        </p>
        <p className="text-sm text-muted-foreground">
          © Euger Bonete 2023. All rights reserved.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-2 flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-medium">Pages</h3>
          {menuItems.map((menu) => (
            <a
              href={`#${menu.toLowerCase()}`}
              className="text-sm text-muted-foreground"
            >
              {menu}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-medium">Works</h3>
          {Projects.map((project) => (
            <a
              href={project.href}
              target="_blank"
              className="text-sm text-muted-foreground"
            >
              {project.text}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-medium">Connect</h3>
          {Social.map((social) => (
            <a
              href={social.href}
              target="_blank"
              className="text-sm text-muted-foreground"
            >
              {social.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
