"use client";

import { Button } from "@/components/ui/button";
import { Social } from "@/constants/social";
import { useState } from "react";
import Typewriter from "typewriter-effect";
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
      className="flex flex-col md:flex-row items-center gap-5 md:gap-10 p-5 md:p-10 "
    >
      <div className="sm:w-3/4 md:w-2/3 text-center md:text-left flex flex-col gap-2 md:gap-5">
        <h1 className="font-bold text-3xl md:text-5xl whitespace-nowrap">
          Web Developer / <br />
          Software Engineer
        </h1>
        <p className="text-md md:text-xl">
          Harnessing the Power of Coding to Build Seamless Web Applications
        </p>
        <p className="text-xs md:text-sm">
          <Typewriter
            options={{
              strings: [
                "Greetings, fellow sapiens! 💻😄",
                "Welcome to my portfolio! 🌐👨‍💻",
                "Im glad your here! 🤗",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div className="flex gap-2 self-center md:self-start">
          {Social.map((social) => (
            <Button size="icon" variant="ghost">
              <social.icon className="h-4 w-4" />
            </Button>
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
