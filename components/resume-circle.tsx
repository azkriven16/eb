import Link from "next/link";
import { CircularRevealHeading } from "@/components/ui/circular-reveal";

export const ResumeCircle = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center md:justify-left p-2 rounded-xl cursor-pointer pt-10"
    >
      <CircularRevealHeading
        items={[
          {
            text: "WORK EXPERIENCE",
            image:
              "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcz9VsoNLlt5AKuj9HqWQm3NeDUywcLSxB6Yo1",
          },
          {
            text: "EDUCATION",
            image:
              "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcypc1wWQBS4VNPtfqkpIhO7M6XUva5TzWomdZ",
          },
          {
            text: "PROJECTS",
            image:
              "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkceCYjHtyWSduj04chzxgP3pt1Dvo8KfCsHnwk",
          },
          {
            text: "SKILLS",
            image:
              "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcZY3vRlCe5wpMsRmKntGfIu4E6OSxhgzL3kU1",
          },
        ]}
        centerText={
          <div className="text-center space-y-2">
            <div className="text-7xl">📄</div>
            <p className="text-lg font-semibold text-black">Resume</p>
          </div>
        }
        size="sm"
        className="bg-gradient-to-br from-blue-100 to-indigo-200 shadow-[20px_20px_40px_rgba(59,130,246,0.15),-20px_-20px_40px_rgba(255,255,255,0.8)]"
      />
    </Link>
  );
};
