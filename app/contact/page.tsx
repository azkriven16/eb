import { ChatBot } from "@/components/chatbot";
import { CtaSection } from "@/components/sections/cta";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircularRevealHeading } from "@/components/ui/circular-reveal";

const items = [
  {
    text: "PROJECTS",
    image:
      "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkceCYjHtyWSduj04chzxgP3pt1Dvo8KfCsHnwk",
  },
  {
    text: "TECHSTACK",
    image:
      "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcZY3vRlCe5wpMsRmKntGfIu4E6OSxhgzL3kU1",
  },
  {
    text: "EXPERIENCE",
    image:
      "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcz9VsoNLlt5AKuj9HqWQm3NeDUywcLSxB6Yo1",
  },
  {
    text: "ABOUT",
    image:
      "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcypc1wWQBS4VNPtfqkpIhO7M6XUva5TzWomdZ",
  },
];

export default function ContactPage() {
  return (
    <main className="shell mt-30 md:mt-40 pb-20">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
          <p className="subheading md:max-w-2xl">
            I&apos;d love to hear from you — whether it&apos;s about projects,
            ideas, or just to say hi. Drop me a message or follow me on my
            socials below!
          </p>
          <div className="flex gap-10">
            <Image
              src="https://media.tenor.com/8qupEQSIsCsAAAAi/hidamari-sketch-miyako.gif"
              // src="https://media.tenor.com/Qm68f5zQrakAAAAj/dance-cute.gif"
              alt="CTA Gif"
              width={180}
              height={180}
              className="grayscale object-contain"
              draggable={false}
            />

            <div className="space-y-2">
              <h3 className="text-xl font-bold">On the web</h3>

              <a
                href="https://x.com/EugerBonete"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <FaXTwitter />
                <p>Twitter @ EugerBonete</p>
              </a>
              <a
                href="https://www.facebook.com/euger.bonete.9/"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <FaFacebookMessenger />
                <p>Facebook @ euger.bonete.9</p>
              </a>
              <a
                href="https://www.linkedin.com/in/euger-bonete/"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <FaLinkedinIn />
                <p>LinkedIn @ euger.bonete.9</p>
              </a>
              <a
                href="mailto:eugerbone@email.com"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <FaEnvelope />
                <p>Email @ euger.bonete.9</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-20">
          <Dialog>
            <DialogTrigger className="w-full">
              <div className="flex-1 flex items-center justify-center md:justify-end">
                <CircularRevealHeading
                  items={items}
                  centerText={
                    <div className="text-sm font-bold text-[#444444] uppercase">
                      Euger Chatbot
                    </div>
                  }
                  size="sm"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="h-[80vh]">
              <DialogHeader>
                <DialogTitle className="sr-only">Chatbot dialog</DialogTitle>
              </DialogHeader>
              <ChatBot />
            </DialogContent>
          </Dialog>
          <p className="subheading text-end mt-14">
            Feel free to ask anything about Euger&apos;s work experience,
            notable projects, technical skills, and areas of expertise.
          </p>
        </div>
      </div>
    </main>
  );
}
