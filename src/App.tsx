import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Experience } from "./components/experience";
import { Loader } from "./components/loader";

export const ASSETS = [
  // "https://picsum.photos/200/300?random=1",
  //   "https://picsum.photos/200/300?random=2",
  //   "https://picsum.photos/200/300?random=3",
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
    handleContinue();
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
      </AnimatePresence>
    </main>
  );
}
