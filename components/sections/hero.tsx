import { MonitorIcon } from "lucide-react";
import Lanyard from "@/components/ui/lanyard";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import TextType from "@/components/ui/type-text";

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row h-full w-full">
      <Hero />
      <div className="flex-1 bg-transparent -z-10" />
      <Lanyard />
    </section>
  );
};

function Hero() {
  return (
    <div className="flex-1 space-y-5 pt-20 mt-[350px] lg:mt-0">
      <Button variant="secondary" className="cursor-target animate-wiggle">
        Welcome to my corner of the web!
      </Button>
      <div className="flex flex-col gap-2 relative">
        <p className="heading">Hello,</p>
        <div className="px-3 py-2 hidden sm:block absolute top-0 left-16 sm:left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
          Stranger
        </div>
        <div className="px-3 py-2 hidden sm:block absolute top-5 right-0 sm:right-20 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
          🌍 Iloilo, Philippines
        </div>
        <div className="flex gap-2 items-center">
          <p className="heading">I&apos;m</p>
          <h1 className="heading">
            <SparklesText>Euger Bonete</SparklesText>
          </h1>
        </div>
      </div>
      {/* Terminal Window */}
      <div className={`rounded-lg border-2 shadow-2xl overflow-hidden `}>
        {/* Terminal Title Bar */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b `}
        >
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span
              className={`text-sm font-medium text-muted-foreground font-mono ml-4`}
            >
              {/* ℑ𝔱 𝔞𝔩𝔴𝔞𝔶𝔰 𝔰𝔢𝔢𝔪𝔰 𝔦𝔪𝔭𝔬𝔰𝔰𝔦𝔟𝔩𝔢 𝔲𝔫𝔱𝔦𝔩 𝔦𝔱'𝔰 𝔡𝔬𝔫𝔢.  */}
              It always seems impossible until it&apos;s done.
              {/* Life before death, strength before weakness, journey before
              destination */}
            </span>
          </div>
          <MonitorIcon size={16} />
        </div>

        {/* Terminal Content */}
        <div className="p-2 lg:p-4 font-mono">
          {/* Main typing animation - single line */}
          <div className="text-sm lg:text-base font-bold">
            <span className={""}>ɛʊɢɛʀ == </span>
            <span className={""}>
              <TextType
                className="text-green-500"
                text={["ReactJS", "NextJS", "Fullstack"]}
                typingSpeed={150}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="|"
              />
              <span className="ml-1">Developer</span>
            </span>
          </div>
        </div>
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
