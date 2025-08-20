"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VolumeIcon, VolumeOffIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./mode-toggle";

export const TopNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Replace this with your music URL
  const musicUrl =
    "https://eta.vgmtreasurechest.com/soundtracks/pokemon-ruby-sapphire-music-super-complete/feakhimw/1-05.%20Littleroot%20Town.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    // setIsPlaying(false);
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        onEnded={handleAudioEnded}
        preload="none"
        loop
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex items-center justify-between h-14  ${
          isScrolled
            ? "top-4 left-1/2 transform -translate-x-1/2 w-80 backdrop-blur-lg rounded-full shadow-lg"
            : "w-full backdrop-blur-sm "
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${"px-4 py-4 max-w-6xl mx-auto"}`}
        >
          {/* Left side - Avatar */}
          <div className="flex items-center">
            <Avatar className={`transition-all duration-400 ${"h-10 w-10"}`}>
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* Right side - Music Button */}

          <div className="flex gap-5">
            <ModeToggle className="size-6" />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleMusic}
              />
              <div className="group peer ring-0 bg-secondary rounded-full outline-none duration-300 after:duration-300 w-12 h-6 shadow-md peer-checked:bg-secondary peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-secondary-foreground after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95">
                <VolumeIcon className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 stroke-gray-900 w-4 h-4" />
                <VolumeOffIcon className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 stroke-gray-900 w-4 h-4" />
              </div>
            </label>
          </div>
        </div>
      </header>
    </>
  );
};
