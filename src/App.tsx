import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Experience } from "./components/experience";
import { Loader } from "./components/loader";
import { buttonVariants } from "./components/ui/button";
import { cn } from "./lib/utils";

export const ASSETS = [
  "https://picsum.photos/200/300?random=1",
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

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5 },
            }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.3 },
            }}
            className="fixed bottom-20 left-0 right-0 z-[100] flex justify-center"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: allImagesLoaded ? 1.05 : 1 }}
              disabled={!allImagesLoaded}
              onClick={handleContinue}
              className={cn(
                buttonVariants(),
                "w-52 transition-all duration-300 text-lg "
              )}
            >
              {allImagesLoaded ? "Continue" : `Loading... ${progress}%`}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
