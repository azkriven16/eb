"use client";

import { Button } from "@/components/ui/button";
import { Social } from "@/constants/social";
import Link from "next/link";
import { useState } from "react";
import Terminal from "./terminal";
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  function getHeroImage() {
    if (isHovered) {
      return "/laptop-error.svg";
    } else {
      return "/laptop-guy.svg";
    }
  }

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center gap-5 md:gap-10 p-5 md:p-10 mt-10"
    >
      <div className="sm:w-3/4 md:w-2/3 text-center md:text-left flex flex-col gap-2 md:gap-5">
        <h1 className="font-bold text-3xl md:text-5xl whitespace-nowrap">
          Web Developer / <br />
          Software Engineer
        </h1>

        <Terminal />

        <div className="flex gap-2 self-center md:self-start">
          {Social.map((social) => (
            <Link key={social.text} href={social.href} target="_blank">
              <Button size="icon" variant="ghost">
                <social.icon className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-1/2 md:w-2/3">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <img
            alt="Hero Image"
            src={getHeroImage()}
            height={500}
            width={500}
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
