"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection("down");
        setIsVisible(false);
      } else {
        setScrollDirection("up");
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize audio when component mounts
  useEffect(() => {
    // Using a royalty-free ambient music track
    audioRef.current = new Audio(
      "https://eta.vgmtreasurechest.com/soundtracks/pokemon-ruby-sapphire-music-super-complete/feakhimw/1-05.%20Littleroot%20Town.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Handle audio events
    audioRef.current.addEventListener("loadstart", () => setIsLoading(true));
    audioRef.current.addEventListener("canplay", () => setIsLoading(false));
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));

    const playMusic = async () => {
      try {
        setIsLoading(true);
        await audioRef.current?.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Auto-play failed:", error);
        setIsPlaying(false);
        setIsLoading(false);
      }
    };

    // Small delay to ensure audio is loaded
    setTimeout(playMusic, 100);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsLoading(false);
    }
  };

  const gradientOpacity = Math.max(0, 1 - scrollY / 200);
  const isAtTop = scrollY < 50;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-32 pointer-events-none z-40 transition-opacity duration-700"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${
            gradientOpacity * 0.8
          }) 0%, rgba(0,0,0,${gradientOpacity * 0.4}) 50%, transparent 100%)`,
          opacity: isAtTop ? 1 : 0,
        }}
      />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isAtTop
            ? "bg-transparent"
            : "bg-black/20 backdrop-blur-2xl border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            <a href="/" className="relative group">
              <div className="font-light text-2xl lg:text-3xl text-white tracking-[0.2em] transition-all duration-500 group-hover:tracking-[0.3em]">
                LOGO
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
            </a>

            <div className="flex items-center">
              <div className="relative group">
                <button
                  onClick={toggleMusic}
                  disabled={isLoading}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-hover:border-white/40"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border border-white/40 border-t-white"></div>
                  ) : isPlaying ? (
                    <Pause
                      size={16}
                      className="text-white sm:w-[18px] sm:h-[18px]"
                    />
                  ) : (
                    <Play
                      size={16}
                      className="text-white ml-0.5 sm:w-[18px] sm:h-[18px]"
                    />
                  )}

                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                </button>

                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-white animate-pulse" : "bg-white/30"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
