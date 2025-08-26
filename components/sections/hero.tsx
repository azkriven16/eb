import { FadeIn } from "@/animations/fade-in";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import TextType from "@/components/ui/type-text";
import { MonitorIcon } from "lucide-react";
import { Compare } from "../ui/compare";

export const HeroSection = () => {
  return (
    <FadeIn>
      <Hero />
    </FadeIn>
  );
};

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1 space-y-5 pt-20 lg:mt-[350px] xl:mt-0">
        <div className="flex flex-col gap-2 relative">
          <p className="heading">Hello,</p>
          <div className="px-3 py-2 absolute top-0 left-20 sm:left-30 bg-red-500/20 rounded-[6px] w-max font-medium dark:text-red-300 text-red-500 border border-red-500/20 animate-wiggle">
            🗿 Stranger
          </div>
          <div className="px-3 py-2 absolute top-13 md:top-5 right-0 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle">
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
                className={`text-[8px] md:text-sm font-medium text-muted-foreground font-mono ml-4`}
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
              <span>
                const <span className="text-yellow-500">EUGER</span> =={" "}
              </span>
              <span className={""}>
                <TextType
                  className="text-green-500"
                  text={["ReactJS", "NextJS", "Fullstack"]}
                  typingSpeed={150}
                  pauseDuration={3000}
                  showCursor={true}
                  cursorCharacter="|"
                />
                <span className="ml-1">Developer || Coder</span>
              </span>
            </div>
          </div>
        </div>
        <p className="subheading">
          I specialize in{" "}
          <Highlighter
            className="px-1 text-foreground"
            action="box"
            color="oklch(79.5% 0.184 86.047)"
          >
            react development
          </Highlighter>
          , crafting beautiful and interactive digital experiences from creative
          concepts and business ideas. I leverage{" "}
          <span className="text-foreground">
            React, Next.js, and Typescript
          </span>{" "}
          to write clean and maintainable code 🌻.
          <br />
        </p>
      </div>
      <div className="md:flex-1 space-y-5 lg:pt-20 lg:mt-[350px] xl:mt-0">
        <Compare
          firstImage="/images/code-1.png"
          secondImage="/images/code-2.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-right-top"
          className="md:h-full md:w-full aspect-video hover:shadow-[16px_16px_32px_#bebebe,-16px_-16px_32px_#ffffff] transition-all duration-500 ease-out rounded-2xl animate-wiggle z-10"
          slideMode="hover"
        />
      </div>
    </section>
  );
}
