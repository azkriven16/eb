"use client";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import Lanyard from "@/components/ui/lanyard";
import { SparklesText } from "@/components/ui/sparkles-text";
import TextType from "@/components/ui/type-text";

export default function Page() {
  return (
    <main className="container mx-auto px-4 max-w-6xl">
      {/* Hero section */}
      <div className="flex flex-col-reverse lg:flex-row h-full w-full">
        <Hero />
        <div className="flex-1 bg-transparent -z-10" />
        <Lanyard />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugiat
        porro magnam, nesciunt quis tempore fugit perferendis non illum
        voluptates exercitationem enim quidem voluptatum, aspernatur rem optio
        id voluptate repellat?
      </div>
    </main>
  );
}

function Hero() {
  return (
    <div className="flex-1 space-y-5 pt-20 mt-[350px] lg:mt-0">
      <Button variant="secondary" className="cursor-target">
        Welcome to my corner of the web!
      </Button>
      <div className="flex flex-col gap-2">
        <p className="heading">Hello,</p>
        <div className="flex gap-2 items-center">
          <p className="heading">I&apos;m</p>
          <h1 className="heading">
            <SparklesText>Euger Bonete</SparklesText>
          </h1>
        </div>
      </div>
      <div className="heading flex bg-primary text-primary-foreground rounded-md p-2 lg:p-5 lg:w-fit w-full">
        <TextType
          text={["ReactJS", "NextJS", "Fullstack"]}
          typingSpeed={150}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
        />
        <span className="ml-1">Developer</span>
      </div>
      <div className="">
        <p className="leading-relaxed text-lg tracking-wide">
          I specialize in{" "}
          <Highlighter className="px-1" action="highlight" color="#87CEFA">
            frontend development 🚀
          </Highlighter>{" "}
          with{" "}
          <Highlighter action="underline" color="#FF9800">
            React, Next.js, and Tailwind.
          </Highlighter>{" "}
          Turning ideas into reality through clean, scalable code 💻✨
          <br />
        </p>
      </div>
    </div>
  );
}
