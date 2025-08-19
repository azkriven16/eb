"use client";

import React, { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export const TopNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Replace this with your music URL
  const musicUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

  useEffect(() => {
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
    setIsPlaying(false);
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        onEnded={handleAudioEnded}
        preload="none"
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex items-center justify-between h-14 ${
          isScrolled
            ? "top-4 left-1/2 transform -translate-x-1/2 w-80 backdrop-blur-lg rounded-full shadow-lg border"
            : "w-full backdrop-blur-sm border-b"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${"px-4 py-4 max-w-7xl mx-auto"}`}
        >
          {/* Left side - Avatar */}
          <div className="flex items-center">
            <Avatar className={`transition-all duration-400 ${"h-10 w-10"}`}>
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* {!isScrolled && (
              <div className="ml-3 opacity-100 transition-opacity duration-300">
                <h2 className="text-sm font-medium text-gray-900">John Doe</h2>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            )} */}
          </div>

          {/* Right side - Music Button */}
          <Button
            onClick={toggleMusic}
            variant="ghost"
            size={isScrolled ? "sm" : "default"}
            className={`transition-all duration-300 hover:bg-gray-100 ${"p-3"}`}
          >
            {isPlaying ? (
              <Pause className={`transition-all duration-300 ${"h-5 w-5"}`} />
            ) : (
              <Play className={`transition-all duration-300 ${"h-5 w-5"}`} />
            )}
          </Button>
        </div>
      </header>
    </>
  );
};
