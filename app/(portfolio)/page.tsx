import { ContactModal } from "@/components/contact-modal";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Experience } from "@/components/ui/experience";
import { TextLoop } from "@/components/ui/text-loop";
import { Tooltip } from "@/components/ui/tooltip-card";
import { ArrowRightIcon } from "lucide-react";

export default function IndexPage() {
  return (
    <main
      className="container mx-auto max-w-xl p-4 flex flex-col scroll-smooth"
      id="top"
    >
      <Experience />

      {/* Header Section */}
      <div className="mx-auto space-y-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold font-work-sans">
              Euger Bonete Jr.
            </h1>
            <div className="flex items-center mt-1 font-franktion">
              <span className="text-lg font-medium mr-1">
                Digital Craftsman
              </span>
              (
              <TextLoop className="mx-1 text-lg font-medium">
                <span>Web</span>
                <span>Software</span>
                <span>Fullstack</span>
              </TextLoop>
              <span className="text-lg font-medium">/ Developer</span>)
            </div>
          </div>

          <Avatar className="size-20 self-center">
            <AvatarImage
              src="https://github.com/azkriven16.png"
              alt="Euger Bonete Jr."
            />
            <AvatarFallback>EB</AvatarFallback>
            <AvatarIndicator className="-end-px -top-px">
              <AvatarStatus variant="online" className="size-3" />
            </AvatarIndicator>
          </Avatar>
        </div>
      </div>

      <section id="about" className="mt-10 flex flex-col">
        <h2 className="text-xl font-semibold font-work-sans">Work</h2>

        <div className="text-lg text-neutral-600 dark:text-neutral-400 text-left">
          The server was administered by
          <Tooltip
            containerClassName="text-neutral-600 dark:text-neutral-400"
            content={<TooltipCard />}
          >
            <span className="cursor-pointer font-bold">Tyler Durden.</span>
          </Tooltip>{" "}
          Tyler has been with us for a long time. He is a great asset to the
          team and sometimes tries to act in different ways which can be
          difficult to manage. That is when we approached Tyler for a cute
          little
          <Tooltip
            containerClassName="text-neutral-600 dark:text-neutral-400"
            content={<TestimonialCard />}
          >
            <span className="cursor-pointer font-bold">testimonial.</span>
          </Tooltip>
          Instead of a testimonial, he started yapping about project mayhem and
          how we should be using our skills to build a better future.
        </div>
        <Button
          size="lg"
          className="rounded-full pl-2 mt-10 w-fit self-center group"
        >
          <Avatar className="size-6">
            <AvatarImage
              src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
              alt="Hallie Richards"
            />
            <AvatarFallback className="text-foreground text-xs">
              HR
            </AvatarFallback>
          </Avatar>
          My Projects
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </section>

      <section id="about" className=" mt-10 flex flex-col">
        <h2 className="text-xl font-semibold font-work-sans">Bio</h2>

        <div className="text-lg text-neutral-600 dark:text-neutral-400 text-left">
          The server was administered by
          <Tooltip
            containerClassName="text-neutral-600 dark:text-neutral-400"
            content={<TooltipCard />}
          >
            <span className="cursor-pointer font-bold">Tyler Durden.</span>
          </Tooltip>{" "}
          Tyler has been with us for a long time. He is a great asset to the
          team and sometimes tries to act in different ways which can be
          difficult to manage. That is when we approached Tyler for a cute
          little
          <Tooltip
            containerClassName="text-neutral-600 dark:text-neutral-400"
            content={<TestimonialCard />}
          >
            <span className="cursor-pointer font-bold">testimonial.</span>
          </Tooltip>
          Instead of a testimonial, he started yapping about project mayhem and
          how we should be using our skills to build a better future.
        </div>

        <ContactModal />
      </section>
    </main>
  );
}

const TooltipCard = () => {
  return (
    <div>
      <img
        src="https://assets.aceternity.com/screenshots/tyler.webp"
        alt="Tyler Durden"
        className="aspect-square w-full rounded-sm"
      />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">Tyler Durden</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Soap Developer from a Tier 3 college. Enthusiastic and exhibits
          entrepreneurial spirit.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="">
      <blockquote className="mb-4 text-neutral-700 dark:text-neutral-300">
        This product is absolutely, grade A horse shit.
      </blockquote>
      <div className="flex items-center gap-2">
        <img
          src="https://assets.aceternity.com/screenshots/tyler.webp"
          alt="Tyler Durden"
          className="size-6 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
            Tyler Durden
          </p>
          <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
            Senior Product Manager at FC
          </p>
        </div>
      </div>
    </div>
  );
};
