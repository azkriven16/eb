import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Experience } from "./components/experience";
import { Loader } from "./components/loader";
import { Button } from "./components/ui/button";

export const ASSETS = [
  "https://eta.vgmtreasurechest.com/soundtracks/pokemon-ruby-sapphire-music-super-complete/feakhimw/1-05.%20Littleroot%20Town.mp3",
  "/images/sky.png",
  "/images/bg.png",
  "/images/biblegirlsmall.png",
];

export default function App() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const handleImageLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const handleContinue = () => {
    setIsLoading(false);
    // Delay showing experience to allow exit animation
    setTimeout(() => {
      setShowExperience(true);
    }, 400);
  };

  const progress = Math.round((loadedCount / ASSETS.length) * 100);
  const allImagesLoaded = loadedCount >= ASSETS.length;

  useEffect(() => {
    // handleContinue();
  }, [allImagesLoaded]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader
            key="loader"
            progress={progress}
            loadedCount={loadedCount}
            onComplete={handleImageLoaded}
          />
        )}

        {showExperience && <Experience key="experience" />}
        <Button
          disabled={!allImagesLoaded || progress !== 100}
          className="absolute bottom-0 z-50"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </AnimatePresence>
    </main>
  );
}
