"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/profile.svg"
        className={cn(
          "h-10 w-10 rounded-full object-fill p-1",
          isHovered && "border-1 border-black"
        )}
      />
    </Link>
  );
}
