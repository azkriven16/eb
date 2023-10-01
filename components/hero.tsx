import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
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
        <div className="flex gap-2 self-center md:self-start my-5">
          <Button>
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="secondary">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>

      <div className="w-1/2 md:w-2/3">
        <Image
          alt="Hero Image"
          src="/laptop-guy.svg"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
}
