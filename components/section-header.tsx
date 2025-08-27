"use client";

import { FadeIn } from "@/animations/fade-in";
import { Highlighter } from "./ui/highlighter";

interface SectionHeaderProps {
  icon: string;
  title: string;
  highlight?: string;
  description: string;
}

export function SectionHeader({
  icon,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <FadeIn>
      <div className="space-y-3">
        {/* Heading with icon */}
        <div className="flex items-center space-x-2">
          <span className="heading">{icon}</span>
          <span className="heading">
            <strong>{title}</strong>
          </span>
        </div>

        {/* Description paragraph */}
        <p className="subheading max-w-2xl">
          {description.split(highlight || "").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <Highlighter
                  action="box"
                  padding={4}
                  multiline={false}
                  color="oklch(79.5% 0.184 86.047)"
                  className="text-foreground"
                >
                  {highlight}
                </Highlighter>
              </span>
            ) : (
              part
            )
          )}
        </p>
      </div>
    </FadeIn>
  );
}
